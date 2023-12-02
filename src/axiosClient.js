import axios from "axios";
import { Children } from "react";
import { useState, useEffect } from "react";
const axiosClient = axios.create({
  baseURL: `https://localhost:8000/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // "Authorization": `Bearer ${localStorage.getItem("jwt")}`
  },
});

axiosClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status == 401) {
      window.location.href = `https://localhost:3000/login`;
    }
    console.error(`Error! Status Code: ` + error.response.status);
    return Promise.reject(error);
  }
);

export default axiosClient;

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <Children></Children>{" "}
      {/* this childcomponent will re-render when parent's state change */}
    </div>
  );
}
