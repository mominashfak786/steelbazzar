import React, { useState } from "react";
import "../styles/stocks.css";
function GP() {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    status: "",
    company: "",
    thickness: "",
    weight: "",
    pieces: "",
    average: "",
    closingWt: "",
    closingPcs: "",
  };
  const [currentData, setCurrentData] = useState(initialFormState);

  const addData = (newData) => {
    newData.id = data.length + 1;
    setData([...data, newData]);
  };

  const deleteData = (id) => {
    setData(data.filter((d) => d.id !== id));
  };

  const updateData = (id, updatedData) => {
    setEditing(false);
    setData(data.map((d) => (d.id === id ? updatedData : d)));
  };

  const editRow = (d) => {
    setEditing(true);
    setCurrentData({
      id: d.id,
      status: d.status,
      company: d.company,
      thickness: d.thickness,
      weight: d.weight,
      pieces: d.pieces,
      average: d.average,
      closingWt: d.closingWt,
      closingPcs: d.closingPcs,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editing) {
      updateData(currentData.id, currentData);
    } else {
      addData(currentData);
    }
    setCurrentData(initialFormState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentData({ ...currentData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="opps">
        <input
          type="text"
          name="status"
          value={currentData.status}
          onChange={handleInputChange}
          style={{ width: "8.5vw" }}
        />
        <input
          type="text"
          name="company"
          value={currentData.company}
          onChange={handleInputChange}
          style={{ width: "10.6vw" }}
        />
        <input
          type="text"
          name="thickness"
          value={currentData.thickness}
          onChange={handleInputChange}
          style={{ width: "10.8vw" }}
        />
        <input
          type="text"
          name="weight"
          value={currentData.weight}
          onChange={handleInputChange}
          style={{ width: "8.5vw" }}
        />
        <input
          type="text"
          name="pieces"
          value={currentData.pieces}
          onChange={handleInputChange}
          style={{ width: "7.4vw" }}
        />
        <input
          type="text"
          name="average"
          value={currentData.average}
          onChange={handleInputChange}
          style={{ width: "9.4vw" }}
        />
        <input
          type="text"
          name="closingWt"
          value={currentData.closingWt}
          onChange={handleInputChange}
          style={{ width: "12.3vw" }}
        />
        <input
          type="text"
          name="closingPcs"
          value={currentData.closingPcs}
          onChange={handleInputChange}
          style={{ width: "11.8vw" }}
        />
        <button type="submit" className="myButton">
          {editing ? "Update" : "Create"}
        </button>
      </form>

      {editing || data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Company</th>
              <th>Thickness</th>
              <th>Weight</th>
              <th>Pieces</th>
              <th>Average</th>
              <th>Closing Wt.</th>
              <th>Closing Pcs.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.status}</td>
                <td>{d.company}</td>
                <td>{d.thickness}</td>
                <td>{d.weight}</td>
                <td>{d.pieces}</td>
                <td>{d.average}</td>
                <td>{d.closingWt}</td>
                <td>{d.closingPcs}</td>
                <td>
                  <button onClick={() => editRow(d)}>Edit</button>
                  <button onClick={() => deleteData(d.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
function Gp() {
  return (
    <div>
      <h2>GP</h2>
      <GP />
    </div>
  );
}

function CR() {
  return (
    <div>
      <h2>CR Page</h2>
      <GP />
    </div>
  );
}

function GC8FT() {
  return (
    <div>
      <h2>GC 8 FT Page</h2>
      <GP />
    </div>
  );
}

function GC8X4() {
  return (
    <div>
      <h2>GC 8 X 4 Page</h2>
      <GP />
    </div>
  );
}

function GC10FT() {
  return (
    <div>
      <h2>GC 10 FT</h2>

      <GP />
    </div>
  );
}

function GC10X4() {
  return (
    <div>
      <h2>GC 10 X 4 Page</h2>
      <GP />
    </div>
  );
}

function GC12FT() {
  return (
    <div>
      <h2>GC 12 FT Page</h2>
      <GP />
    </div>
  );
}

function GC12X4() {
  return (
    <div>
      <h2>GC 12 X 4 Page</h2>
      <GP />
    </div>
  );
}

function GC14FT() {
  return (
    <div>
      <h2>GC 14 FT Page</h2>
      <GP />
    </div>
  );
}

function GC14X4() {
  return (
    <div>
      <h2>GC 14 X 4 Page</h2>
      <GP />
    </div>
  );
}

function GC16FT() {
  return (
    <div>
      <h2>GC 16 FT Page</h2>
      <GP />
    </div>
  );
}

function GC16X4() {
  return (
    <div>
      <h2>GC 16 X 4 Page</h2>
      <GP />
    </div>
  );
}

function ANGLE() {
  return (
    <div>
      <h2>ANGLE Page</h2>
      <GP />
    </div>
  );
}

function CHANNEL() {
  return (
    <div>
      <h2>CHANNEL Page</h2>
      <GP />
    </div>
  );
}

function JOIST() {
  return (
    <div>
      <h2>JOIST Page</h2>
      <GP />
    </div>
  );
}

function CHQ_PLATE() {
  return (
    <div>
      <h2>CHQ PLATE Page</h2>
      <GP />
    </div>
  );
}

function PLATE() {
  return (
    <div>
      <h2>PLATE Page</h2>
      <GP />
    </div>
  );
}

function TMT() {
  return (
    <div>
      <h2>TMT Page</h2>
      <GP />
    </div>
  );
}

function CC8FT() {
  return (
    <div>
      <h2>CC 8 FT Page</h2>
      <GP />
    </div>
  );
}

function CC10FT() {
  return (
    <div>
      <h2>CC 10 FT Page</h2>
      <GP />
    </div>
  );
}

function CC12FT() {
  return (
    <div>
      <h2>CC 12 FT Page</h2>
      <GP />
    </div>
  );
}

function CC14FT() {
  return (
    <div>
      <h2>CC 14 FT Page</h2>
      <GP />
    </div>
  );
}

function CC16FT() {
  return (
    <div>
      <h2>CC 16 FT Page</h2>
      <GP />
    </div>
  );
}

function CC18FT() {
  return (
    <div>
      <h2>CC 18 FT Page</h2>
      <GP />
    </div>
  );
}

function Stocks() {
  const [currentPage, setCurrentPage] = useState("GP");

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  let currentPageComponent;
  switch (currentPage) {
    case "Gp":
      currentPageComponent = <Gp />;
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
      currentPageComponent = <Gp />;
      break;
  }

  return (
    <div className="mainmaincontainers">
      <div className="button-container">
        <button onClick={() => handlePageClick("Gp")}>Gp</button>
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
        <button onClick={() => handlePageClick("CHQ_PLATE")}>CHQ PLATE</button>
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
  );
}
export default Stocks;
