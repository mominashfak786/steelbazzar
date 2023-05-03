import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Create from "./components/create";
import Loading from "./components/loading";
import Dashboard from "./components/dashboard";
import Stocks from "./components/stocks";
import Booking from "./components/booking";
import Orders from "./components/order";
import Ratelistview from "./components/ratelistview";
import Ratelist from "./components/ratelist";
import Dailysales from "./components/dailysales";
import Salesreport from "./components/salesreport";
import Headofficeexpenses from "./components/headofficeexpenses";
import Warehouse from "./components/warehouse";
import Expensetracker from "./components/expensetracker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Loading />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/ratelistview" element={<Ratelistview />} />
        <Route path="/ratelist" element={<Ratelist />} />
        <Route path="/dailysales" element={<Dailysales />} />
        <Route path="/salesreport" element={<Salesreport />} />
        <Route path="/headofficeexpenses" element={<Headofficeexpenses />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/expensetracker" element={<Expensetracker />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
