import React from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const FileUpload = (props) => {
  const BASE_URL = "https://turntablexebackend.herokuapp.com/api/turntablexe/upload/cv/";

  const prop = {
    name: "file",
    action: `${BASE_URL}${props.id}`,
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} File uploaded successfully`);
      } 
      else if (info.file.status === "error") {
        message.error(`${info.file.name} File type need to be pdf.`);
        console.log(info.file.status);
      }
    },
  };

  return (
    <Upload {...prop} method="POST">
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
};

export default FileUpload;
