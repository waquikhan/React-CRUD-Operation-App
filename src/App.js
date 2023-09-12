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
      class : 12,
      phone : 9923539374,
      address : 'pune'

    },
    {
      rollno: 3,
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
 