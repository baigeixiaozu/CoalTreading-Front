export default {
    set_token(state, newValue){
        state.token = newValue;
        localStorage.setItem("token", newValue);
    },
    set_role(state, newValue){
        state.role = newValue;
        localStorage.setItem("role", newValue);
    },
    set_isLogin(state, newValue){
        state.isLogin = newValue;
        localStorage.setItem("isLogin", newValue);
    }
}