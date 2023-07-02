import React, { useState } from "react";
import "./index.css";

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor = "#0000ff",
  className,
  expanded = false,
  children,
}) {
  const [isExpended, setIsExpended] = useState(expanded);
  const displayText = isExpended
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  const handleExpended = () => {
    setIsExpended(!isExpended);
  };
  return (
    <div className={className}>
      {displayText}
      <span
        onClick={handleExpended}
        style={{ color: buttonColor, cursor: "pointer" }}
      >
        {isExpended ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
}
