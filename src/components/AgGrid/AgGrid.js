import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function AgGrid() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const [columnDefs, setColumnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json").then(
      (result) => result.json().then((rowData) => setRowData(rowData))
    );
    return () => {};
  }, []);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(
    () => ({
      sortable: "true",
      filter: true,
    }),
    []
  );

  const cellClickedListner = useCallback((e) => {
    console.log("clicked", e);
  }, []);

  const pushedClicked = useCallback(() => {
    gridRef.current.api.deselectAll();
  }, [gridRef]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <button onClick={pushedClicked}>pushed me</button>
      <AgGridReact
        ref={gridRef}
        onCellClicked={cellClickedListner}
        onCellValueChanged={() => alert("SHOW")}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        rowSelection="multiple"
      />
    </div>
  );
}
