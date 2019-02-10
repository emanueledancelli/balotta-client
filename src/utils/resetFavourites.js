// resets localstorage on Sunday @midnight

export const resetFav = () => {
  let t = new Date();
  let d = t.getDay();
  let h = t.getHours();
  let m = t.getMinutes();

  if (d === 0 && h === 23 && m === 59) {
    localStorage.clear();
  } else {
    return;
  }
};
