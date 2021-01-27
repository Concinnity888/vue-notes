import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      {
        title: 'First note',
        desc: 'Description for first note',
        date: new Date(Date.now()).toLocaleString()
      },
      {
        title: 'Second note',
        desc: 'Description for second note',
        date: new Date(Date.now()).toLocaleString()
      },
      {
        title: 'Third note',
        desc: 'Description for third note',
        date: new Date(Date.now()).toLocaleString()
      }
    ]
  },
  getters: {
    getNotes: (state) => state.notes
  },
  actions: {
    addNote ({ commit }, payload) {
      commit('ADD_NOTE', payload)
    },
    removeNote ({ commit }, payload) {
      commit('REMOVE_NOTE', payload)
    },
    filterNote ({ commit }, payload) {
      commit('FILTER_NOTE', payload)
    }
  },
  mutations: {
    ADD_NOTE (state, payload) {
      state.notes.push(payload)
    },
    REMOVE_NOTE (state, payload) {
      state.notes.splice(payload, 1)
    },
    FILTER_NOTE (state, payload) {
      payload = payload.trim().toLowerCase()

      if (payload) {
        state.notes = state.notes.filter((item) => item.title.toLowerCase().indexOf(payload) !== -1)
      }
    }
  }
})
