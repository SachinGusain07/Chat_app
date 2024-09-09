import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import {Link} from 'react-router-dom';
import {useState} from "react";
import useSignup from '../../../hooks/useSignup';

const SignUp = () => {
  const [inputs , setInputs]= useState({
    fullName :"",
    username :"",
    password:'',
    gender: '',
    confirmPassword:""
  });
  const {loading , signup} =useSignup();

  const handleCheckboxChange=(gender)=>{
    setInputs({...inputs , gender})
  }

 const handleSubmit= async (e)=>{
  e.preventDefault();
    await signup(inputs);

 }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

      <div className ='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

      <h1 className='text-3x1 font-semibold text-center text-gray-300'>LOGIN
      <span className ='text-blue-500'> ChatApp</span></h1>


        <form onSubmit ={handleSubmit}>
          <div>
            <label id ="name" className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type ='text'placeholder ='enter full Name' className ='w-full input input-bordered h-10' id = "name" value = {inputs.fullName} 
            onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
            />
          </div>

          
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type ='text'placeholder ='enter username' className ='w-full input input-bordered h-10'
            
            value = {inputs.username} 
            onChange={(e)=>setInputs({...inputs,username: e.target.value})}
            />
          </div>

          <div>
          <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type ='password'placeholder ='enter password' className ='w-full input input-bordered h-10'
            value = {inputs.password} 
            onChange={(e)=>setInputs({...inputs,password:e.target.value})}
            />



          </div>
            <div>
          <label className='label p-2'>
              <span className='text-base label-text'>confirm password</span>
            </label>
            <input type ='password' placeholder ='Confirm password' className ='w-full input input-bordered h-10'
            value = {inputs.confirmPassword} 
            onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
            />

          </div>
          <GenderCheckbox onCheckboxChange={handleCheckboxChange}  selectedGender={inputs.gender}/>
          <Link to ="/Login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</Link>
          <div>
            <button type ="submit" className='btn btn-block btn-sm mt-2'
            disabled ={loading}
            
            >{loading ? <span className='loading loading-spinner '></span> : "SignUp"}
            </button></div>



       
          </form>
      </div>
      
    </div>
  )
}

export default SignUp












// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

//       <div className ='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

//       <h1 className='text-3x1 font-semibold text-center text-gray-300'>LOGIN
//       <span className ='text-blue-500'> ChatApp</span></h1>


//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input type ='text'placeholder ='enter full Name' className ='w-full input input-bordered h-10'/>
//           </div>

          
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input type ='text'placeholder ='enter username' className ='w-full input input-bordered h-10'/>
//           </div>

//           <div>
//           <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type ='password'placeholder ='enter password' className ='w-full input input-bordered h-10'/>

//           </div>
//             <div>
//           <label className='label p-2'>
//               <span className='text-base label-text'>confirm password</span>
//             </label>
//             <input type ='text'placeholder ='Confirm password' className ='w-full input input-bordered h-10'/>

//           </div>
//           <GenderCheckbox/>
//           <a href ="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</a>
//           <div>
//             <button className='btn btn-block btn-sm mt-2'>SignUp</button></div>



       
//           </form>
//       </div>
      
//     </div>
//   )
// }

// export default SignUp