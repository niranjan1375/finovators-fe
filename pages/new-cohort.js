import { useState } from "react";
import { useRouter } from "next/router";
import styles from "finovators/components/DataIngestion/upload.module.css";
import IcMCloudUpload from "finovators/commons/Icons/IcMCloudUpload";



const FileUpload = ({ label, file, onChange }) => {
  return (
    <div className={styles.fileUploadContainer}>
      <h3 className={styles.file_upload_label}>{label}</h3>
      <label className={styles.fileInput}>
        <div className={styles.upload_icon_container}>
        <IcMCloudUpload className={styles.upload_icon} fill='#221f20' />
        <span className={styles.fileLabel}>{file ? file.name : "Choose File"}</span>
          <input type="file" onChange={onChange} />
          </div>
        {file ? <span className={styles.edit_button}> Edit</span>: <span className={styles.edit_button}> Choose</span>}
      </label>
      {/* {file && <p className={styles.uploadedText}>Uploaded</p>} */}
    </div>
  );
};

const UploadPage = () => {
  const [files, setFiles] = useState([null, null, null]);
  const [progress, setProgress] = useState(70);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleFileChange = (index, event) => {
    const newFiles = [...files];
    newFiles[index] = event.target.files[0] || null;
    setFiles(newFiles);
  };

  const isUploadDisabled = files.some((file) => file === null);

  const handleUpload = () => {
    setUploading(true);
    let fakeProgress = 69;
    const interval = setInterval(() => {
      fakeProgress += 5;
      if (fakeProgress >= 100) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => router.push("/polling"), 500);
      } else {
        setProgress(fakeProgress);
      }
    }, 200);
  };  

  const fileLabels = [
    "1. Accounts File",
    "2. Accounts Pending Data",
    "3. Rewards Redemption Data"
  ];


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Files</h2>
      <div className={styles.fileList}>
      {files.map((file, index) => (
          <FileUpload 
            key={index} 
            label={fileLabels[index]} 
            file={file} 
            onChange={(event) => handleFileChange(index, event)} 
          />
        ))}
      </div>
      <button
        onClick={handleUpload}
        disabled={isUploadDisabled || uploading}
        className={styles.uploadButton}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default UploadPage;