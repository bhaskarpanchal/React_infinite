import React, { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [Loader, setLoader] = useState(true);

  useEffect(() =>{
    fetchData()
  }, [])

  function fetchData() {
    fetch(`https://randomuser.me/api/?page=${page}&results=25&seed=abc`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject({status: res.status,statusText: res.statusText});
        }
      })
      .then((res) => {
        setData(res.results);
      })
      .catch((err) => console.log("Error, with message:", err.statusText));
  }

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">gender</th>
            <th scope="col">profile pic</th>
          </tr>
        </thead>
        <tbody>
          {data.map((itm) => {
            return (
              <tr>
                <td>{itm.name["first"]}</td>
                <td>{itm.gender}</td>
                <td>
                  <img src = {itm.picture["thumbnail"]}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default HomePage;
