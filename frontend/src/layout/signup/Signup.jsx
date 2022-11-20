import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style/App.css';
import axios from 'axios';
import React ,{ useEffect} from 'react';
import Form from '../../components/Signup/Form';

function Signup () {
    useEffect(()=> {
        async function getUsers() {
        await axios.get('/inscrit')
        .then(res =>{
            console.log(res);
        })
        };
        getUsers();
        },[])
    return (
        <>
        <section className="main">
            <Form/>
        </section>

        </>
      
    );
   
      
}

export default Signup;