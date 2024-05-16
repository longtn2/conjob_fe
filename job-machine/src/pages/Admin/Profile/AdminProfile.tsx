import { useEffect, useState } from 'react';
import ContentProfile from '@/components/profile/ContentProfile';
import HeaderProfile from '@/components/profile/HeaderProfile';
import { ContainerAdminProfile } from './AdminProfile.styled';
import { ProfileAdminType } from '@/interfaces/interfaces';
import { ProfileApi } from '@/api/profile/ProfileAPi';
import { formatDayjs, getMessageStatus } from '@/helper';
import { formatDate } from '@/constants/constants';
import { Spin } from 'antd';

const AdminProfile = () => {
  const [dataProfile, setDataProfile] = useState<
    Partial<ProfileAdminType> | undefined
  >(undefined);
  const [loading, setLoading] = useState(false);
  const [isFlag, setIsFlag] = useState(false);
  const handleChangeLoading = () => {
    setLoading(prevLoading => !prevLoading);
  };

  const handleChangeFlag = () => {
    setIsFlag(isFlag => !isFlag);
  };

  const fetchDataProfile = async () => {
    setLoading(true);
    await ProfileApi.getProfile()
      .then(response => {
        setDataProfile(response.data);
      })
      .catch(error => {
        getMessageStatus(error.message, 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchDataProfile();
  }, [isFlag]);

  return (
    <ContainerAdminProfile>
      <Spin spinning={loading}>
        <div className="header">
          {dataProfile && (
            <HeaderProfile
              first_name={dataProfile?.first_name}
              last_name={dataProfile?.last_name}
              address={dataProfile?.address}
              dob={
                dataProfile.dob && formatDayjs(dataProfile.dob, formatDate.DATE)
              }
              email={dataProfile?.email}
              roles={dataProfile?.roles}
              phone_number={dataProfile?.phone_number}
              gender={dataProfile?.gender}
              avatar={dataProfile?.avatar}
            />
          )}
        </div>

        <div className="content-profile">
          {dataProfile && (
            <ContentProfile
              dataProfile={dataProfile}
              handleFlag={handleChangeFlag}
              handleChangeLoading={handleChangeLoading}
            />
          )}
        </div>
      </Spin>
    </ContainerAdminProfile>
  );
};

export default AdminProfile;
