import React from "react";
import axios from "axios";

export default function ProductScreen() {
  axios
    .get("http://localhost:8000/api/v1/media")
    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div>
      <p>hello</p>
    </div>
  );
}
