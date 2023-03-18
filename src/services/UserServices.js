import axios from "axios";

const USER_BASE_URL = "https://mysql-te.herokuapp.com/api/v1/user";

// http://localhost:8080/api/v1/user/state?state=Texas

class UserService {
    addNewUser(user){
        return axios.post(USER_BASE_URL , user)
    }

    fetchAllUsers(){
        return axios.get(USER_BASE_URL +"/");
    }

    deleteUserById(userId){
        return axios.delete(USER_BASE_URL + "/userid?userid="+userId);
    }

    fetchUserByState(state){
        return axios.get(USER_BASE_URL + "/state?state="+state);
    }

    fetchUserByEmail(email){
        return axios.get(USER_BASE_URL + "/email?email=" + email);

    }

    fetchUserById(userId){
        return axios.get(USER_BASE_URL + "/"+userId);
    }

    fetchUserByCity(city){
        return axios.get(USER_BASE_URL + "/city?city="+city);
    }



};


export default new UserService();
