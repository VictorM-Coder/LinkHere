import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
  orderBy,
} from 'firebase/firestore'
import { firestore } from '@/firebase'
import type LinkItemType from '@/types/LinkItemType'

const PATH = 'links'
const LinkService = {
  async createLink(link: LinkItemType) {
    return await addDoc(collection(firestore, PATH), link)
  },

  async findLinkByOwner(owner: string) {
    const linksRef = collection(firestore, PATH)
    const q = query(linksRef, where('owner', '==', owner), orderBy('order'))
    const links: LinkItemType[] = []

    await getDocs(q).then((snapshot) => {
      snapshot.forEach((doc) => {
        links.push({
          id: doc.id,
          title: doc.data().title,
          link: doc.data().link,
          order: doc.data().order,
          owner: doc.data().owner,
        })
      })
    })

    return links
  },

  async updateOrder(link1Updated: LinkItemType, link2Updated: LinkItemType) {
    const link1Ref = doc(firestore, PATH, link1Updated.id as string)
    const link2Ref = doc(firestore, PATH, link2Updated.id as string)

    await updateDoc(link1Ref, { order: link1Updated.order })
    await updateDoc(link2Ref, { order: link2Updated.order })
  },

  async update(linkToBeUpdated: LinkItemType) {
    const linkRef = doc(firestore, PATH, linkToBeUpdated.id as string)
    await updateDoc(linkRef, {
      title: linkToBeUpdated.title,
      link: linkToBeUpdated.link,
    })
  },
}

export default LinkService
