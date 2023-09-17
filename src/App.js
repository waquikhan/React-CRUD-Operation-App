import React, {useState} from 'react'
import * as ReactDOM from "react-dom/client";
import './App.css';
import './Table.css';
import './Form.css';
import Form from './Form';
import Table from './Table';
import Navbar from './Navbar'
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {
  const [list, setList] = useState([
    {
      rollno : 1,
      name: 'Waqui Ahmad khabn ',
      email:"waquikhan313@gmail.com",
      phone : 9923539374,
      city : 'pune',
      address : "Kondhwa"

    },
    {
      rollno : 2,
      name: 'Mohammad awes',
      email:"awes@gmail.com",
      phone : 9077675499,
      city : 'Hydarabade',
      address : 'Rampalli'

    },
    {
      rollno : 3,
      name: 'Khan hasan',
      email:"khanhasan.khan@hotmail.com ",
      phone : 9954782209,
      city : 'Akola',
      address : 'Patur'

    },
    {
      rollno : 4,
      name: 'Izhan Shaikh',
      email:"izhan.shaikh@hotmail.com",
      phone : 1234576543,
      city : 'Akola',
      address : 'Deepak Chowk'

    },
    {
      rollno : 5,
      name: 'Mohsin Abdul Salam',
      email:"mohsin.abdul.salam@rediffmail.com",
      phone : 9923554909,
      city : 'Amravati',
      address : 'Chandni Chowk'

    },
    {
      rollno : 6,
      name: 'Sayed Saddam ',
      email:"sayyed.saddam@rediffmail.com",
      phone : 9923539374,
      city : 'Amravati',
      address : 'Pinjar'

    },
    {
      rollno : 7,
      name: 'Urooj Khan  ',
      email:"Urooj.khan@rediffmail.com",
      phone : 9923539374,
      city : 'Akola',
      address : 'Balapur'

    },
    {
      rollno : 8,
      name: 'Sayed Sajid',
      email:"sayed.sajid@gmail.com",
      phone : 9923539374,
      city : 'Amravati',
      address : 'pathan chowk'

    },
    {
      rollno : 9,
      name: 'Imtan pathan',
      email:"imrankhanpathan@gmail.com",
      phone : 9923539374,
      city : 'Amravati',
      address : 'pathan chowk'

    }
   
  ]);
  const [editIndex, setEditIndex] = useState(-1);
  const [search ,setSearch] = useState('');

  const deleteItem = (index) => {
    const deletedList = list.filter((o, i) => i !== index);
    setList(deletedList)
  }


  const addToList = (details) => {
    if (editIndex === -1) {
      setList([...list, details]);
    } else {
      const editedList = [...list];
      editedList[editIndex] = details;
      setList(editedList);
      setEditIndex(-1)
    }
  }

  return (




    <div className="App">
    <Navbar/> 
    <Home/>
    <Form list={list} editIndex={editIndex} addToList={addToList} />
    <div className="Search">
    <lable className="Search-text" >SEARCH : </lable>
    <input className='Input-text' placeholder='Search By Name' type="text" onChange={e => setSearch(e.target.value)} value={search} style={{color:'black'}}/>
    <button onClick={() =>setSearch('')}>Clear Search</button>
    </div>
    <Table search={search} setEditIndex={setEditIndex} list={list} deleteItem={deleteItem} />
      
    </div>
  );
}

export default App;
 