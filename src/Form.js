import React, { useState, useEffect } from "react";

export default function Form(props) {
  const [details, setDetails] = useState({});

  useEffect(() => {
    console.log("Effect");

    setDetails(props.list[props.editIndex] || {});
  }, [props.editIndex]);

  const changeDetails = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const add = () => {
    setDetails({ name: "", rollno: "", phone: "", email: "", address: "", city:""});
    props.addToList(details);
  };

  return (
//----------------------------------------------New Code --------------------------------------------
<container className="container">
<h1><b>Fill the Student Details Below !</b></h1>
<form action="#">
   <div className="form-row">
      <div className="input-data">
         <label htmlFor=""><strong>Enter Your Roll No :</strong> </label>  
         <input type="number"id='Roll-no' placeholder="Enter Yout Roll Number" value={details.rollno} name="rollno" onChange={changeDetails}></input>
         <div className="underline"></div>
      </div>
      <div className="input-data">
         <label htmlFor=""><strong>Enter Your  Name :</strong> </label>  
         <input type="text" placeholder="Enter Your Full Name" value={details.name} name="name" onChange={changeDetails}></input>
         <div className="underline"></div>
      </div>
   </div>
   <div className="form-row">
      <div className="input-data">
         <label htmlFor=""> <strong>Enter Email Address :</strong></label>
         <input type="text" id='Email' placeholder='Enter Email' value={details.email} name="email" onChange={changeDetails} ></input>
         <div className="underline"></div>
      </div>
      <div className="input-data">
         <label htmlFor=""> <strong> Enter Contact Number  : </strong></label>
         <input id='phone-no' type="text" placeholder="Enter Contact" value={details.phone} name="phone" onChange={changeDetails} ></input>
         <div className="underline"></div>
      </div>
   </div>
   <div className="form-row">
   <div className="input-data">
         <label htmlFor=""> <strong>Enter Your City  : </strong></label>
         <input id='city' type="text" placeholder='Enter city' value={details.city} name="city" onChange={changeDetails} ></input>
         <div className="underline"></div>
      </div>
      <div className="input-data">
         <label htmlFor=""> <strong>Enter Your Address  : </strong></label>
         <input id='address' type="text" placeholder='Enter Address' value={details.address} name="address" onChange={changeDetails} ></input>
         <div className="underline"></div>
      </div>
   </div>
</form> 
<button onClick={add} style={{border: "1px solid white" , marginTop:"px " ,color: 'white',backgroundColor:"black" , width: "200px",height:'30px' }} >{props.editIndex === -1 ? 'Add': 'update'}</button>
</container>
  );
}




// .................................. THe Old Code  ...................................

//     <div id='Name' >
//     Roll no :
//   <input id='Roll-no' type="text" value={details.rollno} name="rollno" onChange={changeDetails} />
//   <br />
//     Name: 
//   <input type="text" value={details.name} name="name" onChange={changeDetails} />
//   <br />
//     Email:
//   <input id='Class' type="text" value={details.email} name="email" onChange={changeDetails} />
//   <br />
//     Phone number:
//   <input id='phone-no' type="text" value={details.phone} name="phone" onChange={changeDetails} />
//   <br />
//     Address:
//   <input id='address' type="text" value={details.address} name="address" onChange={changeDetails} />
//   <br />

//   <button onClick={add} style={{border: "1px solid black" , marginTop:"5px " ,color: 'white',backgroundColor:"rgb(223 233 234 / 50%)" , width: "100px" }} >{props.editIndex === -1 ? 'Add': 'update'}</button>

// </div>
//      );
//  }
