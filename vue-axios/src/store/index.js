import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 定义一个状态，并赋值
    name: '待改名'
  },
  mutations: {
    // 接受 state 作为第一个参数，你可以传入额外的参数，即 mutation 的 载荷（payload）。在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
    setName(state, payload) {
      state.name = payload.name;
  }
  },
  actions: {
  },
  modules: {
  }
})
