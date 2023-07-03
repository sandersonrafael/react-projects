import { useState, useEffect } from 'react';
import * as Images from './services/images';

import * as C from './App.styles';

function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      setImages(await Images.getAll());
      setLoading(false);
    };
    getImages();
  }, []);
  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        {/* Área de Upload */}
        {loading ? (
          <C.ScreenWarning>

            <div>Carregando...</div>

          </C.ScreenWarning>
        ) : images.length > 0 ? (
          <C.PhotoList>

            {images.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}

          </C.PhotoList>
        ): (
          <C.ScreenWarning>

            <div>Ainda não há imagens cadastradas...</div>

          </C.ScreenWarning>
        )}

      </C.Area>
    </C.Container>
  );
}

export default App;
