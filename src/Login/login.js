import axios from "axios";
import { useEffect, useState } from "react";
import { Table,FormGroup,FormControl, FormProps, FormLabel, FormControl } from "react-bootstrap";
const login = () =>{
    const [account, setAccount]= useState();

    const handleChange = (e)=>{
        setAccount(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return(
        <>
            <From className="col-md-3">
                <FormGroup className="md-3">
                    <FormLabel>UserName:</FormLabel>
                    <FormControl type="text" name="username" ></FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel className="md-3">Password:</FormLabel>
                    <FormControl type="text" name=""></FormControl>
                </FormGroup>
            </From>
        </>
    )
}