import { useState } from "react";
import { signin } from "../auth/helper";

const SignIn= () => {

    
    const [values,setValues]=useState({
        email:"",
        password:"",
       
    })

    const {email,password}=values;

    const handleChange = name=>event=>{
        setValues({...values, [name]:event.target.value})
    }

    const onSubmit= event=>{
        event.preventDefault()
        setValues({...values})
        signin({email,password})
        .then(data=>{
            //console.log(data.err);
            //if(data.err){
                //setValues({...values})
            //}
           // else{
                setValues({
                    ...values,
                    
                    email:"",
                    password:"",
                   
                })
         

            //}
        })
        .catch(err=>(console.log(err)))
    }

    return (
<div class="min-h-screen flex items-center justify-center border-white">
 <div class="bg-black-600 bg-opacity-25 justify-center px-20 rounded shadow-2xl py-12">
     <h2 class="text-white text-3xl  mb-8">SignIn To Your Account</h2>
     <form class="space-y-6">
         <div>
             <label class="block text-white mb-2">E-mail</label>
             <input type="text" onChange={handleChange("email")} class="w-full border-black-400 p-1"/>
         </div>
         <div>
             <label class="block text-white mb-2">Password</label>
             <input type="text" onChange={handleChange("password")} class="w-full border-black-400 p-1"/>
         </div>

         <button onClick={onSubmit} class="block bg-transparent hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
             Sign-In
           </button>
    
           <div>{JSON.stringify(values)}</div>
     </form>
 </div>
</div> );
}
export default SignIn;

