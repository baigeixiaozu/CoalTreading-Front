import request from '../../utils/axios';

// 提交新的挂牌信息
export const requestPublish = (data)=>{
    return request.post("/request/publish", data)
}

// 提交编辑的挂牌信息
export const requestEdit = (data)=>{
    return request.post("/request/edit", data)
}

// 获取自己的指定挂牌信息
export const loadMyDetail = (id)=>{
    return request.get("/request/my/detail/" + id)
}

// 获取所有的挂牌列表
export const loadAllList = (page, limit, userId = null)=>{
    const data = {};
    if(page)data.page = page;
    if(limit)data.limit = limit;
    if(userId)data.userId = userId;
    return request.get("/request/all/list", {
        data: data
    })
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