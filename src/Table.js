import React, { useState } from "react";

export default function Table(props) {
  return (
    <div>
      <table style={{ border: "1px solid black" }}>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Rollno</th>
          <th>class</th>
          <th>Phone </th>
          <th>Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>

        {props.list.map((obj, index) => (
          <tr>
            <td>{index}</td>
            <td>{obj.name}</td>
            <td>{obj.rollno}</td>
            <td>{obj.class}</td>
            <td>{obj.phone}</td>
            <td>{obj.address}</td>



            <td>
              <button onClick={() => props.setEditIndex(index)}>Edit</button>
            </td>
            <td>
              <button onClick={() => props.deleteItem(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
