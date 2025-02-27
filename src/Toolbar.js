import React from "react";

const Toolbar = ({ applyStyle }) => {
  return (
    <div style={{ padding: "10px", background: "#f1f1f1" }}>
      <button onClick={() => applyStyle("bold")}>Bold</button>
      <button onClick={() => applyStyle("italic")}>Italic</button>
      <button onClick={() => applyStyle("color", "red")}>Red Text</button>
    </div>
  );
};

export default Toolbar;
