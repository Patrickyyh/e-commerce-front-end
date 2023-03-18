
import React, { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserServices from '../services/UserServices';
// import UserDisplays from './UserDisplays';
import axios from 'axios';

const UserList = () => {
    const [loading, setLoading] = useState(true);
    const [users , setUsers]    = useState(null);
    const navigate = useNavigate();
    let response = null;


  const deleteUsers = async (e , userId)=>{
    e.preventDefault();
    await UserServices.deleteUserById(userId);
    if(users){
      setUsers((deleteElement) => {
        return deleteElement.filter((user)=>user.userId !== userId)
      });
  }

  }


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await UserServices.fetchAllUsers();
        const{ data } = response;
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();

  }, []);

  return (
    <div className='container mx-auto my-10'>
      <div className='h-13'>
          <button
          onClick={() => navigate('/addUsers')}
          className='rounded-full bg-slate-700 text-yellow-50 px-6 py-4'>
                Add users
          </button>
      </div>

  <div>
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
      <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
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

                    <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                         <a
                            onClick={(e, userId) => deleteUsers(e, user.userId)}
                            className='hover:text-indigo-500 hover:cursor-pointer'
                         >
                            Delete
                         </a>
                    </td>
                </tr>
              ))}

    </tbody>)}

</table>
</div>

           </div>
    </div>
  )
}

export default UserList

