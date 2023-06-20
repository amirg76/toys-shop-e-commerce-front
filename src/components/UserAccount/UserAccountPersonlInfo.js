import {
  UserAccountContentBlock,
  UserAccountContentHeader,
  UserAccountContentHeaderText,
  UserAccountContentDetailsCountiner,
  UserAccountContentDetailsBlock,
  UserAccountContentDetailsHeader,
  UserAccountContentDetailsInput,
} from "../styles/UserAccount/UserAccount.styled";
import UserAccountPersonalInfoButtons from "./UserAccountPersonalInfoButtons";
import UserAccountPersonalInfoPassPopUp from "./PasswordPopUp/UserAccountPersonalInfoPassPopUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deleteUser, updateUser } from "../../store/thunk-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const contentHeader = ["Mobile", "Email", "Last Name", "First Name"];
const UserAccountPersonlInfo = ({
  userClick,
  setUserClick,
  toggleModal,
  modal,
  currentUser,
}) => {
  const dispatch = useDispatch();
  const [accountValues, setAccountValues] = useState([]);

  const changeValues = (tag, value) => {
    let findTag = false;
    accountValues.map((element) => {
      if (element.tag === tag) {
        element.valueTag = value;
        findTag = true;
        return element;
      }
      return;
    });

    findTag && setAccountValues(accountValues);
  };
  const saveValues = () => {
    const accountValuesToSent = accountValues.reduce(
      (obj, item) => ({ ...obj, [item.tag]: item.valueTag }),
      {}
    );

    dispatch(updateUser(accountValuesToSent));
  };

  const deleteAccount = () => {
    dispatch(deleteUser(currentUser._id));
  };
  useEffect(() => {
    if (currentUser) {
      let accountDetails = [
        {
          tag: "mobile",
          valueTag: currentUser.mobile,
        },
        { tag: "email", valueTag: currentUser.email },
        { tag: "lastName", valueTag: currentUser.lastName },
        { tag: "name", valueTag: currentUser.name },
      ];
      setAccountValues(accountDetails);
    }
    // }
  }, []);

  return (
    <UserAccountContentBlock modal={modal}>
      <UserAccountContentHeader>
        <UserAccountContentHeaderText>
          Personl Info
        </UserAccountContentHeaderText>
        <AccountCircleIcon style={{ margin: "0.2rem 0 0 0.5rem" }} />
      </UserAccountContentHeader>

      <UserAccountContentDetailsCountiner>
        {contentHeader.map((Content, index) => {
          return (
            <UserAccountContentDetailsBlock key={index}>
              <UserAccountContentDetailsHeader>
                {Content}
              </UserAccountContentDetailsHeader>

              {accountValues.length > 0 && (
                <UserAccountContentDetailsInput
                  placeholder={accountValues[index].valueTag}
                  onChange={(e) =>
                    changeValues(accountValues[index].tag, e.target.value)
                  }
                />
              )}
            </UserAccountContentDetailsBlock>
          );
        })}
      </UserAccountContentDetailsCountiner>
      <UserAccountPersonalInfoButtons setUserClick={setUserClick} />
      {userClick === "save" && saveValues()}
      {userClick === "delete" && deleteAccount()}

      {modal && (
        <UserAccountPersonalInfoPassPopUp
          toggleModal={toggleModal}
          modal={modal}
        />
      )}
    </UserAccountContentBlock>
  );
};

export default UserAccountPersonlInfo;
