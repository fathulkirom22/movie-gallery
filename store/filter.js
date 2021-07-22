export const state = () => ({
  search : null,
})

export const mutations = {
  CHANGE_SEARCH(state, val){state.search = val},
}

export const actions = {
  SET_SEARCH({commit}, val){commit('CHANGE_SEARCH', val)},

  SET_DEFAULT({commit}){
    commit('CHANGE_SEARCH', null)
  }
}

export const getters = {
  GET_SEARCH:(state)=>(state.search),
}