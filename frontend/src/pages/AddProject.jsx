import { useState } from "react";
import axios from "axios";
import ImageCropper from "../components/ImageCropper";
import { getCroppedImage } from "../utils/cropImage";

const AddProject = ({ onProjectAdded }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [cropPixels, setCropPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  /* ================= FILE HANDLER ================= */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImageSrc(reader.result);
    reader.readAsDataURL(file);
  };

  /* ================= CROP SAVE ================= */
  const handleCropSave = async () => {
    if (!cropPixels) return;
    const cropped = await getCroppedImage(imageSrc, cropPixels);
    setCroppedImage(cropped);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (!croppedImage || !name || !description) {
      alert("Please complete all fields & crop image");
      return;
    }

    try {
      await axios.post(
        "https://real-trust-full-stack-1.onrender.com/api/projects",
        {
          image: croppedImage,
          name,
          description,
        }
      );

      alert("Project added successfully ✅");

      /* ✅ RESET FORM */
      setImageSrc(null);
      setCropPixels(null);
      setCroppedImage(null);
      setName("");
      setDescription("");

      /* ✅ CLEAR FILE INPUT */
      document.getElementById("projectImageInput").value = "";

      /* ✅ REFRESH PROJECT LIST */
      if (onProjectAdded) onProjectAdded();

    } catch (error) {
      alert("Failed to add project ❌");
    }
  };

  return (
    <div className="relative bg-white rounded-xl shadow-2xl p-10 max-w-4xl mx-auto">

      {/* BACKGROUND BUBBLES */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-70"></div>
      <div className="absolute bottom-10 -right-10 w-48 h-48 bg-gray-200 rounded-full blur-2xl opacity-60"></div>

      <h2 className="text-3xl font-extrabold text-blue-600 mb-8 text-center">
        Add New Project
      </h2>

      {/* FILE INPUT */}
      <input
        id="projectImageInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full border p-3 rounded-md mb-6"
      />

      {/* CROPPER */}
      {imageSrc && !croppedImage && (
        <div className="mb-6">
          <ImageCropper image={imageSrc} onCropDone={setCropPixels} />

          <button
            onClick={handleCropSave}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Crop Image
          </button>
        </div>
      )}

      {/* PREVIEW */}
      {croppedImage && (
        <img
          src={croppedImage}
          alt="Preview"
          className="mb-6 w-full h-[320px] object-cover rounded-lg shadow-lg"
        />
      )}

      {/* NAME */}
      <input
        placeholder="Project Name"
        value={name}
        className="block w-full border p-3 rounded-md mb-4"
        onChange={(e) => setName(e.target.value)}
      />

      {/* DESCRIPTION */}
      <textarea
        placeholder="Project Description"
        value={description}
        className="block w-full border p-3 rounded-md mb-6"
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* SUBMIT */}
      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-md transition"
      >
        Submit Project
      </button>
    </div>
  );
};

export default AddProject;
