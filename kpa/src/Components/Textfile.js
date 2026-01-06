import React, { useState } from "react";
import Buttons from "./Buttons.js";

export default function Expand({
  children,
  expandBtnText,
  collapseBtnText,
  expanded,
  collapseNumWord,
}) {
  // const btnStyle = {
  //   border: "none",
  //   backgroundColor: "#fff",
  //   fontWeight: "600",
  // };

  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapseNumWord).join(" ") + "....";

  return (
    <div>
      {displayText}
      <Buttons
        onClick={() => setIsExpanded((exp) => !exp)}
        className="btn btn-outline-light text-primary"
      >
        {isExpanded ? collapseBtnText : expandBtnText}
      </Buttons>
    </div>
  );
}
