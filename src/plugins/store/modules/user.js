const user = {


  state: {
    user: {
      token: ''

    }

  },
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  //唯一修改state值
  mutations: {
    set_token(state, token) {
      state.token = token;
      sessionStorage.token = token
    }
  },
  //异步使用mutations
  actions: {
    asyncUpdateUser(context, user) {
      context.commit("set_token", user);
    }
  }


}

export default user;
