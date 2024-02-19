import { CldUploadButton } from 'next-cloudinary';

export const FormPhoto = () => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <CldUploadButton uploadPreset="<Upload Preset>" />
    </div>
  );
};

export default FormPhoto;
