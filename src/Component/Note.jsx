import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';

const Note = (props) => {

  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className='note'>
        <h1>{props.Title}</h1>
        <br />
        <p>{props.content}</p>
        <Button className='btn' onClick={deleteNote}>
          <DeleteOutlineIcon className='deleteIcon' />
        </Button>
      </div>
    </>
  )
}

export default Note