import CheckIcon from "@mui/icons-material/Check";

const FilterListSelect = ({ CheckBoxsArray, item }) => {
  const { id, title } = item;

  const CheckSignIsOpen = (id, title) => {
    return CheckBoxsArray.map((item) => {
      if (item.obj_id === id && item.title === title && item.active) {
        return (
          <CheckIcon key={id} style={{ fontSize: "11px", display: "block" }} />
        );
      }
      // else return <CheckIcon style={{ fontSize: "11px", display: "none" }} />;
    });
  };

  return <>{CheckSignIsOpen(id, title)}</>;
};

export default FilterListSelect;
