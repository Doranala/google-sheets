import React, { useRef } from "react";
import Spreadsheet from "./components/Spreadsheet";
import Toolbar from "./components/Toolbar";
import FormulaBar from "./components/FormulaBar";

const App = () => {
  const hotRef = useRef(null);

  const applyStyle = (style, value = null) => {
    const selected = hotRef.current.getSelected();
    if (selected) {
      hotRef.current.getCellMeta(selected[0], selected[1])[style] = value || true;
      hotRef.current.render();
    }
  };

  return (
    <div>
      <Toolbar applyStyle={applyStyle} />
      <FormulaBar hotRef={hotRef} />
      <Spreadsheet />
    </div>
  );
};

export default App;

