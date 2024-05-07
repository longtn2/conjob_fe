import { useEffect, useState } from 'react';
import ContentProfile from '@/components/profile/ContentProfile';
import HeaderProfile from '@/components/profile/HeaderProfile';
import { ContainerAdminProfile } from './AdminProfile.styled';
import { ProfileAdminType } from '@/interfaces/interfaces';
import { ProfileApi } from '@/api/profile/ProfileAPi';
import { formatDayjs } from '@/helper';
import { formatDate, profileAdminData } from '@/constants/constants';

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
    await ProfileApi.getProfile()
      .then(response => {
        setDataProfile(response.data);
      })
      .catch(error => {
        setDataProfile(profileAdminData);
      });
  };
  useEffect(() => {
    fetchDataProfile();
  }, [isFlag]);

  return (
    <ContainerAdminProfile>
      <div className="header">
        {dataProfile && (
          <HeaderProfile
            first_name={dataProfile?.first_name}
            last_name={dataProfile?.last_name}
            address={dataProfile?.address}
            dob={
              dataProfile?.dob && formatDayjs(dataProfile?.dob, formatDate.DATE)
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
          />
        )}
      </div>
    </ContainerAdminProfile>
  );
};

export default AdminProfile;
