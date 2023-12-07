import { useCallback, useState, Dispatch, SetStateAction } from 'react';
import Cropper from 'react-easy-crop';
import { Area, Point } from 'react-easy-crop';

type ImageCropperTypes = {
  imageSrc: string;
  setCroppedArea: Dispatch<SetStateAction<Area>>
}

const ImageCropper = ({ imageSrc, setCroppedArea }: ImageCropperTypes) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels);
  }, [setCroppedArea]);

  return (
    <div style={{ position: 'relative', margin: 'auto', maxWidth: 600, height: 300 }}>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={1 / 1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        objectFit='cover'
      />
    </div>
  );
}

export default ImageCropper;
