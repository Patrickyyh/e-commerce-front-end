import React , { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductServices from '../services/ProductServices';


const ProductStatList = () => {
    const [loading, setLoading] = useState(true);
    const [products , setProducts]    = useState(null);
    const navigate = useNavigate();
    let response = null;


  const deleteUsers = async (e , userId)=>{
    e.preventDefault();
//     await UserServices.deleteUserById(userId);
//     if(users){
//       setUsers((deleteElement) => {
//         return deleteElement.filter((user)=>user.userId !== userId)
//       });
//   }

  }


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductServices.fetchProductStat();
        const{ data } = response;
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();

  }, []);

  return (
    <div className='container mx-auto my-10'>


  <div>
  <div className='flex shadow border-b'>

 <table className=" min-w-full overflow-x-scroll border-collapse border border-slate-500 ...">
  <thead className='bg-gray-50'>
    <tr>
      <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">Product id</th>
      <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">Product stat id</th>
      <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">name</th>
      <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">yearly Total Sold Units</th>
      <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">years Sales Total</th>
    </tr>
  </thead>
  {!loading && (
            <tbody className="bg-white">
              {products.map((product) => (
                    <tr key = {product.productId}>
                    <td className="text-center px-6 py-4 whitespace-nowrap">
                         <div className="text-sm text-gray-500">{product.productId}</div>
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap">
                         <div className="text-sm text-gray-500">{product.productStatId}</div>
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap">
                         <div className="text-sm text-gray-500">{ `${product.name}` }</div>
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap">
                         <div className="text-sm text-gray-500">{product.yearlyTotalSoldUnits}</div>
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap">
                         <div className="text-sm text-gray-500">{`${product.yearsSalesTotal}`}</div>
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

export default ProductStatList
