import React from "react";

import { CigmafeedData } from "../Data.js";

import { Row } from "react-bootstrap";
import { Data } from "./Carddata";

export default function CigmaData({
  onSelection,
  selectItem,
  language,
  selectLanguage,
  order,
}) {
  const data = CigmafeedData;

  return (
    <Row>
      {data.map((data) => (
        <Data
          data={data}
          language={language}
          order={order}
          selectItem={selectItem}
          onSelection={onSelection}
          key={data.id}
        />
      ))}
    </Row>
  );
}
