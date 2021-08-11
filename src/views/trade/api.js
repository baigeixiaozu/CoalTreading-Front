import request from '../../utils/axios';

// 提交新的挂牌信息[草稿|发布]
export const requestPublish = (data)=>{
    return request.post("/request/publish", data)
}

// 提交编辑的挂牌信息[草稿|发布]
export const requestEdit = (data)=>{
    return request.post("/request/edit", data)
}

// 获取自己的指定挂牌信息[草稿|审核|未审核。。。]
export const loadMyDetail = (id)=>{
    return request.get("/request/my/detail/" + id)
}

// 获取自己的挂牌列表
export const loadMyList = (page, limit)=>{
    const data = {};
    if(page)data.page = page;
    if(limit)data.limit = limit;
    return request.get("/request/my/list", {
        data: data
    })
}

// 获取所有的挂牌列表
export const loadPublicReqList = (page, limit, userId = null)=>{
    const data = {};
    if(page)data.page = page;
    if(limit)data.limit = limit;
    if(userId)data.userId = userId;
    return request.get("/request/public/list", {
        data: data
    })
}

// 获取公开的过审的挂牌信息
export const getPublicReqDetail = (id)=>{
    return request.get("/request/public/detail", {
        params: {
            id
        }
    })
}

// 用户进行摘牌操作
export const doDelist = (id)=>{
    return request.post("/delist/delist", null, {
        params: {
            request_id: id
        }
    })
}