export const state = () => ({
  latestAddedValue: null
})

export const getters = {
  getLatestAddedValue (state) {
    return state.latestAddedValue
  }
}

export const mutation = {
  updateLatestAddedValue (state, val) {
    state.latestAddedValue = val
  }
}

export const actions = {
  fetchLatestAddedValue ({ commit }, payload) {
    commit('updateLatestAddedValue', payload)
  }
}
