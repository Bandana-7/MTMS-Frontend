import { useState } from "react";
import { signup } from "../auth/helper";

const SignUp = () => {


    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
    })


    const { fullname, email, password } = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault()
        setValues({ ...values })
        signup({ fullname, email, password })
            .then(data => {
                //     console.log(data.err);
                //     if(data.err){
                //         setValues({...values})
                //     }
                //    else{
                setValues({
                    ...values,
                    fullname: "",
                    email: "",
                    password: "",

                })


                // }
            })
            .catch(err => (console.log(err)))
    }


    return (
        <div className="min-h-screen flex items-center justify-center border-white">
            <div className="bg-black-600 bg-opacity-25 justify-center px-20 rounded shadow-2xl py-12">
                <h2 className="text-white text-3xl  mb-8">Create Your Account</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-white mb-2">Full Name</label>
                        <input type="text" onChange={handleChange("fullname")} className="w-full border-black-400 p-1" />
                    </div>
                    <div>
                        <label className="block text-white mb-2">E-mail</label>
                        <input type="text" onChange={handleChange("email")} className="w-full border-black-400 p-1" />
                    </div>
                    <div>
                        <label className="block text-white mb-2">Password</label>
                        <input type="text" onChange={handleChange("password")} className="w-full border-black-400 p-1" />
                    </div>

                    <button onClick={onSubmit} className="block bg-transparent hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                        Sign-Up
                    </button>

                    <div>{JSON.stringify(values)}</div>
                </form>
            </div>
        </div>
    );
}
export default SignUp;
