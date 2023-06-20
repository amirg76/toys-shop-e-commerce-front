import {
  UserAccountPersonalInfoPassPopUpMainHeader,
  UserAccountPersonalInfoPassPopUpMainHeaderText,
} from "../../styles/UserAccount/UserAccount.styled";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import { Cursor } from "mongoose";
const UserAccountPersonalInfoPassPopUpMainHead = ({ toggleModal }) => {
  return (
    <UserAccountPersonalInfoPassPopUpMainHeader>
      <CloseIcon
        onClick={() => toggleModal()}
        style={{ fontSize: "1.5rem", cursor: "pointer" }}
      />
      <UserAccountPersonalInfoPassPopUpMainHeaderText>
        Change Password
        <CreateIcon
          style={{
            fontSize: "1rem",
            margin: "0.5rem 0 0 0.5rem",
          }}
        />
      </UserAccountPersonalInfoPassPopUpMainHeaderText>
    </UserAccountPersonalInfoPassPopUpMainHeader>
  );
};

export default UserAccountPersonalInfoPassPopUpMainHead;
