const header = document.querySelector("[data-header]");
const copyButton = document.querySelector("[data-copy]");
const installCommand = document.querySelector("#install-command");
const themePreview = document.querySelector("[data-theme-preview]");
const themeName = document.querySelector("[data-theme-name]");
const themeDesc = document.querySelector("[data-theme-desc]");
const themeButtons = document.querySelectorAll("[data-theme]");

const themes = {
  matcha: {
    name: "Matcha",
    desc: "Green accents with a calm dark shell.",
    a: "#9ece6a",
    b: "#7aa2f7"
  },
  blueberry: {
    name: "Blueberry",
    desc: "Cool blue highlights for a crisp Wayland workspace.",
    a: "#7aa2f7",
    b: "#bb9af7"
  },
  strawberry: {
    name: "Strawberry",
    desc: "Bright rose accents with a soft terminal-ready base.",
    a: "#f7768e",
    b: "#e0af68"
  },
  funfetti: {
    name: "Funfetti",
    desc: "Playful color pops across launchers, bars, and prompts.",
    a: "#ff9e64",
    b: "#73daca"
  },
  velvet: {
    name: "Velvet",
    desc: "Deep violet tones for a richer desktop setup.",
    a: "#bb9af7",
    b: "#f7768e"
  },
  caramel: {
    name: "Caramel",
    desc: "Warm amber details balanced by a dark interface.",
    a: "#e0af68",
    b: "#9ece6a"
  },
  honey: {
    name: "Honey",
    desc: "Golden highlights with a smooth, readable desktop base.",
    a: "#f6c85f",
    b: "#f4a261"
  },
  mocha: {
    name: "Mocha",
    desc: "Low-contrast comfort with clean Wayland essentials.",
    a: "#c0caf5",
    b: "#a9b1d6"
  },
  tiramisu: {
    name: "Tiramisu",
    desc: "Soft dessert tones for a quieter desktop setup.",
    a: "#f4c2c2",
    b: "#c3e88d"
  },
  vanilla: {
    name: "Vanilla",
    desc: "Simple neutral defaults with light, readable accents.",
    a: "#f4f7fb",
    b: "#9ece6a"
  }
};

function setHeaderState() {
  header?.classList.toggle("scrolled", window.scrollY > 10);
}

function setTheme(themeKey) {
  const theme = themes[themeKey] || themes.matcha;

  themePreview?.style.setProperty("--theme-a", theme.a);
  themePreview?.style.setProperty("--theme-b", theme.b);

  if (themeName) themeName.textContent = theme.name;
  if (themeDesc) themeDesc.textContent = theme.desc;

  themeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === themeKey);
  });
}

async function copyInstallCommand() {
  const text = installCommand?.textContent?.trim();
  if (!text || !copyButton) return;

  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1400);
  } catch {
    copyButton.textContent = "Select";
  }
}

window.addEventListener("scroll", setHeaderState, { passive: true });
copyButton?.addEventListener("click", copyInstallCommand);
themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.theme));
});

setHeaderState();
setTheme("matcha");
