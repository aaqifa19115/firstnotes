import React from "react";
import { Landing } from "./components/Landing";
import { Card , CardContent } from "@mui/material";
import "./components/common.css"

function App() {
  return (
    <Card sx={{bgcolor:"tan"}}>
      <CardContent>
        <div align="center">
         <h1>Full Stack Notes</h1>
        </div>
     <Landing />
      </CardContent>
    </Card>
  );
}

export default App;
