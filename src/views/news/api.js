import request from '../../utils/axios';

export const getNewsList = ()=>{
    return request.get("/news/show")
}

export const loadNewsDetail = (id)=>{
    return request.get("/news/detail/" + id)
}