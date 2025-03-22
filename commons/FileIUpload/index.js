import IcMCloudUpload from "../Icons/IcMCloudUpload";
import styles from "./styles.module.css";

const FileUpload = ({ label, file, onChange }) => {
    return (
        <div className={styles.fileUploadContainer}>
            <h3 className={styles.file_upload_label}>{label}</h3>
            <label className={styles.fileInput}>
                <div className={styles.upload_icon_container}>
                    <IcMCloudUpload
                        className={styles.upload_icon}
                        fill="#221f20"
                    />
                    <span className={styles.fileLabel}>
                        {file ? file.name : "Choose File"}
                    </span>
                    <input type="file" onChange={onChange} />
                </div>
                {file ? (
                    <span className={styles.edit_button}> Edit</span>
                ) : (
                    <span className={styles.edit_button}> Choose</span>
                )}
            </label>
        </div>
    );
};

export default FileUpload;

