import React from "react";
import "../styles/navbars.css";
import Logout from "../assets/logout.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="mainthing">
        <div className="navbar">
          <div>Welcome Sir</div>
          <div>
            <Link to="/login"><span>Logout</span></Link>
            <span>
              {" "}
              <img src={Logout} alt="" />
            </span>
          </div>
        </div>
        <div className="cardvalues">
          <div className="row">
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
           
          </div>

          <div className="row">
          <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
          
          </div>
          <div className="row">
          <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
           
          </div>
          <div className="row">
          <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            
          </div>
          <div className="row">
          <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
           
          </div>
          <div className="row">
          <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
           
          </div>
          

          
          <div className="row">
          <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            <div className="ctr">Work-data</div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
