import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

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

export const insert = async (file) => {
  if (['image/jpeg', 'image/png'].includes(file.type)) {
    const randomName = v4();
    const newFile = ref(storage, `images/${randomName}`);
    const upload = await uploadBytes(newFile, file);
    const imageUrl = await getDownloadURL(upload.ref);

    return {
      name: upload.ref.name,
      url: imageUrl,
    };
  } else return new Error('Formato de arquivo inválido');
};
