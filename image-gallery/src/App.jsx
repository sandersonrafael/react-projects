import { useState, useEffect } from 'react';

import * as Images from './services/images';
import { ImageItem } from './components/ImageItem';
import * as C from './App.styles';

function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      setImages(await Images.getAll());
      setLoading(false);
    };
    getImages();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image');

    if (file && file.size > 0) {
      setUploading(true);
      const result = await Images.insert(file);
      setUploading(false);

      if (result instanceof Error)
        window.alert(`${result.name} - ${result.message}`);
      else {
        const newImageList = [...images];
        newImageList.push(result);
        setImages(newImageList);
      }
    }
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading && 'Enviando...'}
        </C.UploadForm>

        {loading ? (
          <C.ScreenWarning>
            <div>Carregando...</div>
          </C.ScreenWarning>
        ) : images.length > 0 ? (
          <C.PhotoList>
            {images.map((item, index) => (
              <ImageItem key={index} item={item} />
            ))}
          </C.PhotoList>
        ) : (
          <C.ScreenWarning>
            <div>Ainda não há imagens cadastradas...</div>
          </C.ScreenWarning>
        )}
      </C.Area>
    </C.Container>
  );
}

export default App;
