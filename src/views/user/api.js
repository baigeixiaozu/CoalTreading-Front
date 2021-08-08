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
 */
export const getUserRole = ()=>{
    return request.get("/user/getRoleList/user")
}

export const userLogin = (login, pass)=>{
    return request.post("/user/login", {
        login,pass
    })
}