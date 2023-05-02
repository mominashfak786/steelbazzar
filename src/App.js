import "./App.css";
import Login from "./components/login";
import Create from "./components/create";
import Loading from "./components/loading";
import { useState, useEffect } from "react";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingComplete(true);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {!loadingComplete && <Loading />}
      {loadingComplete && (
        <>
          <Login />
          <Create />
        </>
      )}
    </div>
  );
}

export default App;
