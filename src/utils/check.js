export const check = id => {
  let fav = JSON.parse(localStorage.getItem("fav")) || [];
  return fav.includes(id);
};
