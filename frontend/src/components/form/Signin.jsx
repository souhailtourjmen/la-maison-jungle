import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "./InputGroup";
import axios from 'axios';
import React ,{ useState,useEffect} from 'react';

export default function signinForm() {
 
  // state pour remplir form
  const [form , setForm] =useState({});
  const [message , setMsg]=useState("");
  const [token , setToken] =useState("");



  // function for remplir form

  const onChangeHandler =(e)=>{
      setForm({
        ...form, // pour  n'est pas craser le 1er case de form pour
        [e.target.name]: e.target.value // chaque changement il intial value dans name exemple email =value  
      })
      
  };


// post login account user
  
 const onSubmitHandler =(e)=>{
  console.log(form);
      e.preventDefault();
      axios({
        method:'post',
        header:{"Access-Control-Allow-Origin": "*"},
        url: '/auth/signin',
        data:form
      })
      .then((res)=>{
        setMsg(res.data.message);
        setToken(res.data.token)
        console.log(res.data.message ,token);
      })
      
 }

// form  login user
  return ( 
    <section className="loginform">

      <div className="container" id="container">
        <Form onSubmit={onSubmitHandler}>
          <InputGroup
            label="Email address"
            type="email"
            name="email"
            placeholder="Enter email"
            text="We'll never share your email with anyone else."
            Ctrlid="formBasicEmail"
            onChangeHandler={onChangeHandler}
          />
          <InputGroup
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            text=""
            Ctrlid="formBasicPassword"
            onChangeHandler={onChangeHandler}
          />
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>

      <footer></footer>
    </section>
  );
}
