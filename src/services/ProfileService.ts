import { collection, addDoc } from 'firebase/firestore'
import { firestore } from '@/firebase'
import type ProfileType from '@/types/ProfileType'

const ProfileService = {
  async createProfile(profile: ProfileType) {
    const docRef = await addDoc(collection(firestore, 'profiles'), profile)
    console.log(docRef.id)
  },
}

export default ProfileService
