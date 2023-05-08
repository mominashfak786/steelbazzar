import React from "react";
import "../styles/navbars.css";
import { Link } from "react-router-dom";
import Logo from "../assets/facebook_cover_photo_1.png";

const Dashboard = () => {
  return (
    <>
      <div className="mainthing">
        <div className="navbar">
        <Link to="/"><img
            src={Logo}
            alt=""
            style={{
              width: 210,
              height: 85,
              marginBottom: "5px",
              cursor: "pointer",
            }}
          /> </Link>
          <div>
            <Link to="/">
              <span class="bts">
                Logout <i class="fas fa-sign-out-alt"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="maincontainer">
          <div class="grid-container">
            <Link to="/stocks" style={{ textDecoration: 'none' }}>
              {" "}
              <div class="grid-item">STOCKS</div>
            </Link>
            <Link to="/booking" style={{ textDecoration: 'none' }}>
              {" "}
              <div class="grid-item">BOOKINGS</div>
            </Link>
            <Link to="/orders" style={{ textDecoration: 'none' }}>
              {" "}
              <div class="grid-item">ORDERS</div>
            </Link>
            <Link to="/ratelistview" style={{ textDecoration: 'none' }}>
              {" "}
              <div class="grid-item">RATE LIST VIEW</div>
            </Link>
            <Link to="/ratelist" style={{ textDecoration: 'none' }}>
              {" "}
              <div class="grid-item">RATE LIST</div>
            </Link>
            <Link to="dailysales" style={{ textDecoration: 'none' }}>
              {" "}
              <div class="grid-item">DAILY SALES</div>
            </Link>
            <Link to="/salesreport" style={{ textDecoration: 'none' }}>
              {" "}
              <div class="grid-item">SALES REPORT</div>
            </Link>
            <Link to="/warehouse" style={{ textDecoration: 'none' }}>
              {" "}
              <div class="grid-item">WARE HOUSE</div>
            </Link>
            <div class="grid-item1"></div>
            <Link to="/headofficeexpense" style={{ textDecoration: 'none' }}>
              {" "}
              <div class="grid-item">
                HEAD OFFICE <br /> EXPENSES
              </div>
            </Link>
            <Link to="/expensetracker" style={{ textDecoration: 'none' }}>
              {" "}
              <div class="grid-item">
                EXPENSE <br /> TRACKER
              </div>
            </Link>
            <div class="grid-item1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
