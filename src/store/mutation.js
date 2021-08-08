export default {
    set_token(state, newValue){
        console.log("mutation set_token", state, newValue);
        state.token = newValue;
        localStorage.setItem("token", newValue);
    },
    set_role(state, newValue){
        state.role = newValue;
        localStorage.setItem("role", newValue);
    }
}