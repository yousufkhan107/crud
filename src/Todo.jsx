import react from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InpComp from "./Components/Inputcmp";
import Outlined from "./Components/cardcmp";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchApi } from "./Components/store/loremSlice";







const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Todo() {
  // const [todo, setTodos] = useState([]);
  const [text, settext] = useState("");

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchApi())


  }, [])
  
    const data = useSelector((state) => state.lorem)
    let todos = data.data
    
    console.log(todos)




  











  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleData = () => {
    axios.post("http://localhost:5000/api/userinfo",{todo:text})
    .then(res => {
      console.log(res)
      settext("")
    
    })
    .catch((err)=>console.log(err))
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>wanna add todo ?</Button>
      {todos?.map((value,id)=>{
        return <div key={id}>
          <Outlined desc={value.todo} id={value._id}/>
        </div>

      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InpComp label='Enter New Todo...' value={text} onChange={(e) => settext(e.target.value)} />
          <Button onClick={handleData} variant="outlined" sx={{ margin: "12px" }} >ADD</Button>
        </Box>

      </Modal>
    </div>


  );
}
export default Todo;
