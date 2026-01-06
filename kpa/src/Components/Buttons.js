import React from "react";
import { Button } from "react-bootstrap";

export default function Buttons({ children, onClick, className, style }) {
  return (
    <Button variant={className} onClick={onClick}>
      {children}
    </Button>
  );
}
