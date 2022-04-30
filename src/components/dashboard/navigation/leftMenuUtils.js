export const getSelectedItem = (item, location) =>
  location.pathname.indexOf(item.url) === 0 ? item : null

export const isSelectedItem = (item, location) => Boolean(getSelectedItem(item, location))
