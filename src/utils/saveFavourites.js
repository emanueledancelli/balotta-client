export const addToFavorities = id => {
  let fav = JSON.parse(localStorage.getItem("fav")) || [];
  fav.push(id);
  localStorage.setItem("fav", JSON.stringify(fav));
};
