// 刚刚封装的axios
import request from '../../utils/axios';

/***
 *    __/\\\________/\\\_____/\\\\\\\\\\\____/\\\\\\\\\\\\\\\____/\\\\\\\\\_____        
 *     _\/\\\_______\/\\\___/\\\/////////\\\_\/\\\///////////___/\\\///////\\\___       
 *      _\/\\\_______\/\\\__\//\\\______\///__\/\\\_____________\/\\\_____\/\\\___      
 *       _\/\\\_______\/\\\___\////\\\_________\/\\\\\\\\\\\_____\/\\\\\\\\\\\/____     
 *        _\/\\\_______\/\\\______\////\\\______\/\\\///////______\/\\\//////\\\____    
 *         _\/\\\_______\/\\\_________\////\\\___\/\\\_____________\/\\\____\//\\\___   
 *          _\//\\\______/\\\___/\\\______\//\\\__\/\\\_____________\/\\\_____\//\\\__  
 *           __\///\\\\\\\\\/___\///\\\\\\\\\\\/___\/\\\\\\\\\\\\\\\_\/\\\______\//\\\_ 
 *            ____\/////////_______\///////////_____\///////////////__\///________\///__
 * 
 * 链接：http://patorjk.com/software/taag/#p=testall&c=c&f=Efti%20Wall&t=USER
 * */
export const getRoleList = (type)=>{
    return request.get("/user/getRoleList/" + type)
}

export const userLogin = (login, pass)=>{
    return request.post("/user/login", {
        login,pass
    })
}

export const userRegister = (data)=>{
    return request.post("/user/register", data)
}

export const userComplete = (data)=>{
    return request.post("/user/complete", data)
}

export const getUserInfo = ()=>{
    return request.get("/user/info")
}

export const getFullUserInfo = ()=>{
    return request.get("/user/fullInfo")
}

export const genNewUser = (data)=>{
    return request.post("/user/new", data)
}
export const getdetail = (id)=>{
    return request.get("/info/" + id )
}
export const getreglist = (page,limit)=>{
    console.log(page, limit);
    return request.get("/info/list", {
        params:{
            current: page,
            size: limit
        }
    })
}
