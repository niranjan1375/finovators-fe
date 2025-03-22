import { useState } from "react";
import { useRouter } from "next/router";
import styles from "finovators/components/DataIngestion/upload.module.css";
import IcMCloudUpload from "finovators/commons/Icons/IcMCloudUpload";
import FileUpload from "finovators/commons/FileIUpload";
import { useRequest } from "finovators/commons/hooks/useRequest";

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

    // const handleUpload = () => {
    //   setUploading(true);
    //   let fakeProgress = 69;
    //   const interval = setInterval(() => {
    //     fakeProgress += 5;
    //     if (fakeProgress >= 100) {
    //       clearInterval(interval);
    //       setProgress(100);
    //       setTimeout(() => router.push("/polling"), 500);
    //     } else {
    //       setProgress(fakeProgress);
    //     }
    //   }, 200);
    // };

    const [{ loading }, executeRequest] = useRequest(
        {api:'/upload', method: "POST" },
        { manual: true }
    );

    const handleUpload = async () => {
        if (isUploadDisabled) return;

        setUploading(true);
        setProgress(0);

     

        let completedUploads = 0;

        const uploadFile = async (file, ) => {
            if (!file) return;

            const formData = new FormData();
            formData.append("file", file);

            try {
                await executeRequest({
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                });
                completedUploads += 1;
                setProgress(
                    (prevProgress) => prevProgress + 100 / files.length
                );
            } catch (error) {
                console.error("Upload error:", error);
            }
        };

        await Promise.all(
            files.map((file, index) => uploadFile(file))
        );

        setProgress(100);
        setTimeout(() => router.push("/polling"), 500);
    };

    const fileLabels = [
        "1. Accounts File",
        "2. Accounts Spending Data",
        "3. Rewards Redemption Data",
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
        </div>
    );
};

export default UploadPage;
