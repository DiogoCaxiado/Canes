function changeTheme() {
  const changeMode = document.body.classList.toggle("dark");
  const icon = document.getElementById("buttonChange");

  changeMode ? (icon.innerHTML = "light_mode") : (icon.innerHTML = "dark_mode");
}
