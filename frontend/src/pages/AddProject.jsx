import { useState } from "react";
import axios from "axios";
import ImageCropper from "../components/ImageCropper";
import { getCroppedImage } from "../utils/cropImage";

const AddProject = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [cropPixels, setCropPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImageSrc(reader.result);
    reader.readAsDataURL(file);
  };

  const handleCropSave = async () => {
    const cropped = await getCroppedImage(imageSrc, cropPixels);
    setCroppedImage(cropped);
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/projects", {
      image: croppedImage,
      name,
      description,
    });
    alert("Project added successfully");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add Project</h2>

      <input type="file" onChange={handleFileChange} />

      {imageSrc && (
        <>
          <ImageCropper
            image={imageSrc}
            onCropDone={setCropPixels}
          />
          <button
            onClick={handleCropSave}
            className="mt-4 bg-blue-500 text-white px-4 py-2"
          >
            Crop Image
          </button>
        </>
      )}

      {croppedImage && (
        <img
          src={croppedImage}
          alt="Preview"
          className="mt-4 w-[450px] h-[350px]"
        />
      )}

      <input
        placeholder="Project Name"
        className="block mt-4 border p-2"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Project Description"
        className="block mt-2 border p-2"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-600 text-white px-6 py-2"
      >
        Submit
      </button>
    </div>
  );
};

export default AddProject;
