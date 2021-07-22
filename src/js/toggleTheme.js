const themes = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
themeSwitchToggle.addEventListener('change', changeTheme);
actualTheme();

function actualTheme() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    body.classList.add(themes.DARK);
    themeSwitchToggle.checked = true;
  } else {
    body.classList.add(themes.LIGHT);
  }
}

function changeTheme() {
  if (themeSwitchToggle.checked) {
    body.classList.remove(themes.LIGHT);
    body.classList.add(themes.DARK);
    localStorage.setItem('theme', themes.DARK);
    return;
  }
  body.classList.remove(themes.DARK);
  body.classList.add(themes.LIGHT);
  localStorage.setItem('theme', themes.LIGHT);
}
