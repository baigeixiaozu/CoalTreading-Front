/* import axios from 'axios'

//拦截器预处理
axios.interceptors.request.use(config =>{
  const token = localStorage.getItem('token')
  token && (config.headers.Authorzation = token)
  return config
},error =>{
  return Promise.reject(error)
})

axios.interceptors.response.use(response =>{
  return response.data
},error =>{
  const {response} =error
})
export default function (url,{
  method
}) */



{
  "login": "testuser1",
  "pass": "123456",
  "nick": "昵称",
  "email": "abc@gmail.com"
}
