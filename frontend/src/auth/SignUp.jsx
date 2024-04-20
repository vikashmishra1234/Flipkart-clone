import React, { useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate ,Link} from 'react-router-dom';

const SignupPage = () => {
  // State variables to store form data
  const [dp,setDp]=useState(null);
  const Navigate=useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    profile:''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 
  const handleSubmit = async(e) => {
    e.preventDefault();
  
    
    if(dp){
        const data= new FormData();
        data.append("file",dp);
        data.append("upload_preset","vikashmishra")
        // data.append("cloud_name",'dwjh8zji6');
        
    await axios.post('https://api.cloudinary.com/v1_1/dwjh8zji6/image/upload',data).then((resp)=>{
      formData.profile=resp.data.url;
    }).catch((err)=>console.log(err))
      
    }
   if(true){
    try {

      let res=await axios.post("http://localhost:5000/api/signup",formData);
    
      if(res.data.success){
        localStorage.setItem("jwt",res.data.token) 
         Navigate('/')
          Swal.fire({
              icon:'success',
              text:`${res.data.message}`
          })
          
      }
      else{
        console.log(res.data.error)
          Swal.fire({
              icon:'error',
              text:`${res.data.error}`
          })
      }
    
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        password: '',
        profile:''
      });
      
    } catch (error) {
      console.log(error.message)
      Swal.fire({
        icon:'error',
        text:`${error.message}`
      })
    }
    

   }

  };
const handleChange = async(e)=>{
  
  setDp(e.target.files[0])
 

}
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Signup</h2>
      <form  onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <input type="phone" className="form-control" placeholder="Phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <input  type="file" onChange={(e)=>{handleChange(e)}} className="form-control" placeholder="profile" name="profile"/>
        </div>
        <button type="submit" className="btn w-100 btn-primary">Sign Up</button>
      </form>
      <div>
       <Link to='/login'>already have an account?login</Link> 
      </div>
    </div>
  );
};

export default SignupPage;
