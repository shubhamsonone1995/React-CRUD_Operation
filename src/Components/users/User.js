import React from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'
import { useState ,useEffect} from 'react'

const User=()=>{
   
    const[user,setUser]=useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    useEffect(()=>{
        loadUser()
    },[]);

    const {id} =useParams()

    const loadUser= async ()=> { 
        const res= await axios.get(`http://localhost:3002/users/${id}`);
        // console.log(res)
        setUser(res.data)
    }
    return(
    <div className="container border shadow my-5 rounded-3" >
      
        <h1 className='display-3'>User Id :{id}</h1>
    <ul className="list-group w-50 list-group-flush">
      <li className="list-group-item">Name : {user.name}</li>
      <li className="list-group-item">User Name : {user.username}</li>
      <li className="list-group-item">Email : {user.email}</li>
      <li className="list-group-item">Phone : {user.phone}</li>
      <li className="list-group-item">Website : {user.website}</li>
     
    </ul>
    <div className='text-end'>
    <Link className='btn btn-primary my-2' to="/">Back To Home</Link>
    </div>
  </div>
    )
   
       
}
export default User