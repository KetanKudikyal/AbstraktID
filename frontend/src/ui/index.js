import React, { useState } from "react";
import Navigation from "./Home";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MyModal from "../Modal";
import BorrowLendTable from "./BorrowLendTable";
import DataTable from "./Table";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Main() {
  const [type, setType] = useState("lend");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  return (
    <ThemeProvider theme={darkTheme}>
      <MyModal setIsOpen={setIsOpen} isOpen={isOpen} data={data} />
      <CssBaseline />
      <Navigation />
      <div className="h-[200px]"></div>
      <div
        style={{
          maxWidth: "1000px",
          marginTop: "200px",
          margin: "auto",
        }}
      >
        <div className="flex items-center space-x-3 justify-start">
          <button
            onClick={() => {
              setType("lend");
            }}
          >
            Lend
          </button>
          <button
            onClick={() => {
              setType("borrow");
            }}
          >
            Borrow
          </button>
        </div>
        {type === "lend" && <DataTable />}
        {type === "borrow" && (
          <BorrowLendTable setIsOpen={setIsOpen} setData={setData} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default Main;

const tableCardStyle = {
  // backgroundColor: '#ffffff',
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  margin: "20px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const tableCellStyle = {
  border: "1px solid #e2e8f0",
  padding: "12px",
  textAlign: "left",
};

const TableCard = () => {
  return (
    <div style={tableCardStyle}>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={tableCellStyle}>Field 1</td>
            <td style={tableCellStyle}>Value 1</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Field 2</td>
            <td style={tableCellStyle}>Value 2</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Field 3</td>
            <td style={tableCellStyle}>Value 3</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Field 4</td>
            <td style={tableCellStyle}>Value 4</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Field 5</td>
            <td style={tableCellStyle}>Value 5</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Field 6</td>
            <td style={tableCellStyle}>Value 6</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Field 7</td>
            <td style={tableCellStyle}>Value 7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
