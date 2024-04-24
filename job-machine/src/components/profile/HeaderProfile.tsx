import { useState } from "react";
import { Typography, Image,DescriptionsProps, theme, Row, Col, Descriptions, Modal, Upload, Button, Flex, UploadProps } from "antd";
import Admin from "@/assets/images/Admin.jpg";
import Card from "../common/Card";
import { ContainerHeaderProfile } from "./HeaderProfile.styled";
import { CameraOutlined,UploadOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { BaseButton } from "../common/BaseButton/BaseButton";
import { getBase64 } from "@/utils/utils";
import { FileType } from "@/interfaces";
const { Link, Title } = Typography;

const DECRIPTION_ITEM: DescriptionsProps['items'] = [
  {
    key: "full-name",
    label: "Name",
    children: <span>ADMIN Anh</span>
  },
  {
    key: "job-title",
    label: "job-title",
    children: <span>Software Engineer Pro Vip</span>
  },
  {
    key: "email",
    label: "Email: ",
    children: (
      <Link href="https://mail.google.com/mail/u/0/#inbox">
        adminAnh@com.com
      </Link>
    )
  },
  {
    key: "phone",
    label: "Phone Number:",
    children: (
      <Link>
      0768908472
      </Link>
    )
  },
  {
    key: 'address',
    label: 'Address: ',
    children: (
      <span>
        13 Trần Xuân Soạn, Phường Thuận Lộc, Thành Phố Huế
      </span>
    )
  },
]

const HeaderProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageAvatarTmp, setImageAvatarTmp] = useState<string>(Admin);
  const [imageAvatar, setImageAvatar] = useState<string>(Admin);
  const [loading, setLoading] = useState(false);
  
  const handleBeforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      console.log('Invalid file type. Please upload a JPG or PNG file.');
    }
    return isJpgOrPng;
  };
  const handleOk = () => {
    // Todo Ok
  }

  const handleCancel = () => {
    // Todo cancel
  }

  const handleChange: UploadProps['onChange'] = (info) => {
    
    if(info?.file.status === "uploading") {
      setLoading(true);
      return;
    } if(info.file.status === "done" ){
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageAvatar(url);  
      })
    } if(info.file.status === "error") {
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageAvatar(url);
      })
    }
  }

  const uploadButton = (
    <BaseButton>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </BaseButton>
  )
  return (
    <ContainerHeaderProfile>
      <Row gutter={[48,16]}>
        <Col xs={24} sm={8} lg={4} className="col-image">
          <Image
            src={imageAvatarTmp}
            alt="Admin Anh"
            height="100%"
            width="100%"
            style={{borderRadius: "50%"}}
            preview={false}
          />
          <span onClick={() => setShowModal(true)} className="icons"><CameraOutlined /></span>

        </Col>
        <Col >
          <Descriptions
            title = "Admin Info"
            items={DECRIPTION_ITEM}
            column={{xs: 1, sm:2, md:2, lg:3, xl: 3, xxl: 4}}
          />
        </Col>
      </Row>

      <Modal
        open={showModal}
        title={<Typography.Title level={4} style={{textAlign: 'center', margin: "-0.3rem 0 1.5rem 0"}}>Chọn ảnh đại diện</Typography.Title>}
        onCancel={() => setShowModal(false)}
        onOk = {handleOk}
      > 
      <div>
        <Image
          src={imageAvatar}
          alt="Avatar"
          style={{ width: '100%' }}
        />
      </div>
        <Upload
          beforeUpload={handleBeforeUpload}
          onChange={handleChange}
          showUploadList={false}
        >
          <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
        </Upload>
      </Modal>
    </ContainerHeaderProfile>
  );
}

export default HeaderProfile;
