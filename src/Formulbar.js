import React, { useState } from "react";

const FormulaBar = ({ hotRef }) => {
  const [formula, setFormula] = useState("");

  const applyFormula = () => {
    const cell = hotRef.current.getActiveEditor();
    if (cell) {
      hotRef.current.setDataAtCell(cell.row, cell.col, formula);
    }
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <input
        type="text"
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        placeholder="Enter formula (e.g., =SUM(A1:A5))"
      />
      <button onClick={applyFormula}>Apply</button>
    </div>
  );
};

export default FormulaBar;
