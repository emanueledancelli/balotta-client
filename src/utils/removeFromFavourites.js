export const removeFromFavourites = id => {
  let fav = JSON.parse(localStorage.getItem("fav")) || [];
  let res = fav.filter(e => e !== id);
  localStorage.setItem("fav", JSON.stringify(res));
};
