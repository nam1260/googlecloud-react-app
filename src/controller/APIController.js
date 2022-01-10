
import axios from "axios"

const SERVER_URL  =  "https://8wuahwyzk9.execute-api.ap-northeast-2.amazonaws.com/test";
const GET_STAR_LIST = "/star/get-star-list";


const API_KEYS = 'HjkKpsNqsI4iqOdZcFJck16xFuMUfCGa7LaYy9Ra'
const headers = {
    'x-api-key' : API_KEYS,
}


const APIController = (function(){


    const getUrl = (url) => {
        return SERVER_URL + url;
    };

    const requestPost = (url, params) => {
        return axios.post(url, params, {headers});
    };


    const getStarList = async (params) => {
        console.log("getStarList = " +JSON.stringify(params));
        return await requestPost(getUrl(GET_STAR_LIST), params);
    };


    return {
        getStarList
    }

}());
export default APIController;