import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menubar from "./component/Menubar";
import Header from "./component/Header";
import DisbursementApproval from "./page/DisbursementApproval";

function App() {
  return (
    <div className="container">
      <Menubar />
      <div className="grid-row">
        <Header />
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={<DisbursementApproval />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
