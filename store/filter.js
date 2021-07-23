export const state = () => ({
  movies : [],
  filtered_movies : [],
  date : [null, null],
  search : null,
})

export const mutations = {
  CHANGE_MOVIES(state, val){state.movies = val},
  CHANGE_FILTERED_MOVIES(state, val){state.filtered_movies = val},
  CHANGE_DATE(state, val){state.date = val},
  CHANGE_SEARCH(state, val){state.search = val},
}

export const actions = {
  SET_MOVIES({commit}, val){commit('CHANGE_MOVIES', val)},
  SET_FILTERED_MOVIES({commit}, val){commit('CHANGE_FILTERED_MOVIES', val)},
  SET_DATE({commit}, val){commit('CHANGE_DATE', val)},
  SET_SEARCH({commit}, val){commit('CHANGE_SEARCH', val)},

  SET_DEFAULT({commit}){
    commit('CHANGE_MOVIES', [])
    commit('CHANGE_FILTERED_MOVIES', [])
    commit('CHANGE_DATE', [null, null])
    commit('CHANGE_SEARCH', null)
  }
}

export const getters = {
  GET_MOVIES:(state)=>(state.movies),
  GET_FILTERED_MOVIES:(state)=>(state.filtered_movies),
  GET_DATE:(state)=>(state.date),
  GET_SEARCH:(state)=>(state.search),
}