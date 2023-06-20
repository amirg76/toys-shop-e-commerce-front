import {
  UserAccountContentCountiner,
  UserAccountContentTab,
} from "../styles/UserAccount/UserAccount.styled";
import UserAccountPersonlInfo from "./UserAccountPersonlInfo";
import UserAccountOrders from "./UserAccountOrders";
import UserAccountLikes from "./UserAccountLikes";
import { useState } from "react";
import { useEffect } from "react";
const tabContent = [
  UserAccountLikes,
  UserAccountOrders,
  UserAccountPersonlInfo,
];

const UserAccountContent = ({ toggleState, tabIcons, currentUser, tab }) => {
  const [userClick, setUserClick] = useState("");
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    userClick === "chgPass" && !modal && toggleModal();
    setUserClick("");
  }, [userClick]);
  return (
    <UserAccountContentCountiner popup={userClick === "chgPass" ? true : false}>
      {tabContent.map((Content, index) => {
        return (
          <UserAccountContentTab
            active={
              toggleState === index || Number(tab) === index ? true : false
            }
            key={index}
          >
            <Content
              userClick={userClick}
              setUserClick={setUserClick}
              toggleModal={toggleModal}
              modal={modal}
              currentUser={currentUser}
            />
          </UserAccountContentTab>
        );
      })}
    </UserAccountContentCountiner>
  );
};

export default UserAccountContent;
