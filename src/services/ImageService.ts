import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const ImageService = {
  uploadImage(profileId: string, imageToBeUploaded: File) {
    const storage = getStorage()
    const imageProfileRef = ref(storage, `/images/${profileId}.jpg`)

    uploadBytes(imageProfileRef, imageToBeUploaded).then((snapshot) =>
      console.log(`soltou o ponto ${snapshot}`),
    )
  },
  async getImageProfile(profileId: string) {
    const storage = getStorage()
    return await getDownloadURL(ref(storage, `/images/${profileId}.jpg`)).then(
      (url) => url,
    )
  },
}

export default ImageService
