import React, { useState } from 'react'
import UserServices from '../services/UserServices';

const UserQuery = () => {

  const [userQuery , setUserQuery] = useState(
    {
        condition: "",
        input: ""
    }
  );

  const [loading, setLoading] = useState(true);
  const [users , setUsers]    = useState(null);

 const handleChange = (e) => {
    const inputValue = e.target.value;
    setUserQuery({...userQuery , [e.target.name]: inputValue})
 }

 const submitForm = async (e) => {
    e.preventDefault();
    try {
        if(userQuery.condition === 'City'){
            const response = await UserServices.fetchUserByCity(userQuery.input);
            const{ data } = response;
            setUsers(data);
        }else if (userQuery.condition === 'State') {
            const response = await UserServices.fetchUserByState(userQuery.input);
            const{ data } = response;
            setUsers(data);
        } else if (userQuery.condition === 'userId') {
            const response = await UserServices.fetchUserById(userQuery.input);
            const{ data } = response;
            const arrResult = [];
            arrResult.push(data);
            setUsers(arrResult);
        }  else if (userQuery.condition === 'email') {
            const response = await UserServices.fetchUserByEmail(userQuery.input);
            const{ data } = response;
            const arrResult = [];
            arrResult.push(data);
            setUsers(arrResult);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
 };

 const resetForm = (e) => {
    e.preventDefault();
    setUserQuery({
        condition: "",
        input: ""
    });
};





  return (
    <div>
    <div className='flex max-w-3xl mx-auto shadow border-b bg-slate-200'>
    <div className='px-8 py-8 '>
        <div className='font-sans text-3xl tracking-wider' >
            <h1>
                Query the User by different conditions.
            </h1>
        </div>

        <div className="inline-block relative w-64">
        <label className='block text-3xl text-gray-600 text-sm font-normal'>
                Select the query conditionS
            </label>
           <select
            className="block appearance-none w-full border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            name = "condition"
            onChange = {(e) => handleChange(e)}
           >
            <option>default</option>
             <option>City</option>
             <option>State</option>
             <option>userId</option>
             <option>email</option>
           </select>
           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
             <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
           </div>
        </div>


        <div className='items-center justify-center h-15 w-full my-4'>
            <label className='block text-3xl text-gray-600 text-sm font-normal'>
                Input value
            </label>
            <input
                type = "text"
                name = "input"
                className='h-10 w-96 birder mt-4 px-3 py-3'
                value = {userQuery.inputValue}
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
        onClick={ submitForm}
           >
       Save
     </button>
     <button
        className="rounded-full text-white font-semibold
        bg-red-600 hover:bg-red-700 py-2 px-6"
        onClick={resetForm}
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

<div className='flex shadow border-b'>

<table className=" min-w-full overflow-x-scroll border-collapse border border-slate-500 ...">
 <thead className='bg-gray-50'>
   <tr>
     <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-6">User id</th>
     <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-6">User Name</th>
     <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-6">Email</th>
     <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-6">City</th>
     <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-6">State</th>
     <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-6">phone Number</th>

   </tr>
 </thead>
 {!loading && (
           <tbody className="bg-white">
             {users.map((user) => (
                   <tr key = {user.userId}>
                   <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.userId}</div>
                   </td>
                   <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.userName}</div>
                   </td>
                   <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.email}</div>
                   </td>
                   <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.city}</div>
                   </td>
                   <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.state}</div>
                   </td>
                   <td className="text-left px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.phoneNumber}</div>
                   </td>

               </tr>
             ))}

   </tbody>)}

</table>
</div>
</div>


  )
}

export default UserQuery
