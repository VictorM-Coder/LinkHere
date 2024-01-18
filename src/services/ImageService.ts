import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage'

const ImageService = {
  async uploadImage(profileId: string, imageToBeUploaded: File) {
    const storage = getStorage()
    const imageProfileRef = ref(storage, `/images/${profileId}.jpg`)

    await uploadBytes(imageProfileRef, imageToBeUploaded)
  },

  async getImageProfile(profileId: string) {
    const storage = getStorage()
    return await getDownloadURL(ref(storage, `/images/${profileId}.jpg`)).then(
      (url) => url,
    )
  },

  async deleteImageProfile(profileId: string) {
    const storage = getStorage()
    const imageProfileRef = ref(storage, `/images/${profileId}.jpg`)

    await deleteObject(imageProfileRef)
  },
}

export default ImageService
