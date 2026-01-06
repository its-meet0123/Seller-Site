import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import Buttons from "./Buttons";
import Expand from "./Textfile";

export function Data({ data, language, selectItem, onSelection, order }) {
  const isSelected = selectItem?.id === data.id;

  const [selectedQuantity, setSelectedQuantity] = useState(0);
  return (
    <Col sm={4} className="mt-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.url} />
        <Card.Body>
          <Card.Title>
            <Badge bg="info">{data.name}</Badge>
          </Card.Title>
          <Card.Text>
            <Badge bg="danger">Qty.: {data.quantity - selectedQuantity}</Badge>
          </Card.Text>
          <Card.Text>
            <Expand
              expandBtnText="See more"
              collapseBtnText="See less"
              expanded={false}
              collapseNumWord={15}
            >
              {order.id === language ? data.feedingHin : data.feedingEng}
            </Expand>
          </Card.Text>
          <Card.Text>
            <Badge bg="success">Price: {data.price}</Badge>
          </Card.Text>
          <Card.Text>
            <FloatingLabel controlId="floatingSelectGrid" label="Select Qty.">
              <Form.Select
                onChange={(e) =>
                  setSelectedQuantity((cur) =>
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
            onClick={() => onSelection(data, selectedQuantity)}
          >
            select
          </Buttons>
        </Card.Body>
      </Card>
    </Col>
  );
}
