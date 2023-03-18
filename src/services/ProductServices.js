import axios from "axios";

const PRODUCT_BASE_URL = "https://mysql-te.herokuapp.com/api/v1/product";

// http://localhost:8080/api/v1/user/state?state=Texas

class ProductService {


    fetchAllProducts(){
        return axios.get(PRODUCT_BASE_URL +"/");
    }

    fetchProductByLargerThanPrice(price){
        return axios.get(PRODUCT_BASE_URL + "/abovePrice?abovePrice="+price );
    }

    fetchProductById(productId){
        return axios.get(PRODUCT_BASE_URL +"/"+productId);
    }

    fetchProductByRatingAndPrice(price,rating){
        return axios.get(PRODUCT_BASE_URL + "/priceandrating?priceandrating="+price+","+rating)
    }

    fetchProductStat(){
        return axios.get(PRODUCT_BASE_URL + "/productStats");
    }

    fetchProductStatByYearlyTotalSales(yearlyTotalSale){
        return axios.get(PRODUCT_BASE_URL +
            "/productStats/yearsSalesTotal?yearsSalesTotal="
            + yearlyTotalSale);
    }

};


export default new ProductService();
