import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export const getAll = async () => {
  const list = [];

  const imagesFolder = ref(storage, 'images');
  const imageList = await listAll(imagesFolder);

  for (let i in imageList.items) {
    const imageUrl = await getDownloadURL(imageList.items[i]);

    list.push({
      name: imageList.items[i].name,
      url: imageUrl,
    });
  }

  return list;
};
