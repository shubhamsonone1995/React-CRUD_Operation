import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
   
   const navigate=useNavigate()
   const[ user, setUser ]= useState ({
    name:'',
    username:'',
    email:'',
    phone:'',
    website:''
    })
const {name,username,email,phone,website}=user
const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})

}
const onSubmit= async e=>{
e.preventDefault();
await axios.post("http://localhost:3002/users",user);
navigate('/');
}

    return (
        <div className="container border shadow py-5 mt-5 rounded-3 text-center  ">
            <h3 className="mb-3 ">Add A User</h3>
             <div className="w-75 mx-auto ">
            
            <form onSubmit={e=>onSubmit(e)}>
               
                <div className="mb-3 form-group">
                <input type="text" 
                className="form-control form-control-lg" 
                placeholder="Enter Your Name" 
                name="name" 
                value={name} 
                onChange={e=>onInputChange(e)}></input>
                </div>

                <div className="mb-3 form-group">
                <input type="text" 
                className="form-control form-control-lg" 
                placeholder="Enter Your UserName"
                name="username" 
                value={username}
                onChange={e=>onInputChange(e)}
                ></input>
                </div>
                <div className="mb-3 form-group">
                <input type="email" 
                className="form-control form-control-lg" 
                placeholder="Enter Your Email Address" 
                name="email" 
                value={email}
                onChange={e=> onInputChange(e)}></input>
                </div>
                <div className="mb-3 form-group">
                <input type="text" 
                className="form-control form-control-lg" 
                placeholder="Enter Your Phone Number" 
                name="phone" 
                value={phone}
                onChange={e=> onInputChange(e)}></input>
                </div>

                <div className="mb-3 form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Website Name" name="website" value={website}
                    onChange={e=>onInputChange(e)}></input>
                </div>

                <button type="submit" className="btn btn-primary btn-block px-5">Submit</button>
            </form>
            </div>
        </div>

    )
}
export default AddUser