import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


export function PantsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("From handle new");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/pants", params).then(response => {
      console.log(response.data);
    })
  };

  return (
    <div>
      <h1>Pants New</h1>
      <form onSubmit ={handleSubmit}>
        <p>Name<input type ="text" name ="name"></input></p>
        <button type ="submit">Create</button> 
      </form>
      <hr/>
    </div>
  );
}
