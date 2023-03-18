import React ,{ useState } from 'react'
import UserServices from '../services/UserServices';
import { useNavigate } from 'react-router-dom';

const AddUsers = () => {
    const nagivate = useNavigate();
    const [user , setUser] = useState(
        {
            userName : "",
            email   : "",
            city    : "",
            state   : "",
            phoneNumber:""
        }

    )

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setUser({...user, [e.target.name] : inputValue});
    };


    const submitForm = (e) => {
        e.preventDefault();
        UserServices.addNewUser(user).then((response) => {
            // console.log(response);
            nagivate("/");

        }).catch((error) => {
            console.log(error);
        })
    };

    const resetForm = (e) => {
        e.preventDefault();
        setUser({
            userName : "",
            email   : "",
            city    : "",
            state   : "",
            phoneNumber:""
        });
    };

  return (
        <div className='flex max-w-3xl mx-auto shadow border-b bg-slate-200'>
                <div className='px-8 py-8 '>
                    <div className='font-sans text-3xl tracking-wider' >
                        <h1>
                            Add a new user
                        </h1>
                    </div>

                    <div className='items-center justify-center h-15 w-full my-4'>
                        <label className='block text-2xl text-gray-600 text-sm font-normal'>
                            User Name
                        </label>
                        <input
                            type = "text"
                            name = "userName"
                            className='h-10 w-96 birder mt-4 px-3 py-3'
                            value = {user.userName}
                            onChange = {(e) => handleChange(e)}
                        >
                        </input>
                    </div>

                    <div className='items-center justify-center h-15 w-full my-4'>
                        <label className='block text-2xl text-gray-600 text-sm font-normal'>
                            Email
                        </label>
                        <input
                            type = "text"
                            name = "email"
                            className='h-10 w-96 birder mt-3 px-3 py-3'
                            value = {user.email}
                            onChange = {(e) => handleChange(e)}
                        >
                        </input>
                    </div>

                    <div className='items-center justify-center h-15 w-full my-4'>
                        <label className='block text-2xl text-gray-600 text-sm font-normal'>
                            City
                        </label>
                        <input
                            type = "text"
                            name = "city"
                            className='h-10 w-96 birder mt-3 px-3 py-3'
                            value = { user.city }
                            onChange = {(e) => handleChange(e)}
                        >
                        </input>
                    </div>

                    <div className='items-center justify-center h-15 w-full my-4'>
                        <label className='block text-2xl text-gray-600 text-sm font-normal'>
                            State
                        </label>
                        <input
                            type = "text"
                            name = "state"
                            className='h-10 w-96 birder mt-3 px-3 py-3'
                            value = { user.state }
                            onChange = {(e) => handleChange(e)}
                        >
                        </input>
                    </div>

                    <div className='items-center justify-center h-15 w-full my-4'>
                        <label className='block text-2xl text-gray-600 text-sm font-normal'>
                            phoneNumber
                        </label>
                        <input
                            type = "text"
                            name = "phoneNumber"
                            className='h-10 w-96 birder mt-3 px-3 py-3'
                            value={ user.phoneNumber}
                            onChange = {(e) => handleChange(e)}
                        >
                        </input>
                    </div>
                    <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                 <button
                   className="rounded-full
                    text-white font-semibold
                     bg-green-600
                      hover:bg-green-700 py-2 px-6"
                        onClick={submitForm}
                       >
                   Save
                 </button>
                 <button
                    className="rounded-full text-white font-semibold
                    bg-red-600 hover:bg-red-700 py-2 px-6"
                    onClick = {resetForm}
                    >
                   Clear
                 </button>

                 <button
                    className="rounded-full text-white font-semibold
                    bg-red-600 hover:bg-red-700 py-2 px-6"
                    >
                        <a href = "/">GO BACK TO MAIN PAGE</a>

                 </button>
        </div>

                </div>


        </div>
  )
}

export default AddUsers
