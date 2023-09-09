import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
// import './Table.css';
import Form from './Form';
import Table from './Table';

function App() {
  const [list, setList] = useState([]);
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
 