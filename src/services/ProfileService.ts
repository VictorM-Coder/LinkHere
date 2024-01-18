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
import ImageService from "@/services/ImageService"

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
          name: doc.data().name,
          bio: doc.data().bio,
          imageUrl: doc.data().image,
          owner: doc.data().owner,
        }
      })
    })

    return profile
  },
  async updateDataProfile(profileId: string, newProfile: ProfileType) {
    const profileRef = doc(firestore, PATH, profileId)
    await updateDoc(profileRef, { ...newProfile })
  },

  async updateImageProfile(profileId: string, image: File) {
    const profileRef = doc(firestore, PATH, profileId)

    ImageService.uploadImage(profileId, image)
    const imageUrl = await ImageService.getImageProfile(profileId)
    console.log(imageUrl)

    await updateDoc(profileRef, { image: imageUrl })
  },
}

export default ProfileService
