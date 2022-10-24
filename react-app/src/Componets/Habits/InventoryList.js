import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import NavBar from "../Layout/NavBar/index";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import InventoryEdit from "./InventoryEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
// import { updateInventory } from "../../node-mongo/app/controllers/inventory.controller";

class InventoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventories: [],
      isLoading: true,
    };
  }

  //fetching data from the database once this InventoryList component  has been mounted
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch("api/inventories")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          inventories: data,
          isLoading: false,
        })
      );
  }

  //fetch API to match the correct route in the backend router
  removeInv = async (id) => {
    await fetch(`/api/inventory/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("Remove Done!");
    // update inventory state minus removed item
    let updatedInventories = [...this.state.inventories].filter(
      (i) => i._id !== id
    );
    this.setState({
      inventories: updatedInventories,
    });
  };
  render() {
    const { inventories, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const inventoryList = inventories.map((inventory) => {
      return (
        <tr key={inventory._id}>
          <td style={{ whiteSpace: "nowrap" }}>{inventory.habitName}</td>
          {/* <td>{inventory.qty}</td> */}
          {/* <td>{inventory.price}</td> */}
          <td>{inventory.status}</td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="transparent"
                tag={Link}
                to={"/habits/" + inventory._id}
              >
                <FontAwesomeIcon icon={faEdit} color="#3C873A" />
              </Button>
              <Button
                size="sm"
                color="transparent"
                onClick={() => this.removeInv(inventory._id)}
              >
                <FontAwesomeIcon icon={faTrash} color="red" />
              </Button>
            </ButtonGroup>
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <input type="checkbox" />
          </td>

          <td>
            <input type="checkbox" />
          </td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
      );
    });

    return (
      <div>
        <NavBar />
        {/* <div className="row">
          <div className="left col-4">
            <InventoryEdit />
          </div> */}

        <Container fluid className="col-12">
          <div className="float-right">
            <h3>Habit List</h3>
            <Table className="mt-4">
              <thead>
                <tr>
                  <th width="20%">Habit Name</th>
                  {/* <th width="15%">Short Description</th> */}
                  {/* <th width="15%">Price</th> */}
                  <th width="30%">Short Description</th>
                  <th width="20%">Actions</th>
                  <th width="7%">Monday</th>
                  <th width="7%">Tuesday</th>
                  <th width="7%">Wednesday</th>
                  <th width="7%">Thursday</th>
                  <th width="7%">Friday</th>
                  <th width="7%">Saturday</th>
                  <th width="10%">Sunday</th>
                </tr>
              </thead>
              <tbody>{inventoryList}</tbody>
            </Table>
            <Button
              color="success"
              className="my-4 flat-button"
              tag={Link}
              to="/habits/new"
            >
              Add New Habit
            </Button>
          </div>
        </Container>
      </div>
      // </div>
    );
  }
}
export default withRouter(InventoryList);
