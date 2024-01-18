import { defineStore } from 'pinia'
import type UserType from '@/types/UserType'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as UserType | null,
  }),
  getters: {
    getId: (state) => {
      return state.user?.id as string
    },
    isAuthenticated: (state) => state.user != null,
  },
})
