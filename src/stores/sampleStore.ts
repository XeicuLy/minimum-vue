import { defineStore } from 'pinia'

export const useSampleStore = defineStore('sample', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount(state) {
      console.log('sampleStore')
      return state.count * 2
    },
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
