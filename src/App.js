import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import './Table.css';
import './Form.css';
import Form from './Form';
import Table from './Table';

function App() {
  const [list, setList] = useState([
    {
      rollno : 1,
      name: 'abc',
      email:"-",
      phone : 9923539374,
      city : 'pune',
      address : 12

    },
    {
      rollno : 2,
      name: 'abc',
      email:"-",
      phone : 9923539374,
      city : 'pune',
      address : 12

    },
    {
      rollno : 3,
      name: 'abc',
      email:"-",
      phone : 9923539374,
      city : 'pune',
      address : 12

    },
    {
      rollno : 4,
      name: 'abc',
      email:"-",
      phone : 9923539374,
      city : 'pune',
      address : 12

    },
    {
      rollno : 5,
      name: 'abc',
      email:"-",
      phone : 9923539374,
      city : 'pune',
      address : 12

    },
    {
      rollno : 6,
      name: 'abc',
      email:"-",
      phone : 9923539374,
      city : 'pune',
      address : 12

    },
    {
      rollno : 7,
      name: 'abc',
      email:"-",
      phone : 9923539374,
      city : 'pune',
      address : 12

    },
    {
      rollno: 8,
      name: 'pqr',
      class : 12,
      phone : 985798724,
      address : 'nagpur'
    },
    {
      rollno: 2,
      name: 'nmp',
      class : 12,
      phone : 12345,
      address : 'kolhapur'
    },
    {
      rollno: 2,
      name: 'nmp',
      class : 12,
      phone : 12345,
      address : 'kolhapur'
    },
    {
      rollno: 2,
      name: 'nmp',
      class : 12,
      phone : 12345,
      address : 'kolhapur'
    },
    {
      rollno: 2,
      name: 'nmp',
      class : 12,
      phone : 12345,
      address : 'kolhapur'
    },
    {
      rollno: 2,
      name: 'nmp',
      class : 12,
      phone : 12345,
      address : 'kolhapur'
    }
  ]);
  const [editIndex, setEditIndex] = useState(-1);

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
    
    <Form list={list} editIndex={editIndex} addToList={addToList} />

    <Table setEditIndex={setEditIndex} list={list} deleteItem={deleteItem} />
      
    </div>
  );
}

export default App;
 