import React, { useState } from "react";

export default function Table(props) {

  return (

    <div id="Student-Table">
      <table style={{ border: "1px solid black", width:"95%"}}>
        <tr id="table-row-1" style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>Index</th>
          <th style={{ border: "1px solid black" }}>Rollno</th>
          <th style={{ border: "1px solid black" }}>Name</th>
          <th style={{ border: "1px solid black" }}>email</th>
          <th style={{ border: "1px solid black" }}>Phone </th>
          <th style={{ border: "1px solid black" }}>City</th>
          <th style={{ border: "1px solid black" }}>Address</th>
          <th style={{ border: "1px solid black" }}>Edit</th>
          <th style={{ border: "1px solid black" }}>Delete</th>
        </tr>

        {props.list.map((obj, index) => (
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>{index}</td>
            <td style={{ border: "1px solid black" }}>{obj.rollno}</td>
            <td style={{ border: "1px solid black" }}>{obj.name}</td>
            <td style={{ border: "1px solid black" }}>{obj.email}</td>
            <td style={{ border: "1px solid black" }}>{obj.phone}</td>
            <td style={{ border: "1px solid black" }}>{obj.city}</td>
            <td style={{ border: "1px solid black" }}>{obj.address}</td>



            <td style={{ border: "1px solid black" }} >
              <button onClick={() => props.setEditIndex(index)} style={{color:"white",backgroundColor:'#362155',padding:"1px" , margin:"1px" ,width:"90px" }}>Edit</button>
            </td>
            <td style={{ border: "1px solid black" }} >
              <button onClick={() => props.deleteItem(index)}style={{color:"white",backgroundColor:'red' ,padding:"1px" , margin:"1px" ,width:"90px"}}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
