
import { input } from '@material-tailwind/react';
import React,{useState,useEffect} from 'react'
import ProductServices from '../services/ProductServices'


const ProductQuery = () => {
const [productQuery , setProductQuery] = useState(
        {
            condition: "",
            input: ""
        }
      );
 const [loading, setLoading] = useState(true);
 const [products , setProducts]    = useState(null);


const submitForm = async (e) => {
    e.preventDefault();
    try {
        if(productQuery.condition === "price"){

            const response = await ProductServices.fetchProductByLargerThanPrice(productQuery.input);
            const { data } = response;
            setProducts(data);

        }else if (productQuery.condition === "Product Id"){

            const response = await ProductServices.fetchProductById(productQuery.input);
            const { data } = response;
            const arrResult = [];
            arrResult.push(data);
            setProducts(arrResult);

        }else if (productQuery.condition === "price and rating"){

            const inputArray = productQuery.input.split(",");
            const price = inputArray[0];
            const rating = inputArray[1];
            console.log(price);
            console.log(rating);
            const response = await ProductServices.fetchProductByRatingAndPrice(price, rating);
            const { data } = response;
            setProducts(data);

        }
    } catch (error) {
        console.log(error);
    }
    setLoading(false);

}



 const resetForm = (e) => {
    e.preventDefault();
    setProductQuery({
        condition: "",
        input: ""
    });
    console.log(productQuery);
};


 const handleChange = (e) => {
    const inputValue = e.target.value;
    setProductQuery({...productQuery ,[e.target.name]: inputValue});
    console.log(productQuery);
 }
  return(
    <div>
    <div className='flex max-w-3xl mx-auto shadow border-b bg-slate-200'>
    <div className='px-8 py-8 '>
        <div className='font-sans text-3xl tracking-wider' >
            <h1>
                Query the Products by different conditions.
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
            <option>price</option>
            <option>price and rating</option>
            <option>Product Id</option>
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
                value = {productQuery.inputValue}
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
      <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">Product id</th>
      <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">Product Name</th>
      <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">price</th>
      <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">description</th>
      <th className="border border-slate-600 text-gray-500 uppercase tracking-wider py-3 px-4">rating</th>
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
                         <div className="text-sm text-gray-500">{product.name}</div>
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap">
                         <div className="text-sm text-gray-500">{ `$${product.price}` }</div>
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap">
                         <div className="text-sm text-gray-500">{product.description}</div>
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap">
                         <div className="text-sm text-gray-500">{`${product.rating}`}</div>
                    </td>
                </tr>
              ))}

    </tbody>)}

</table>
</div>
</div>


  )
}

export default ProductQuery
