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
export const submit = (article,way)=>{
    return request.post("/news/" + way ,{
         title:article.title,
         content:article.content  
    })
}
export const getauditList = (page,limit)=>{
    console.log(page, limit);
    return request.get("/news/showAudit", {
        params:{
            current: page,
            size: limit,
        }
    })
}
export const getnotpass = (id)=>{
    console.log(id)
    return request.post("/news/audit/reject/"+id)
}
export const getpass = (id)=>{
    console.log(id)
    return request.post("/news/audit/pass/"+id )
}
