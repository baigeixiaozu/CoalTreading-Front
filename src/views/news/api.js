import request from '../../utils/axios';

export const getNewsList = ()=>{
    return request.get("/news/show")
}