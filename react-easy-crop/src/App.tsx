import { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
// import './ReactCrop.css'

import './App.css';

type CroppedAreas = {
  x: number;
  y: number;
  height: number;
  width: number;
};

const App = () => {
  const [crop, setCrop] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);

  const onCropComplete = useCallback((croppedArea: CroppedAreas, croppedAreaPixels: CroppedAreas) => {
    console.log({croppedArea, croppedAreaPixels});
  }, []);

  return (
    <div style={{ position: 'relative', margin: 'auto', width: 300, height: 300 }}>
      <Cropper
        image='https://miro.medium.com/v2/resize:fit:1400/1*29NeeIGT0BElEBNfzE_VlQ.jpeg'
        crop={crop}
        zoom={zoom}
        aspect={1/1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        cropShape='round'
        objectFit='horizontal-cover'
        // disableAutomaticStylesInjection={true}
      />
    </div>
  );
}

export default App;
