import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';


const CreateNote = (props) => {

  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    Title: '',
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((preveData) => {
      return {
        ...preveData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      Title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  }

  const btoNormal = () => {
    setExpand(false);
  }
  return (

    <>
      <div className='main-note' onDoubleClick={btoNormal}>
        <form>
          {expand ? (
            <input type='text '
              name="Title"
              value={note.Title}
              onChange={InputEvent}
              placeholder='Title'
              autoCapitalize='off' />
          ) : null}

          <br />
          <br />

          <textarea
            rows=""
            column=""
            name='content'
            value={note.content}
            onChange={InputEvent}
            onClick={expandIt}
            placeholder='Write a note' />
          <br />

          {expand ? (
            <Button onClick={addEvent}>
              <AddBoxIcon className='plus_sign' />
            </Button>) : null}
        </form>
      </div>
    </>
  )
}

export default CreateNote;