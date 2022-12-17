import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios  from 'axios';
import BasicModal from './Modalcmp';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Outlined({desc,id}){
  function deleteTodo (){
    axios.delete("http://localhost:5000/api/delete",{data: {id: id}})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)});
    console.log("Delete")  
  }
  function UpdateTodo (){
    var get = prompt("get")
    axios.put("http://localhost:5000/api/update" , {id: id,todo:get})
  }

  return (
<>

    <Card sx={{ minWidth: 275 , mt:5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       <b>"may you live all the days of your life"</b>
        </Typography>
        <Typography variant="h5" component="div">
         
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
        </Typography>
        <Typography variant="body2">
          {desc}
          <br />
      
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deleteTodo}>delete</Button>
        <Button size="small" onClick={UpdateTodo}>Update</Button>
      </CardActions>
    </Card>
    </>
  );
}