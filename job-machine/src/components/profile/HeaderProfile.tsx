import { useEffect, useState } from 'react';
import {
  Typography,
  Image,
  DescriptionsProps,
  Row,
  Col,
  Descriptions,
  Modal,
  Upload,
  Button,
  UploadProps
} from 'antd';
import { ContainerHeaderProfile } from './HeaderProfile.styled';
import {
  CameraOutlined,
  UploadOutlined,
  LoadingOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import { getBase64, handleSuccess } from '@/utils/utils';
import { FileType } from '@/interfaces';
import { TYPE_JPEG, TYPE_PNG, uploadStatusFile } from '@/constants/constants';
import { ProfileApi } from '@/api/profile/ProfileAPi';
import { getMessageStatus } from '@/helper';
import { ProfileAdminType } from '@/interfaces/interfaces';
const { Link } = Typography;

const HeaderProfile = ({ ...dataProfile }: ProfileAdminType) => {
  const [dataProfileHeader, setDataProfileHeader] =
    useState<ProfileAdminType>(dataProfile);
  const [showModal, setShowModal] = useState(false);
  const {
    first_name,
    last_name,
    email,
    address,
    roles,
    phone_number,
    gender,
    dob
  } = dataProfileHeader;

  const avatarImage = localStorage.getItem('avatar');
  const [imageAvatar, setImageAvatar] = useState<string | undefined>(
    avatarImage || undefined
  );
  const [loading, setLoading] = useState(false);

  const descriptionItems: DescriptionsProps['items'] = [
    {
      key: 'full-name',
      label: 'Name',
      children: (
        <span>
          {first_name} {last_name}
        </span>
      )
    },
    {
      key: 'role_name',
      label: 'Role Name ',
      children: <span>{roles && roles[0] && roles[0].role_name}</span>
    },
    {
      key: 'email',
      label: 'Email',
      children: (
        <Link
          href="https://mail.google.com/mail/u/0/#inbox"
          className="primary-typhography"
        >
          {email}
        </Link>
      )
    },
    {
      key: 'phone',
      label: 'Phone Number',
      children: <Link className="primary-typhography">{phone_number}</Link>
    },
    {
      key: 'address',
      label: 'Address',
      children: <span>{address}</span>
    },
    {
      key: 'gender',
      label: 'Gender',
      children: <span>{gender}</span>
    },
    {
      key: 'dob',
      label: 'Day of birth',
      children: <span>{dob}</span>
    }
  ];

  useEffect(() => {
    setDataProfileHeader(dataProfile);
  }, [address, dob, first_name, gender, last_name, phone_number]);

  const handleBeforeUpload = (file: File) => {
    const isJpgOrPng = file.type === TYPE_JPEG || file.type === TYPE_PNG;
    if (!isJpgOrPng) {
      getMessageStatus(
        'Invalid file type. Please upload a JPG or PNG file.',
        'error'
      );
    }
    return isJpgOrPng;
  };
  const handleOk = () => {
    if (imageAvatar) {
      localStorage.setItem('avatar', imageAvatar);
      setShowModal(false);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleChange: UploadProps['onChange'] = info => {
    if (info?.file.status === uploadStatusFile.UPLOADING) {
      setLoading(true);
      return;
    }
    if (info.file.status === uploadStatusFile.DONE) {
      getBase64(info.file.originFileObj as FileType, url => {
        setLoading(false);
        setImageAvatar(url);
      });
    }
    if (info.file.status === uploadStatusFile.ERROR) {
      getBase64(info.file.originFileObj as FileType, url => {
        setLoading(false);
        ProfileApi.postProfileImage(url)
          .then(response => {
            setImageAvatar(response.data.avatar);
            const { message } = handleSuccess(response);
            getMessageStatus(message, 'success');
          })
          .catch(error => {
            getMessageStatus(error, 'error');
          });
      });
    }
  };

  const uploadButton = (
    <BaseButton>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </BaseButton>
  );
  return (
    <ContainerHeaderProfile>
      <Row gutter={[48, 16]}>
        <Col xs={24} sm={8} lg={4} className="col-image">
          {avatarImage && (
            <Image
              src={avatarImage}
              alt="Admin Anh"
              height="100%"
              width="100%"
              style={{ borderRadius: '50%', objectFit: 'cover' }}
              preview={false}
            />
          )}
          <span onClick={() => setShowModal(true)} className="icons">
            <CameraOutlined />
          </span>
        </Col>
        <Col>
          <Descriptions
            title="Admin Info"
            items={descriptionItems}
            column={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }}
          />
        </Col>
      </Row>

      <Modal
        open={showModal}
        title={
          <Typography.Title
            level={4}
            style={{ textAlign: 'center', margin: '-0.3rem 0 1.5rem 0' }}
          >
            Chọn ảnh đại diện
          </Typography.Title>
        }
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <div style={{ width: '480px', height: '280px' }}>
          <Image
            src={imageAvatar}
            alt="Avatar"
            style={{ width: '480px', height: '280px', objectFit: 'contain' }}
            preview={false}
          />
        </div>
        <Upload
          beforeUpload={handleBeforeUpload}
          onChange={handleChange}
          showUploadList={false}
          style={{ marginBottom: '5%' }}
        >
          <Button icon={<UploadOutlined />} style={{ marginTop: '2rem' }}>
            Tải ảnh lên
          </Button>
        </Upload>
      </Modal>
    </ContainerHeaderProfile>
  );
};

export default HeaderProfile;
