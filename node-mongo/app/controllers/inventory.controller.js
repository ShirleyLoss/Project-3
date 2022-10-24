const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Inventory = mongoose.model("Inventory");

exports.createInventory = (req, res) => {
  const inventory = new Inventory({
    habitName: req.body.habitName,
    qty: req.body.qty,
    price: req.body.price,
    status: req.body.status,
  });
  //Save a Inventory in the MongoDB
  inventory
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Fail!",
        error: err.message,
      });
    });
};

exports.getInventory = (req, res) => {
  Inventory.findById(req.params.id)
    .select("-__v")
    .then((inventory) => {
      res.status(200).json(inventory);
    })
    .catch((err) => {
      if (err.kind == "ObjectId") {
        return res.status(404).send({
          message: "Inventory not found with id " + req.params.id,
          error: err,
        });
      }
      return res.status(500).send({
        message: "Error retrieving Inventory with id " + req.params.id,
        error: err,
      });
    });
};
//Get all inventories
exports.inventories = (req, res) => {
  Inventory.find()
    .select("-__v")
    .then((inventoryInfos) => {
      res.status(200).json(inventoryInfos);
    })
    .catch((err) => {
      //log on console if there is error to get inventories
      console.log(error);

      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};
// Delete an inventory base on the id of the associated item the user clicks
exports.deleteInventory = (req, res) => {
  Inventory.findByIdAndRemove(req.body.id)
    .select("-__v-_id")
    .then((inventory) => {
      if (!inventory) {
        res.status(404).json({
          message: "No inventory found with id = " + req.params.id,
          error: "404",
        });
      }
      res.status(200).json({});
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error => Can't delete inventory with id = " + req.params.id,
        error: err.message,
      });
    });
};
// Update inventory base on an ud of them that the user clicks
exports.updateInventory = (req, res) => {
  // Find inventory and update it
  Inventory.findByIdAndUpdate(
    req.body._id,
    {
      habitName: req.body.habitName,
      qty: req.body.qty,
      price: req.body.price,
      status: req.body.status,
    },
    { new: false }
  )
    .select("-__v")
    .then((inventory) => {
      if (!inventory) {
        return res.status(404).send({
          message:
            "Error -> Can't update an inventory with id " + req.params.id,
          error: "Not Found!",
        });
      }
      res.status(200).json(inventory);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error -> Can't update a inventory with id " + req.params.id,
        error: err.message,
      });
    });
};
