import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Buttons from "./Buttons";
//import Dropdown from "react-bootstrap/Dropdown";
//import DropdownButton from "react-bootstrap/DropdownButton";

export default function NavBar({ children, className, query, setQuery }) {
  return (
    <Navbar className={className}>
      <h2>KISSAN PASHU AAHAR</h2>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={query}
            />
          </Col>
          <Col xs="auto">
            {children}

            {/* <DropdownButton
          align={{ lg: "right" }}
          title="Language"
          id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1" onClick={() => handleLanguage(order.id)}>
            English
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={() => handleLanguage(order.id)}>
            Hindi
          </Dropdown.Item>
        </DropdownButton> */}
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}
