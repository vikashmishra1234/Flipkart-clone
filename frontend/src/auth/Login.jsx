import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { loginUser } from '../Api/Services';
import Swal from 'sweetalert2';
function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
const Navigate = useNavigate()
  const handleLogin = async(e) => {
    e.preventDefault();
    const data = {phone,password}
   
    const res = await loginUser(data);
    if(res.success){
        localStorage.setItem('jwt',res.jwt);
        Swal.fire({
            icon:'success',
            title:'Login successfull'

        })
        Navigate('/');
    }
    else{
        Swal.fire({
            icon:'error',
            title:`${res.error}`

        })
    }
    setPhone('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
       <Link to='/signup'>do not have an account?signup</Link> 
      </div>
    </div>
  );
}

export default Login;
