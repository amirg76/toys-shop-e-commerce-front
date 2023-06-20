import {
  UserAccountTabsCountiner,
  UserAccountTabsBlock,
  UserAccountTabsTab,
  UserAccountTabsTabHeader,
} from "../styles/UserAccount/UserAccount.styled";

const tabHeaders = ["Likes Products", "My Orders", "Personal Info"];

const UserAccountTabs = ({ toggleState, setToggleState, tabIcons }) => {
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <UserAccountTabsCountiner>
      <UserAccountTabsBlock>
        {tabHeaders.map((tab, index) => {
          const CustomTabIcons = tabIcons[index];
          return (
            <UserAccountTabsTab
              key={index}
              onClick={() => toggleTab(index)}
              active={toggleState === index ? true : false}
            >
              <UserAccountTabsTabHeader>
                {tabHeaders[index]}
              </UserAccountTabsTabHeader>
              <CustomTabIcons style={{ paddingLeft: "0.5rem" }} />
            </UserAccountTabsTab>
          );
        })}
      </UserAccountTabsBlock>
    </UserAccountTabsCountiner>
  );
};

export default UserAccountTabs;
