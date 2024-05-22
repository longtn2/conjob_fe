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
import { convertUrlToBase64, getBase64 } from '@/utils/utils';
import { FileType } from '@/interfaces';
import {
  BREAK_POINT_DESCRIPTION,
  TYPE_JPEG,
  TYPE_PNG,
  uploadStatusFile
} from '@/constants/constants';
import { ProfileApi } from '@/api/profile/ProfileAPi';
import { getMessageStatus, updateLocalStorage } from '@/helper';
import { ProfileAdminType, valueGetUrlS3 } from '@/interfaces/interfaces';
import { uploadAvatarApi } from '@/api/s3/uploadAvatar';
import { useTranslation } from 'react-i18next';
const { Link, Text } = Typography;

const HeaderProfile = ({ ...dataProfile }: ProfileAdminType) => {
  const [dataProfileHeader, setDataProfileHeader] =
    useState<ProfileAdminType>(dataProfile);
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const [isUrlS3, setIsUrlS3] = useState<string>('');
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
  const [isUrl, setIsUrl] = useState<File | undefined>();
  const avatarImage = localStorage.getItem('avatar');
  const [imageAvatar, setImageAvatar] = useState<string | undefined>(
    avatarImage || undefined
  );
  const [loading, setLoading] = useState(false);
  const [fileLength, setFileLength] = useState<number>(0);

  const descriptionItems: DescriptionsProps['items'] = [
    {
      key: 'full-name',
      label: <Text>{t('pages.profile.fullName')}</Text>,
      children: (
        <span>
          {first_name} {last_name}
        </span>
      ),
      span: BREAK_POINT_DESCRIPTION
    },
    {
      key: 'role_name',
      label: <Text>{t('pages.profile.roleName')}</Text>,
      children: <span>{roles && roles[0] && roles[0].role_name}</span>,
      span: BREAK_POINT_DESCRIPTION
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
      ),
      span: BREAK_POINT_DESCRIPTION
    },
    {
      key: 'phone',
      label: <Text>{t('pages.profile.phone')}</Text>,
      children: <Link className="primary-typhography">{phone_number}</Link>,
      span: BREAK_POINT_DESCRIPTION
    },
    {
      key: 'address',
      label: <Text>{t('pages.profile.address')}</Text>,
      children: <span>{address}</span>,
      span: BREAK_POINT_DESCRIPTION
    },
    {
      key: 'gender',
      label: <Text>{t('pages.profile.gender')}</Text>,
      children: <span>{gender}</span>,
      span: BREAK_POINT_DESCRIPTION
    },
    {
      key: 'dob',
      label: <Text>{t('pages.profile.dob')}</Text>,
      children: <span>{dob}</span>,
      span: BREAK_POINT_DESCRIPTION
    }
  ];

  useEffect(() => {
    setDataProfileHeader(dataProfile);
  }, [address, dataProfile, dob, first_name, gender, last_name, phone_number]);

  const handleBeforeUpload = (file: File) => {
    const isJpgOrPng = file.type === TYPE_JPEG || file.type === TYPE_PNG;
    if (!isJpgOrPng) {
      getMessageStatus(
        'Invalid file type. Please upload a JPG or PNG file.',
        'error'
      );
    }
    setIsUrl(file);
    const reader = new FileReader();

    reader.readAsText(file);
    return isJpgOrPng;
  };

  const handleOk = async () => {
    if (isUrlS3 && imageAvatar && isUrl) {
      setLoading(true);
      await uploadAvatarApi
        .uploadAvatar(isUrlS3, isUrl, fileLength)
        .then(() => {
          updateLocalStorage('avatar', imageAvatar);
          setShowModal(false);
          getMessageStatus('Upload Successfully', 'success');
        })
        .catch(err => {
          getMessageStatus(err, 'error');
        })
        .finally(() => {
          setShowModal(false);
          setLoading(false);
        });
    }
  };

  const handleCancel = () => {
    const image = localStorage.getItem('avatar');
    setShowModal(false);
    setImageAvatar(image ? image : undefined);
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
        setImageAvatar(url);
        if (info.file.originFileObj) {
          const { name, size } = info.file.originFileObj;
          setFileLength(size);
          if (name) {
            const values: valueGetUrlS3 = {
              file_name: name,
              file_type: name.split('.').pop() || '' // Assign empty string if no match
            };
            ProfileApi.postProfileAdmin(values)
              .then(response => {
                setIsUrlS3(response.data.url);
              })
              .catch(error => {
                getMessageStatus(error.message, 'error');
              });
          }
        }
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
      <Row gutter={[48, 32]}>
        <Col
          xs={24}
          sm={8}
          lg={4}
          style={{ paddingLeft: '0', paddingRight: '0' }}
          className="col-image"
        >
          {avatarImage && (
            <div style={{ width: '150px', height: '150px', margin: '0 auto' }}>
              <Image
                src={avatarImage}
                alt="Admin Anh"
                height="100%"
                width="100%"
                style={{ borderRadius: '50%', objectFit: 'cover' }}
                preview={false}
              />
            </div>
          )}
          <span onClick={() => setShowModal(true)} className="icons">
            <CameraOutlined />
          </span>
        </Col>
        <Col xs={24} sm={16} lg={20}>
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
            {t('pages.profile.choose')}
          </Typography.Title>
        }
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <div
          style={{
            width: '100%',
            height: '280px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            src={imageAvatar}
            alt="Avatar"
            style={{
              width: '100%',
              height: '280px',
              objectFit: 'contain'
            }}
            preview={false}
          />
        </div>
        <Upload
          beforeUpload={file => handleBeforeUpload(file)}
          onChange={handleChange}
          showUploadList={false}
          style={{ marginBottom: '5%' }}
        >
          <Button icon={<UploadOutlined />} style={{ marginTop: '2rem' }}>
            {t('pages.profile.upload')}
          </Button>
        </Upload>
      </Modal>
    </ContainerHeaderProfile>
  );
};

export default HeaderProfile;
