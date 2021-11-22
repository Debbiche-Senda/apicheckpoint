
import './App.css';
import UserList from "./components/UserList";
import axios from 'axios';
import {useState, useEffect} from 'react';
import Details from './components/Details';

function App() {
  const [users,setUsers]=useState([])
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div className="App">
      <UserList users={users}/>
     {(props)=> <Details {...props}/>}
    </div>
  );
}

export default App;
