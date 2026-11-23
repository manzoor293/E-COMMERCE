import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

export async function uploadImages(request, response) {
  const files = request.files?.images ?? [];

  try {
    if (files.length === 0) {
      return response.status(400).json({
        message: 'No images received. Send files using the "images" field.',
        error: true,
        success: false,
      });
    }

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };

    const images = await Promise.all(
      files.map(async (file) => {
        try {
          const result = await cloudinary.uploader.upload(file.path, options);
          return result.secure_url;
        } finally {
          await fs.promises.unlink(file.path).catch((error) => {
            if (error.code !== "ENOENT") throw error;
          });
        }
      }),
    );

    return response.status(200).json({
      images,
      success: true,
      error: false,
    });
  } catch (error) {
    console.error("Image Upload Error:", error);

    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
