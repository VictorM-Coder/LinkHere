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
        }
      })
    })

    return profile
  },
  async updateDataProfile(newProfile: ProfileType) {
    console.log(newProfile)
    const { id, ...profileRequest } = newProfile
    const profileRef = doc(firestore, PATH, id as string)
    await updateDoc(profileRef, profileRequest)
  },

  async updateImageProfile(profileId: string, image: File) {
    const profileRef = doc(firestore, PATH, profileId)

    await ImageService.uploadImage(profileId, image)
    const imageUrl = await ImageService.getImageProfile(profileId)

    await updateDoc(profileRef, { imageUrl: imageUrl })
  },
}

export default ProfileService
