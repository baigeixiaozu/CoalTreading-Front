import request from '../../utils/axios';

export const getMessageList = (page,limit)=>{
    console.log(page, limit);
    return request.get("/message/myMsg", {
        params:{
            current: page,
            size: limit
        }
    })
}