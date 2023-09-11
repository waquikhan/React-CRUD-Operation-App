import React, { useState } from "react";

export default function Table(props) {

  return (

    <div id="Student-Table">
      <table style={{ border: "1px solid black" }}>
        <tr id="table-row-1" >
          <th>Index</th>
          <th>Rollno</th>
          <th>Name</th>
          <th>class</th>
          <th>Phone </th>
          <th>Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>

        {props.list.map((obj, index) => (
          <tr>
            <td>{index}</td>
            <td>{obj.rollno}</td>
            <td>{obj.name}</td>
            <td>{obj.class}</td>
            <td>{obj.phone}</td>
            <td>{obj.address}</td>



            <td>
              <button onClick={() => props.setEditIndex(index)} style={{color:"white",backgroundColor:'#362155'}}>Edit</button>
            </td>
            <td>
              <button onClick={() => props.deleteItem(index)}style={{color:"white",backgroundColor:'red'}}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
