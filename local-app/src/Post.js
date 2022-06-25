import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Post = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [dates, setDates] = useState("");
    const [contact, setContact] = useState("");
    const [rate, setRate] = useState("");
    const submitHandler = (e) =>{
        e.preventDefault();
        
        const config = {
            headers: {
                "Content-Type": "application/json" 
            }
        }

        axios.post('/api/post', {title, body, dates, rate, contact}, config).then(
            res => {
                alert(`${res.data.message}`);
            }
        ).catch(
            err => {
                alert(err.message);
            }
        )
    }

    const titleHandler = (e)=>{
        setTitle(e.target.value)
    }

    const bodyHandler = (e)=>{
        setBody(e.target.value)
    }

    const datesHandler = (e)=>{
        setDates(e.target.value)
    }

    const rateHandler = (e)=>{
        setRate(e.target.value)
    }

    const contactHandler = (e)=>{
        setContact(e.target.value)
    }
    
    
    return (       
        <div>
            <div>
            <a href="/">Home</a>
                <Link to = "/">Problem Bank</Link>
            </div>
            <h2>Enter the details of the gear</h2>
            <form>
                <input onChange = {titleHandler} type= "text" placeholder='Enter the title'/> <br />
                <textarea onChange = {bodyHandler} type= "text" placeholder='Enter the gear description'/> <br />
                <input onChange = {datesHandler} type= "text" placeholder='Enter the available dates'/> <br />
                <input onChange = {rateHandler} type= "text" placeholder='Enter your rates'/> <br />
                <input onChange = {contactHandler} type= "text" placeholder='Enter your preferred contact'/> <br />
                <button onClick={submitHandler}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Post;