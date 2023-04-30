import { useState } from "react";
import CryptoJS from "crypto-js";
import { CloudinaryUploadImageResponse } from "../../types/CloudinaryUploadImageResponse";

// upload a file to cloudinary using React Hooks
// see below for what hooks are
// https://reactjs.org/docs/hooks-intro.html

// make sure you fill these out:
const API_KEY = "232119299682464";
const SECRET = "ZY0ey727GM5RsY5m0ENUlkLGiGw";
const CLOUD_NAME = "dsvm26gtf";

export function useUploadToCloudinary() {
  const [isUploading, setIsUploading] = useState(false);
  const [hasErrored, setError] = useState(false);
  const [response, setResponse] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const start = (
    uri: string,
    contentType: "image" | "video",
    public_id: string,
    callback?: (arg: CloudinaryUploadImageResponse) => void
  ) => {
    try {
      if (!uri) {
        throw new Error("missing URI to upload...😔");
      } else if (!contentType) {
        throw new Error("missing contentType to upload...📸📹");
      }
      const timestamp = ((Date.now() / 1000) | 0).toString();
      const apiKey = API_KEY;
      const apiSecret = SECRET;
      const cloud = CLOUD_NAME;
      const hashString = `public_id=${public_id}&timestamp=${timestamp}${apiSecret}`;
      const signature = CryptoJS.SHA1(hashString).toString();
      const uploadUrl = `https://api.cloudinary.com/v1_1/${cloud}/${contentType}/upload`;

      const xhr = new XMLHttpRequest();
      setIsUploading(true);
      xhr.open("POST", uploadUrl);
      xhr.onload = () => {
        const res: CloudinaryUploadImageResponse = JSON.parse(xhr.response);
        if (callback) callback(res);
        setResponse(res);
        setUploadedUrl(res.secure_url);
        setIsUploading(false);
      };
      xhr.onerror = (e) => {
        setIsUploading(false);
        setError(true);
        console.log(
          e,
          "🚨 story upload failed, never properly sent to cloudinary"
        );
      };
      xhr.ontimeout = (e) => {
        setIsUploading(false);
        setError(true);
        console.warn(e, "⏰ cloudinary upload timed out");
      };

      const formData = new FormData();

      formData.append("file", uri);
      formData.append("timestamp", timestamp);
      formData.append("public_id", public_id);
      formData.append("api_key", apiKey);
      formData.append("signature", signature);
      xhr.send(formData);
      if (xhr.upload) {
        xhr.upload.onprogress = ({ total, loaded }) => {
          setProgress(loaded / total);
        };
      }
    } catch (e) {
      console.error("upload to cloudinary hook error", e);
    }
  };

  return { start, uploadedUrl, response, isUploading, hasErrored, progress };
}
