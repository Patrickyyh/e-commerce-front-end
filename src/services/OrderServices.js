import axios from "axios";

const ORDER_BASE_URL = "https://mysql-te.herokuapp.com/api/v1/order";


class OrderServices {
    fetchAllOrders(){
        return axios.get(ORDER_BASE_URL +"/");
    }

    fetchOrderByQuantityByUsers(){
        return axios.get(ORDER_BASE_URL+"/quantity");
    }


};


export default new OrderServices();
