import React, { useEffect, useState } from 'react'

const use_State_Effect = () => {
    const [data, setData] = useState({
        name:'',
        email: ''
    })

    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value});
    };
     const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(data);
     }



  return (
    <>
    <form >   
        <div>
        <label>Name : </label>
        <input type="text"  placeholder='Enter your Name' value={data.name} onChange={handleChange} name='name' />
        </div>
        <div>
        <label>Email : </label>
        <input type="email" placeholder='Enter your Email' value={data.email} onChange={handleChange} name='email' />
        </div>
        <button onClick={handleSubmit}>submit</button>
    </form>
      
    </>
  )
}

export default use_State_Effect
