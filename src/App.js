import React, { useState } from 'react'
import Header from '../src/Component/Header';
import Footer from '../src/Component/Footer';
import CreateNote from '../src/Component/CreateNote';
import Note from '../src/Component/Note';
import './App.css'


const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };


  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {/* <Note /> */}

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            Title={val.Title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  )
}

export default App;
