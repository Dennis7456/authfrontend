import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Login(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");

    const handleSubmit = (e) =>{
        //prevent from from refreshing the whole page
        e.preventDefault();

        const configuration = {
            method:'post',
            url:'https://nodejs-mongodb-auth-backen-app.herokuapp.com/login',
            data: {
                email,
                password,
            }
        };
        //make api call
        axios(configuration)
        .then((result) => {
            cookies.set('TOKEN', result.data.token, {
                path:'/',
            });
            window.location.href = '/protected';
            setLogin(true);})
        .catch((error) => {error = new Error()});
    }

    return(
        <>
        <h2>Login</h2>
        {/* display success message */}
        { login ? (<p className="text-success">You are logged in successfully</p>
        ):(
            <p className="text-danger">You are not logged in</p>
        )}
        <Form onSubmit={(e) => handleSubmit(e)}>
            {/* email */}
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            </Form.Group>
            {/* password */}
            <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            </Form.Group>

            {/* submit button */}
            <Button onSubmit={(e) => handleSubmit(e)} variant='primary' type='submit'>
                Login
            </Button>
        </Form>
        </>
    )
}