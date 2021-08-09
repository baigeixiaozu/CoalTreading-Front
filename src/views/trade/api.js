import request from '../../utils/axios';

export const requestPublish = (data)=>{
    return request.post("/request/publish", data)
}
export const requestEdit = (data)=>{
    return request.post("/request/edit", data)
}

export const loadDetail = (id)=>{
    return request.get("/request/my/detail/" + id)
}