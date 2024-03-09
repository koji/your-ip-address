import { useState, useEffect } from "react";
import "./App.css";

const URL = "https://api.ipify.org?format=json";

function App() {
  const [ipAddress, setIpAddress] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("something wrong. there might be a network issue.");
          return response.json();
        }
      })
      .then((data: any) => {
        setIpAddress(data.ip);
      })
      .catch((error: any) => {
        setIpAddress("Sorry I cannot get your ip address...");
        setErrorMessage(`fetching error ${error}`);
      });
  }, []);

  return (
    <>
      <h1>your ip address</h1>
      <div className="card">
        <p>{ipAddress}</p>
        {errorMessage !== "" ? <p>{errorMessage}</p> : null}
      </div>
    </>
  );
}

export default App;
