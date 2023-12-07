import { ChangeEvent, useEffect, useState } from 'react';
import ImageCropper from './ImageCropper';
import getCroppedImg from './getCroppedImg';
import { Area } from 'react-easy-crop';

const App = () => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [croppedImgSrc, setCroppedImgSrc] = useState<string>('');
  const [croppedArea, setCroppedArea] = useState<Area>({
    height: 0,
    width: 0,
    x: 0,
    y: 0
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }

  };

  const handleSaveImage = async () => {
    const src = await getCroppedImg(imageSrc, croppedArea);
    setCroppedImgSrc(src);
  };

  useEffect(() => {
    console.log(imageSrc);
  }, [imageSrc]);

  return (
    <>
      {/* https://wallpapers.com/images/hd/blue-aesthetic-moon-df8850p673zj275y.jpg */}
      <ImageCropper imageSrc={imageSrc} setCroppedArea={setCroppedArea} />
      <input type="file" name="img" onChange={handleFileChange} />
      <br />
      <button onClick={handleSaveImage} type="button">Salvar imagem</button>
      <img src={croppedImgSrc} alt="Cropped Image" style={{ display: 'block' }} />
    </>
  );
}

export default App;
