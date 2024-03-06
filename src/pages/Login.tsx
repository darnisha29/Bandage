import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { login } from '../filters/filtred-product/registrationFormSlice'; 

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(formData.email));  
    toast.success('Login successful!');
    navigate('/');
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      <h2>Welcome Back!</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <div className='register-user'>
          <Link to='register' className='register'>new user</Link>
        </div>
      </form>
      {/* Toast container for displaying notifications */}
      <ToastContainer />
    </div>
  );
};

export default Login;















// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { useDispatch } from 'react-redux';
// import './Login.css'; 
// import { Link, useNavigate } from 'react-router-dom'; 
// import { toast, ToastContainer } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css'; 
// import { login } from '../filters/filtred-product/registrationFormSlice'; 

// interface FormData {
//   email: string;
//   password: string;
 
// }

// const Login: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     email: '',
//     password: '',
    
//   });
//   const dispatch = useDispatch(); 
//   const navigate = useNavigate(); 

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     dispatch(login(formData.email));  
//     toast.success('Login successful!');
//     navigate('/');
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="login-container">
//       <h2>Welcome Back!</h2>
//       <form onSubmit={handleSubmit} className="login-form">
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
//         </div>
//         <button type="submit" className="login-btn">Login</button>
//         <div className='register-user'>
//           <Link to='register' className='register'>new user</Link>
//         </div>
//       </form>
//       {/* Toast container for displaying notifications */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;
