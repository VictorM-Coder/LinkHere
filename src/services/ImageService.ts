import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const ImageService = {
  uploadImage(imageToBeUploaded: File) {
    const storage = getStorage()
    const imageProfileRef = ref(storage, 'profile.jpg')

    uploadBytes(imageProfileRef, imageToBeUploaded).then((snapshot) =>
      console.log(`soltou o ponto ${snapshot}`),
    )
  },
  getImageProfile() {
    const storage = getStorage()
    getDownloadURL(ref(storage, 'profile.jpg')).then((url) => console.log(url))
  },
}
