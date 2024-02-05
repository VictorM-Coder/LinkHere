import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { firestore } from '@/firebase'
import type ProfileType from '@/types/ProfileType'
import ImageService from '@/services/ImageService'

const PATH = 'profiles'
const ProfileService = {
  async createProfile(profile: ProfileType) {
    await addDoc(collection(firestore, PATH), profile)
  },

  async checkIfUsernameExists(username: string) {
    const profilesRef = collection(firestore, PATH)
    const q = query(profilesRef, where('username', '==', username))

    return await getDocs(q).then((snapshot) => {
      return !snapshot.empty
    })
  },

  async findProfileByOwner(owner: string) {
    const profilesRef = collection(firestore, PATH)
    const q = query(profilesRef, where('owner', '==', owner))
    let profile: ProfileType = {} as ProfileType

    await getDocs(q).then((snapshot) => {
      snapshot.forEach((doc) => {
        profile = {
          id: doc.id,
          name: doc.data().name,
          bio: doc.data().bio,
          imageUrl: doc.data().imageUrl,
          owner: doc.data().owner,
          username: doc.data().username,
        }
      })
    })

    return profile
  },

  async updateDataProfile(id: string, name: string, bio: string) {
    const profileRef = doc(firestore, PATH, id as string)
    await updateDoc(profileRef, {
      name: name,
      bio: bio,
    })
  },

  async updateImageProfile(profileId: string, image: File) {
    const profileRef = doc(firestore, PATH, profileId)

    await ImageService.uploadImage(profileId, image)
    const imageUrl = await ImageService.getImageProfile(profileId)

    await updateDoc(profileRef, { imageUrl: imageUrl })
  },
}

export default ProfileService
