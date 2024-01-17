import { auth } from '@/firebase'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import type UserType from '@/types/UserType'

const AuthService = {
  async registerUser(email: string, password: string) {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return {
          id: userCredential.user.uid,
          email: userCredential.user.email as string,
        }
      })
      .catch((error) => {
        throw new Error(error.message)
      })
  },

  async loginUser(email: string, password: string) {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return {
          id: userCredential.user.uid,
          email: userCredential.user.email as string,
        }
      })
      .catch((error) => {
        throw new Error(error.message)
      })
  },

  getUserAuthenticated(): UserType | null {
    const currentUser = getAuth().currentUser
    if (currentUser) {
      return {
        id: currentUser.uid,
        email: currentUser.email as string,
      }
    }
    return null
  },
}

export default AuthService
