import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { firestore } from '@/firebase'
import type ProfileType from '@/types/ProfileType'

const ProfileService = {
  async createProfile(profile: ProfileType) {
    await addDoc(collection(firestore, 'profiles'), profile)
  },

  async findProfileByOwner(owner: string) {
    const profilesRef = collection(firestore, 'profiles')
    const q = query(profilesRef, where('owner', '==', owner))
    let profile: ProfileType = {} as ProfileType

    await getDocs(q).then((snapshot) => {
      snapshot.forEach((doc) => {
        profile = {
          name: doc.data().name,
          bio: doc.data().bio,
          image: doc.data().image,
          owner: doc.data().owner,
        }
      })
    })

    return profile
  },
}

export default ProfileService
