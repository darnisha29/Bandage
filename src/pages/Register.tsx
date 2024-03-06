import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../filters/store';
import { Link } from 'react-router-dom';
import {
  setUsername,
  setEmail,
  setPassword,
  setPhoneNumber,
  resetForm,
  register // Import register action
} from '../filters/filtred-product/registrationFormSlice'; // Correct import path

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const { username, email, password, phoneNumber } = useSelector(
    (state: RootState) => state.registrationForm
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        dispatch(setUsername(value));
        break;
      case 'email':
        dispatch(setEmail(value));
        break;
      case 'password':
        dispatch(setPassword(value));
        break;
      case 'phoneNumber':
        dispatch(setPhoneNumber(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register()); // Dispatch register action
    dispatch(resetForm()); // Reset form after submission
  };

  return (
    <div className='Register'>
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
          <Link to='/login' className='register'>Already have an account? Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
















// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../filters/store';
// import { Link } from 'react-router-dom';
// import {
//   setUsername,
//   setEmail,
//   setPassword,
//   setPhoneNumber,
//   resetForm
// } from '../filters/filtred-product/registrationFormSlice';
// import './Register.css';

// const Register: React.FC = () => {
//   const dispatch = useDispatch();
//   const { username, email, password, phoneNumber } = useSelector(
//     (state: RootState) => state.registrationForm
//   );

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'username':
//         dispatch(setUsername(value));
//         break;
//       case 'email':
//         dispatch(setEmail(value));
//         break;
//       case 'password':
//         dispatch(setPassword(value));
//         break;
//       case 'phoneNumber':
//         dispatch(setPhoneNumber(value));
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Here you can perform your form submission logic
//     console.log({ username, email, password, phoneNumber });
//     // Reset form after submission
//     dispatch(resetForm());
//   };

//   return (
//     <div className='Register'>
//       <div className="form-container">
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={username}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={phoneNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit">Register</button>
//           </div>
//           <Link to='/login' className='register'>new user</Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
