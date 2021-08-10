import request from '../../utils/axios';

export const getNewsList = (page,limit)=>{
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
export const searchtitle = (title)=>{
    return request.get("/news/more/" + title)
}
