import request from "../../utils/axios";

// 获取公司名
export const getComName = () => {
  return request.get("/request/getComName");
};
// 提交新的挂牌信息[草稿|发布]
export const requestPublish = data => {
  return request.post("/request/publish", data);
};

// 提交编辑的挂牌信息[草稿|发布]
export const requestEdit = data => {
  return request.post("/request/edit", data);
};

// 获取自己的指定挂牌信息[草稿|审核|未审核。。。]
export const loadMyReqDetail = id => {
  return request.get("/request/my/detail/" + id);
};

// 获取自己的挂牌列表
export const loadMyReqList = (page, limit) => {
  const data = {};
  if (page) data.page = page;
  if (limit) data.limit = limit;
  return request.get("/request/my/list", {
    params: data
  });
};

// 获取所有的挂牌列表
export const loadPublicReqList = (page, limit, userId = null) => {
  const data = {};
  if (page) data.page = page;
  if (limit) data.limit = limit;
  if (userId) data.userId = userId;
  return request.get("/request/public/list", {
    params: data
  });
};

// 获取公开的过审的挂牌信息
export const getPublicReqDetail = id => {
  return request.get("/request/public/detail", {
    params: {
      id
    }
  });
};

// 用户摘牌列表
export const loadDelistList = (page = 1, limit = 10) => {
  return request.get("/delist/my/list", {
    params: { page, limit }
  });
};

// 用户进行摘牌操作
export const doDelist = id => {
  return request.post("/delist/delist", null, {
    params: {
      request_id: id
    }
  });
};

// 用户摘牌详情
export const getZPDetail = id => {
  console.log(id);
  return request.get("/delist/detailInfoForUser", {
    params: {
      delistId: id
    }
  });
};
// 用户摘牌详情2
export const getZPDetail2 = id => {
  console.log(id);
  return request.get("/delist/detailInfoForUser2", {
    params: {
      reqId: id
    }
  });
};

//获取用户财务信息
export const getMarginInfo = () => {
  return request.get("/payment/show");
};

//用户进行支付保证金操作
export const postMarginInfo = (id)=>{
    return request.post("/payment/number/",{
      params: id

    })
}

//获取买方信息
export const getPredepositinfo = ()=>{
    return request.get("/fin/info")
}

//用户进行支付保证金操作
export const postPredepositinfo = (data,id)=>{
    return request.post("/payment/number/"+id,{
      params: {
          request_id: id
      },
      data:data
    })
}
