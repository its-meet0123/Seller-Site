import React, { useState } from "react";

import "./Cigmafeed.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Button, Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { CigmafeedData } from "./Data";

function Buttons({ children, onClick, className }) {
  return (
    <Button variant={className} onClick={onClick}>
      {children}
    </Button>
  );
}

export default function Feeddata() {
  const [selectItem, setSelectItem] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSelection(data) {
    setSelectItem(data);
  }

  const orderItem = [
    selectItem.name,
    selectItem.id,
    selectItem.price,
    quantity,
    quantity * selectItem.price,
  ];
  console.log(orderItem);

  function handleOrder() {
    setQuantity("");
    setSelectItem("");
  }

  return (
    <div className="list">
      <h3 className="text-danger">
        <Badge bg="warning" text="dark">
          Warning:
        </Badge>{" "}
        Use the selector of item, you are selecting.{" "}
      </h3>
      <div className="feed-data">
        <Cigmadata
          selectItem={selectItem}
          onSelection={handleSelection}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
      <Orderdata
        selectItem={selectItem}
        orderItem={orderItem}
        quantity={quantity}
        setOrder={handleOrder}
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

function Cigmadata({ onSelection, quantity, setQuantity, selectItem }) {
  const data = CigmafeedData;

  const [language, setLanguage] = useState(null);

  function handleLaguage(id) {
    setLanguage(id !== language ? id : null);
  }
  return (
    <Row>
      {data.map((data) => (
        <Data
          data={data}
          language={language}
          handleLaguage={handleLaguage}
          selectItem={selectItem}
          onSelection={onSelection}
          quantity={quantity}
          setQuantity={setQuantity}
          key={data.id}
        />
      ))}
    </Row>
  );
}

function Data({
  data,
  language,
  handleLaguage,
  selectItem,
  onSelection,
  quantity,
  setQuantity,
}) {
  const isSelected = selectItem?.id === data.id;
  return (
    <Col sm={4} className="mt-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.url} />
        <Card.Body>
          <Card.Title>
            <Badge bg="info">{data.name}</Badge>
          </Card.Title>
          <Card.Text>
            <Badge bg="danger">Qty.: {data.quantity - quantity}</Badge>
          </Card.Text>
          <Button onClick={() => handleLaguage(data.id)}>
            {data.id === language ? "Eng" : "Hin"}
          </Button>
          <Card.Text>
            {data.id === language ? data.feedingHin : data.feedingEng}
          </Card.Text>
          <Card.Text>
            <Badge bg="success">Price: {data.price}</Badge>
          </Card.Text>
          <Card.Text>
            <FloatingLabel controlId="floatingSelectGrid" label="Select Qty.">
              <Form.Select
                onChange={(e) =>
                  setQuantity((cur) =>
                    cur?.id === data.id ? null : Number(e.target.value)
                  )
                }
                aria-label="Floating label select example"
              >
                <option>0</option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Card.Text>
          <Buttons
            className={isSelected ? "btn btn-secondary" : "btn btn-primary"}
            onClick={() => onSelection(data)}
          >
            select
          </Buttons>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Orderdata({ selectItem, orderItem, quantity, setOrder }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Select item</th>
          <th>Price</th>
          <th>Select Qty.</th>
          <th>Total price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CIGMA</td>
          <td>{orderItem[0]}</td>
          <td>{orderItem[2]}</td>
          <td>{orderItem[3]}</td>
          <td>{orderItem[4]}</td>
        </tr>
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
      <Button onClick={() => setOrder()}>Order</Button>
    </Table>
  );
}
