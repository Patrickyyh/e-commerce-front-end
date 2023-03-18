import React ,{useState, useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import OrderServices from '../services/OrderServices';
import  lodash from "lodash";

const RankOrderByUsers = () => {
  const [loading, setLoading] = useState(true);
  const [orders , setOrders]    = useState(null);
  const navigate = useNavigate();
  let response = null;


useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {

      const response = await OrderServices.fetchOrderByQuantityByUsers();
      const{ data } = response;
      // make use of the lodash to sort the data.
      const sortedData  = lodash.sortBy(data , ["quantity_of_order"] , ['desc']).reverse();
      setOrders(sortedData);

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
        onClick={() => navigate('/rankOrdersByUser')}
        className='rounded-full bg-slate-700 text-yellow-50 px-6 py-4'>
              Rank the quantity of order placed by each User From most to least
        </button>
        <button
         className="rounded-full text-white font-semibold
        bg-red-600 hover:bg-red-700 py-4 px-6"
         onClick={ () => navigate("/")}
        >
            Back to the Main Page
       </button>
    </div>

<div>
<div className='flex shadow border-b'>

<table className=" min-w-full overflow-x-scroll border-collapse border border-slate-500 ...">
<thead className='bg-gray-50'>
  <tr>
    <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">user id</th>
    <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">username</th>
    <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">quantity of order</th>
  </tr>
</thead>
{!loading && (
          <tbody className="bg-white">
            {orders.map((order) => (
                  <tr key = {order.orderId}>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                       <div className="text-sm text-gray-500">{order.userId}</div>
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                       <div className="text-sm text-gray-500">{order.userName}</div>
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                       <div className="text-sm text-gray-500">{ order.quantity_of_order}</div>
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

export default RankOrderByUsers
