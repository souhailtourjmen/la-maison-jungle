import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style/App.css';
import Form from '../../components/form/Signin';
import {useSelector} from 'react-redux';
function Signup () {
     const state = useSelector((state)=>state.token.value)
    return (
        <>
        <section className="main">
            <Form/>
            <div>
                <p>userId:{state.userId}</p>
                <p>token :{state.token}</p>
            </div>
        </section>
        </>
      
    );
   
      
}

export default Signup;