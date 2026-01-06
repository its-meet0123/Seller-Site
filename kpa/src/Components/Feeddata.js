import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import CigmaData from "./Cimgmadata";
import Buttons from "./Buttons";
import NavBar from "./Navbar.js";

export default function FeedData() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState(true);

  const [selectItem, setSelectItem] = useState("");
  //const [quantity, setQuantity] = useState();
  const [order, setOrder] = useState([]);

  useEffect(function () {
    fetch("http://localhost:9000/cigmafeeddata/name")
      .then((res) => res.json())
      .then((dota) => console.log(dota))
      .then((err) => console.error(err));
  }, []);

  function handleLanguage(id) {
    setLanguage(id !== language ? id : null);
  }

  function handleSelection(data, quantity) {
    // setQuantity(quantity);

    let orderItem = data;
    orderItem.quantity = quantity;
    orderItem.totalprice = quantity * data.price;

    setOrder([...order, orderItem]);

    setSelectItem(data);
    console.log(orderItem);
  }

  function handleOrder(value) {
    setOrder(value);
  }

  return (
    <div className="list">
      <div className="mt-3">
        <NavBar
          className="bg-body-tertiary justify-content-between"
          query={query}
          setQuery={setQuery}
        >
          {/* <h3 className="text-danger">
          <Badge bg="warning" text="dark">
            Warning:
          </Badge>{" "}
          Use the selector of item, you are selecting.{" "}
        </h3> */}

          <Badge bg="primary" text="dark">
            Language:{" "}
            <Buttons onClick={() => handleLanguage(order.id)}>
              {order.id === language ? "Hin" : "Eng"}
            </Buttons>
          </Badge>
        </NavBar>
      </div>

      <div className="feed-data">
        <CigmaData
          selectItem={selectItem}
          order={order}
          onSelection={handleSelection}
          selectLanguage={handleLanguage}
          language={language}
          key={order.id}
        />
      </div>
      <Orderdata
        selectItem={selectItem}
        order={order}
        setOrder={handleOrder}
        key={order.id}
      />
      <h5 className="text-danger">
        <Badge bg="warning" text="dark">
          Attention plz :
        </Badge>{" "}
        Before ordering, please check that your item and quantity are the same
        as you selected.
      </h5>
    </div>
  );
}

function Orderdata({ order, setOrder }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Select item</th>
          <th>Price</th>
          <th>Select Qty.</th>
          <th>Total price</th>
          <th>Action</th>
        </tr>
      </thead>
      {order.map((item, index) => (
        <tbody>
          <tr>
            <td>{item.title}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.totalprice}</td>
            <td>
              <Buttons
                onClick={() => setOrder(order.filter((item, i) => i !== index))}
              >
                Remove
              </Buttons>
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}
