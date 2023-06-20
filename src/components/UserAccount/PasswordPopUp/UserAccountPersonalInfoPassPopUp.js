import {
  UserAccountPersonalInfoPassPopUpOverlay,
  UserAccountPersonalInfoPassPopUpCountiner,
  UserAccountPersonalInfoPassPopUpMain,
  UserAccountPersonalInfoPassPopUpMainError,
} from "../../styles/UserAccount/UserAccount.styled";
import { updateUser } from "../../../store/thunk-slice";
import UserAccountPersonalInfoPassPopUpMainHead from "./UserAccountPersonalInfoPassPopUpMainHead";
import UserAccountPersonalInfoPassPopUpMainPassword from "./UserAccountPersonalInfoPassPopUpMainPassword";
import { UserAccountPersonalInfoPassPopUpMainButton } from "../../styles/UserAccount/UserAccount.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
const UserAccountPersonalInfoPassPopUp = ({ toggleModal, modal }) => {
  const dispatch = useDispatch();
  const [passwordHeader, setPasswordHeader] = useState([
    { id: 1, name: "Password", visible: false, input: "" },
    { id: 2, name: "Confirm Password", visible: false, input: "" },
  ]);
  const [worngPass, setWorngPass] = useState(false);

  const savePassHandle = () => {
    const checkPass = passwordHeader.every(
      (val, i, arr) => val.input === arr[0].input
    );
    if (checkPass) {
      setWorngPass(false);

      dispatch(updateUser({ password: passwordHeader[0].input }));
      setPasswordHeader(
        passwordHeader.map((item) => {
          item.input = "";
          return item;
        })
      );
      toggleModal();
    } else setWorngPass(true);
  };
  return (
    <>
      <UserAccountPersonalInfoPassPopUpCountiner>
        <UserAccountPersonalInfoPassPopUpOverlay
          onClick={() => toggleModal()}
        />
        <UserAccountPersonalInfoPassPopUpMain>
          <UserAccountPersonalInfoPassPopUpMainHead toggleModal={toggleModal} />

          <UserAccountPersonalInfoPassPopUpMainPassword
            passwordHeader={passwordHeader}
            setPasswordHeader={setPasswordHeader}
          />
          <UserAccountPersonalInfoPassPopUpMainButton
            onClick={() => savePassHandle()}
          >
            Save
          </UserAccountPersonalInfoPassPopUpMainButton>
          <UserAccountPersonalInfoPassPopUpMainError>
            {worngPass && "Passwords do not match..."}
          </UserAccountPersonalInfoPassPopUpMainError>
        </UserAccountPersonalInfoPassPopUpMain>
      </UserAccountPersonalInfoPassPopUpCountiner>
    </>
  );
};

export default UserAccountPersonalInfoPassPopUp;
