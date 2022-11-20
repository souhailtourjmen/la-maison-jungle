import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InpuGroup from './InputGroup';
export default function signupForm() {
    return (
        <section classNameName="Signup">
<div className="container" id="container">
	<Form>

      <InpuGroup 
		label="Email address"
		type="email"
		placeholder="Enter email"
		text="We'll never share your email with anyone else."
		Ctrlid="formBasicEmail"
	  />

<InpuGroup 
		label="Password"
		type="password"
		placeholder="Password"
		text=""
		Ctrlid="formBasicPassword"
	  />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div>

<footer>
	
</footer>

        </section>
    )
  }