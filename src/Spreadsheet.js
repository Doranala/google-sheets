import React, { useRef, useEffect } from "react";
import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.min.css";

const Spreadsheet = () => {
  const sheetRef = useRef(null);

  useEffect(() => {
    new Handsontable(sheetRef.current, {
      data: Array(10).fill(Array(10).fill("")), // 10x10 grid
      rowHeaders: true,
      colHeaders: true,
      formulas: true, // Enable formulas
      contextMenu: true, // Right-click menu
      licenseKey: "non-commercial-and-evaluation",
    });
  }, []);

  return <div ref={sheetRef} style={{ width: "100%", height: "400px" }} />;
};

export default Spreadsheet;
