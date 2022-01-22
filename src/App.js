import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExpenseTracker from "./routes/ExpenseTracker";
import Login from "./routes/Login";
import Register from "./routes/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} exact={true}></Route>
        <Route path="/login" element={<Login />} exact={true}></Route>
        <Route path="/register" element={<Register />} exact={true}></Route>
        <Route
          path="/expensetracker"
          element={<ExpenseTracker />}
          exact={true}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
