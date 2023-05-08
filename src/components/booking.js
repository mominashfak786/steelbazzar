import React, { useState } from "react";
import "../styles/booking.css";
function Bookings() {
  return (
    <>
      <div
        class=" align-items-center justify-content-center"
        style={{
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <label
          class="form-check-label"
          style={{ marginRight: "20px", fontSize: "20px", fontWeight: "bold" }}
        >
          Select Quantity:
        </label>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            style={{
              textAlign: "center",
              cursor: "pointer",
            }}
          />
          <label class="form-check-label" for="inlineRadio1">
            0-499
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
            style={{
              textAlign: "center",
              cursor: "pointer",
            }}
          />
          <label class="form-check-label" for="inlineRadio2">
            500+
          </label>
        </div>
        <div
          style={{
            textAlign: "center", fontSize: "27px", fontWeight: "bold",marginTop:"50px"
          }}
        >
          Select Company
        </div>
        <hr />
        <div
          style={{
            textAlign: "center", fontSize: "27px", fontWeight: "bold",marginTop:"50px"
          }}
        >
          Select Thickness
        </div>
        <hr />
        <div
          style={{
            textAlign: "center", fontSize: "27px", fontWeight: "bold",marginTop:"50px"
          }}
        >
      Enter Quantity
        </div>
        <hr />
        <div
          style={{
            textAlign: "center", fontSize: "30px", fontWeight: "bold",marginTop:"50px"
          }}
        >
      Cart
        </div>

      </div>
    </>
  );
}

function GP() {
  return (
    <div>
      <h2>GP Page</h2>
      <Bookings />
    </div>
  );
}

function CR() {
  return (
    <div>
      <h2>CR Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function GC8FT() {
  return (
    <div>
      <h2>GC 8 FT Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function GC8X4() {
  return (
    <div>
      <h2>GC 8 X 4 Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function GC10FT() {
  return (
    <div>
      <h2>GC 10 FT Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function GC10X4() {
  return (
    <div>
      <h2>GC 10 X 4 Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function GC12FT() {
  return (
    <div>
      <h2>GC 12 FT Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function GC12X4() {
  return (
    <div>
      <h2>GC 12 X 4 Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function GC14FT() {
  return (
    <div>
      <h2>GC 14 FT Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function GC14X4() {
  return (
    <div>
      <h2>GC 14 X 4 Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function GC16FT() {
  return (
    <div>
      <h2>GC 16 FT Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function GC16X4() {
  return (
    <div>
      <h2>GC 16 X 4 Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function ANGLE() {
  return (
    <div>
      <h2>ANGLE Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function CHANNEL() {
  return (
    <div>
      <h2>CHANNEL Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function JOIST() {
  return (
    <div>
      <h2>JOIST Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function CHQ_PLATE() {
  return (
    <div>
      <h2>CHQ PLATE Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function PLATE() {
  return (
    <div>
      <h2>PLATE Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function TMT() {
  return (
    <div>
      <h2>TMT Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function CC8FT() {
  return (
    <div>
      <h2>CC 8 FT Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function CC10FT() {
  return (
    <div>
      <h2>CC 10 FT Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function CC12FT() {
  return (
    <div>
      <h2>CC 12 FT Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function CC14FT() {
  return (
    <div>
      <h2>CC 14 FT Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function CC16FT() {
  return (
    <div>
      <h2>CC 16 FT Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function CC18FT() {
  return (
    <div>
      <h2>CC 18 FT Page</h2>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis
        necessitatibus atque deleniti accusamus nostrum dolorem modi
        consequuntur dolor eveniet! Exercitationem ab eos recusandae? Commodi
        corrupti obcaecati temporibus numquam iusto!
      </div>
    </div>
  );
}

function Booking() {
  const [currentPage, setCurrentPage] = useState("Bookings");

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  let currentPageComponent;
  switch (currentPage) {
    case "GP":
      currentPageComponent = <GP />;
      break;
    case "CR":
      currentPageComponent = <CR />;
      break;
    case "GC8FT":
      currentPageComponent = <GC8FT />;
      break;
    case "GC8X4":
      currentPageComponent = <GC8X4 />;
      break;
    case "GC10FT":
      currentPageComponent = <GC10FT />;
      break;
    case "GC10X4":
      currentPageComponent = <GC10X4 />;
      break;
    case "GC12FT":
      currentPageComponent = <GC12FT />;
      break;
    case "GC12X4":
      currentPageComponent = <GC12X4 />;
      break;
    case "GC14X4":
      currentPageComponent = <GC14X4 />;
      break;
    case "GC14FT":
      currentPageComponent = <GC14FT />;
      break;
    case "GC16FT":
      currentPageComponent = <GC16FT />;
      break;
    case "GC16X4":
      currentPageComponent = <GC16X4 />;
      break;
    case "ANGLE":
      currentPageComponent = <ANGLE />;
      break;
    case "CHANNEL":
      currentPageComponent = <CHANNEL />;
      break;
    case "JOIST":
      currentPageComponent = <JOIST />;
      break;
    case "CHQ_PLATE":
      currentPageComponent = <CHQ_PLATE />;
      break;
    case "PLATE":
      currentPageComponent = <PLATE />;
      break;
    case "TMT":
      currentPageComponent = <TMT />;
      break;
    case "CC8FT":
      currentPageComponent = <CC8FT />;
      break;
    case "CC10FT":
      currentPageComponent = <CC10FT />;
      break;
    case "CC12FT":
      currentPageComponent = <CC12FT />;
      break;
    case "CC14FT":
      currentPageComponent = <CC14FT />;
      break;
    case "CC16FT":
      currentPageComponent = <CC16FT />;
      break;
    case "CC18FT":
      currentPageComponent = <CC18FT />;
      break;
    default:
      currentPageComponent = <GP />;
      break;
  }

  return (
    <div className="mainmaincontainers">
      <div className="smallcontainers">
        <div className="button-container">
          <button onClick={() => handlePageClick("GP")}>GP</button>
          <button onClick={() => handlePageClick("CR")}>CR</button>
          <button onClick={() => handlePageClick("GC8FT")}>GC 8 FT</button>
          <button onClick={() => handlePageClick("GC8X4")}>GC 8 X 4</button>
          <button onClick={() => handlePageClick("GC10FT")}>GC 10 FT</button>
          <button onClick={() => handlePageClick("GC10X4")}>GC 10 X 4</button>
          <button onClick={() => handlePageClick("GC12FT")}>GC 12 FT</button>
          <button onClick={() => handlePageClick("GC12X4")}>GC 12 X 4</button>
          <button onClick={() => handlePageClick("GC14FT")}>GC 14 FT</button>
          <button onClick={() => handlePageClick("GC14X4")}>GC 14 X 4</button>
          <button onClick={() => handlePageClick("GC16FT")}>GC 16 FT</button>
          <button onClick={() => handlePageClick("GC16X4")}>GC 16 X 4</button>
          <button onClick={() => handlePageClick("ANGLE")}>ANGLE</button>
          <button onClick={() => handlePageClick("CHANNEL")}>CHANNEL</button>
          <button onClick={() => handlePageClick("JOIST")}>JOIST</button>
          <button onClick={() => handlePageClick("CHQ_PLATE")}>
            CHQ PLATE
          </button>
          <button onClick={() => handlePageClick("PLATE")}>PLATE</button>
          <button onClick={() => handlePageClick("TMT")}>TMT</button>
          <button onClick={() => handlePageClick("CC8FT")}>CC 8 FT</button>
          <button onClick={() => handlePageClick("CC10FT")}>CC 10 FT</button>
          <button onClick={() => handlePageClick("CC12FT")}>CC 12 FT</button>
          <button onClick={() => handlePageClick("CC12FT")}>CC 14 FT</button>
          <button onClick={() => handlePageClick("CC16FT")}>CC 16 FT</button>
          <button onClick={() => handlePageClick("CC18FT")}>CC 18 FT</button>
        </div>
        <div id="page-container">{currentPageComponent}</div>
      </div>
    </div>
  );
}
export default Booking;
