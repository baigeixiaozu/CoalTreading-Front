import request from '../../utils/axios';

export const getNewsList = (page = 1, limit = 20)=>{
    console.log(page, limit);
    return request.get("/news/show", {
        params:{
            current: page,
            size: limit
        }
    })
}

export const loadNewsDetail = (id)=>{
    return request.get("/news/detail/" + id)
}