interface State {
  count: number
}
const state: State = {
  count: 0,
}

const mutations = {
  INCREMENT: (state: State) => {
    state.count++
  },
}

const actions = {
  increment({ commit }) {
    commit('INCREMENT')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
