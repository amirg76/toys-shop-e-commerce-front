export const HomeHotProductsFilter = (selectedfilter, filterItems) => {
  return filterItems.filter((item) => {
    let findItem = false;
    selectedfilter.forEach((selected) => {
      const itemRange = checkFilter(selected, item);

      if (selected.filterMin <= +itemRange && selected.filterMax >= +itemRange)
        findItem = true;
    });
    return findItem && item;
  });
};

const checkFilter = (selected, item) => {
  const itemFilter = selected.title.toLowerCase();

  const itemRange = String(item[itemFilter]).includes("+")
    ? item[itemFilter].replace("+", "")
    : item[itemFilter];
  return itemRange;
};
