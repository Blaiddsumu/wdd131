function changeTheme(theme) {
    console.log({theme});
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
    console.log(document.body.classList.add(theme));
  }
  function changeThemeHook() {
    // do it again because things can change
    const s = document.getElementById("themeselect");
    const i = document.getElementById("logo");
    console.log(s.options);
    switch (s.options[s.selectedIndex].value) {
      case "dark": changeTheme("dark"); i.src="byui-logo_white.png";
      break;
      case "light": changeTheme("light"); i.src="byui-logo_blue.webp";
      break;
      default: changeTheme("light")
    }
  }
  document.getElementById("themeselect").addEventListener("change", changeThemeHook); 