import axios from "axios";

export default class ArticleService{
    getArticles(){
        return axios.get("http://localhost:8080/api/articles/getall")
    }

}