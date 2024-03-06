// registrationFormSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationFormState {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  isLoggedIn: boolean;
  firstLetter: string;
  
}

const initialState: RegistrationFormState = {
  username: '',
  email: '',
  password: '',
  phoneNumber: '',
  isLoggedIn: false,
  firstLetter: '',
  
};

const registrationFormSlice = createSlice({
  name: 'registrationForm',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
      state.firstLetter = action.payload.charAt(0).toUpperCase();
      
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    login(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.email = action.payload;
 
      state.firstLetter = action.payload.charAt(0).toUpperCase();
    },
    logout(state) {
      state.isLoggedIn = false;
      state.firstLetter = '';
    },
    resetForm(state) {
      return initialState;
    },
    register(state) {
      // Add logic for registration here
    }
  }
});

export const {
  setUsername,
  setEmail,
  setPassword,
  setPhoneNumber,
  login,
  logout,
  resetForm,
  register,

   // Export register action
} = registrationFormSlice.actions;

export default registrationFormSlice.reducer;






















// registrationFormSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// // import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface RegistrationFormState {
//   username: string;
//   email: string;
//   password: string;
//   phoneNumber: string;
//   isLoggedIn: boolean;
//   firstLetter: string;
// }

// const initialState: RegistrationFormState = {
//   username: '',
//   email: '',
//   password: '',
//   phoneNumber: '',
//   isLoggedIn: false,
//   firstLetter: ''
// };

// const registrationFormSlice = createSlice({
//   name: 'registrationForm',
//   initialState,
//   reducers: {
//     setUsername(state, action: PayloadAction<string>) {
    
//       state.username = action.payload;
//       console.log(action.payload);
//       state.firstLetter = action.payload.charAt(0).toUpperCase();
//     },
//     setEmail(state, action: PayloadAction<string>) {
//       state.email = action.payload;
//     },
//     setPassword(state, action: PayloadAction<string>) {
//       state.password = action.payload;
//     },
//     setPhoneNumber(state, action: PayloadAction<string>) {
//       state.phoneNumber = action.payload;
//     },
//     login(state, action: PayloadAction<string>) { // Modify login action to accept email
//       state.isLoggedIn = true;
//       state.email = action.payload; 
//       // state.username = action.payload;
//       state.firstLetter = action.payload.charAt(0).toUpperCase(); // Update firstLetter
//     },
//     logout(state) {
//       state.isLoggedIn = false;
//       state.firstLetter = '';
//     },
//     resetForm(state) {
//       return initialState;
//     }
//   }
// });

// // Export actions and reducer


// export const {
//   setUsername,
//   setEmail,
//   setPassword,
//   setPhoneNumber,
//   login,
//   logout,
//   resetForm
// } = registrationFormSlice.actions;


// export default registrationFormSlice.reducer;
