import {
  UserAccountPersonalInfoPassPopUpMainPassHeader,
  UserAccountPersonalInfoPassPopUpMainPass,
  UserAccountPersonalInfoPassPopUpMainPassInputBlock,
  UserAccountPersonalInfoPassPopUpMainPassInput,
  UserAccountPersonalInfoPassPopUpMainPassInputIcon,
  UserAccountPersonalInfoPassPopUpMainPassBlock,
} from "../../styles/UserAccount/UserAccount.styled";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const UserAccountPersonalInfoPassPopUpMainPassword = ({
  passwordHeader,
  setPasswordHeader,
}) => {
  const toggleVisibilty = ({ id }) => {
    setPasswordHeader(
      passwordHeader.map((item) => {
        if (item.id === id) {
          item.visible = !item.visible;
        }
        return item;
      })
    );
  };
  const handleInputPassChange = ({ target }) => {
    const { id, value } = target;

    setPasswordHeader(
      passwordHeader.map((item) => {
        if (item.id === Number(id)) {
          item.input = value;
        }
        return item;
      })
    );
  };

  return (
    <UserAccountPersonalInfoPassPopUpMainPass>
      {passwordHeader.map((item) => {
        return (
          <UserAccountPersonalInfoPassPopUpMainPassBlock key={item.id}>
            <UserAccountPersonalInfoPassPopUpMainPassHeader>
              {item.name}
            </UserAccountPersonalInfoPassPopUpMainPassHeader>
            <UserAccountPersonalInfoPassPopUpMainPassInputBlock>
              <UserAccountPersonalInfoPassPopUpMainPassInput
                type={item.visible ? "text" : "password"}
                style={{ textAlign: "left" }}
                onChange={handleInputPassChange}
                id={item.id}
                value={item.input}
              />
              <UserAccountPersonalInfoPassPopUpMainPassInputIcon
                onClick={() => toggleVisibilty(item)}
              >
                {item.visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </UserAccountPersonalInfoPassPopUpMainPassInputIcon>
            </UserAccountPersonalInfoPassPopUpMainPassInputBlock>
          </UserAccountPersonalInfoPassPopUpMainPassBlock>
        );
      })}
    </UserAccountPersonalInfoPassPopUpMainPass>
  );
};

export default UserAccountPersonalInfoPassPopUpMainPassword;
