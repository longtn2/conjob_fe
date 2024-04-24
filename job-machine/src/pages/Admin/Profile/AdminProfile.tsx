import ContentProfile from "@/components/profile/ContentProfile"
import HeaderProfile from "@/components/profile/HeaderProfile"
import { ContainerAdminProfile } from "./AdminProfile.styled";

const AdminProfile = () => {
  return (
    <ContainerAdminProfile>
      <div className="header">
        <HeaderProfile/>
      </div>
      <div className="content-profile">
        <ContentProfile/>
      </div>
    </ContainerAdminProfile>
  );
}

export default AdminProfile;  