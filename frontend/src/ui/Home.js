import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar
          variant="dense"
          style={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
            flexDirection: "row",
          }}
        >
          {/* <Typography variant="h6" color="inherit" component="div">
            <Link
              to={"/"}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Get a Loan Today - Powered by{" "}
              <img
                src="https://assets-global.website-files.com/637359c81e22b715cec245ad/63dc31f8817a4a509d7635a7_Logo.svg"
                style={{
                  width: "100px",
                  height: "30px",
                  marginLeft: "10px",
                }}
                alt="polygon"
              />{" "}
            </Link>
          </Typography> */}

          <ConnectButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
