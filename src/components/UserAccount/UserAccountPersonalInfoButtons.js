import {
  UserAccountContentButtons,
  UserAccountContentButtonArea,
  UserAccountContentButton,
} from "../styles/UserAccount/UserAccount.styled";
const UserAccountPersonalInfoButtons = ({ setUserClick }) => {
  return (
    <UserAccountContentButtons>
      <UserAccountContentButtonArea>
        <UserAccountContentButton
          delete={true}
          onClick={() => setUserClick("delete")}
        >
          Delete Account
        </UserAccountContentButton>
      </UserAccountContentButtonArea>
      <UserAccountContentButtonArea>
        <UserAccountContentButton onClick={() => setUserClick("chgPass")}>
          Change Password
        </UserAccountContentButton>
        <UserAccountContentButton onClick={() => setUserClick("save")}>
          Save
        </UserAccountContentButton>
      </UserAccountContentButtonArea>
    </UserAccountContentButtons>
  );
};

export default UserAccountPersonalInfoButtons;
