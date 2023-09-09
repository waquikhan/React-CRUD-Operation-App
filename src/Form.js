import React, {useState, useEffect} from 'react'

export default function Form(props) {
    const [details, setDetails] = useState({});

    useEffect(() => {

        console.log('Effect');

        setDetails(props.list[props.editIndex] || {})

    }, [props.editIndex]);

    const changeDetails = (e) => {
        setDetails({...details, [e.target.name]: e.target.value});
    }

    const add = () => {
        setDetails({name: '', rollNo: '', phone: '', class: '', address: ''});
        props.addToList(details);
    }

  return (
    <div>
        Name:
      <input type="text" value={details.name} name="name" onChange={changeDetails} />
      <br />
        Roll no.:
      <input type="text" value={details.rollNo} name="rollNo" onChange={changeDetails} />
      <br />
        Class:
      <input type="text" value={details.class} name="class" onChange={changeDetails} />
      <br />
        Phone number:
      <input type="text" value={details.phone} name="phone" onChange={changeDetails} />
      <br />
        Address:
      <input type="text" value={details.address} name="address" onChange={changeDetails} />
      <br />

      <button onClick={add}>{props.editIndex == -1 ? 'Add': 'Edit'}</button>

    </div>
  )
}