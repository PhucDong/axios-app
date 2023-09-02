import React, { useEffect } from "react";
import { BASE_URL } from "./app/config";
import apiService from "./app/apiService";

function App() {
  // console.log(6, apiService());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.post("/api/register", {
          email: "eve.holt@reqres.in",
          password: "pistol",
        });
        console.log(15, response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Axios</h1>
    </div>
  );
}

export default App;
