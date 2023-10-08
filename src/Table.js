import React, { useState } from "react";

export default function Table(props) {
  const filteredList = (props.list || []).filter((item) =>
    item?.name?.includes(props.search)
  );

  return (
    <div id="Student-Table">
      <table style={{ border: "1px solid black", width: "95%" }}>
        <thead>
          <tr
            id="table-row-1"
            style={{ border: "1px solid black", backgroundColor: "orange" }}
          >
            <th style={{ border: "1px solid black" }}>
              <strong>Index </strong>
            </th>
            <th style={{ border: "1px solid black" }}>
              <strong>Rollno </strong>
            </th>
            <th style={{ border: "1px solid black" }}>
              <strong>Name </strong>
            </th>
            <th style={{ border: "1px solid black" }}>
              <strong>email </strong>
            </th>
            <th style={{ border: "1px solid black" }}>
              <strong>Phone </strong>
            </th>
            <th style={{ border: "1px solid black" }}>
              <strong>City </strong>
            </th>
            <th style={{ border: "1px solid black" }}>
              <strong>Address </strong>
            </th>
            <th style={{ border: "1px solid black" }}>
              <strong>Edit </strong>
            </th>
            <th style={{ border: "1px solid black" }}>
              <strong>Delete </strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((obj, index) => (
            <tr key={obj.id} style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>{index}</td>
              <td style={{ border: "1px solid black" }}>{obj.rollno}</td>
              <td style={{ border: "1px solid black" }}>{obj.name}</td>
              <td style={{ border: "1px solid black" }}>{obj.email}</td>
              <td style={{ border: "1px solid black" }}>{obj.phone}</td>
              <td style={{ border: "1px solid black" }}>{obj.city}</td>
              <td style={{ border: "1px solid black" }}>{obj.address}</td>

              <td style={{ border: "1px solid black" }}>
                <button
                  onClick={() => props.setEditIndex(index)}
                  style={{
                    color: "white",
                    backgroundColor: "#362155",
                    padding: "1px",
                    margin: "1px",
                    width: "90px",
                  }}
                >
                  Edit
                </button>
              </td>
              <td style={{ border: "1px solid black" }}>
                <button
                  onClick={() => props.deleteItem(index)}
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    padding: "1px",
                    margin: "1px",
                    width: "90px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
