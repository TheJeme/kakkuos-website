const header = document.querySelector("[data-header]");
const copyButtons = document.querySelectorAll("[data-copy]");
const highlightPreview = document.querySelector("[data-highlight-preview]");
const highlightName = document.querySelector("[data-highlight-name]");
const highlightDesc = document.querySelector("[data-highlight-desc]");
const highlightButtons = document.querySelectorAll("[data-highlight]");

const highlights = {
  desktop: {
    name: "niri + DMS",
    desc: "Scrollable tiling with a complete shell layer for launchers, status, notifications, lock, and settings.",
    a: "#9ece6a",
    b: "#7aa2f7"
  },
  terminal: {
    name: "Ghostty",
    desc: "A GPU-accelerated terminal paired with Kakku shell defaults and developer-friendly fonts.",
    a: "#7aa2f7",
    b: "#bb9af7"
  },
  shell: {
    name: "fish + Starship",
    desc: "fish is the default login shell, with zsh and bash defaults still available.",
    a: "#f7768e",
    b: "#e0af68"
  },
  browser: {
    name: "Zen Browser",
    desc: "Zen handles web links by default, with Firefox kept as a fallback and browser policies applied.",
    a: "#ff9e64",
    b: "#73daca"
  },
  files: {
    name: "Dolphin + yazi",
    desc: "Graphical and terminal file managers are both part of the default desktop workflow.",
    a: "#bb9af7",
    b: "#f7768e"
  },
  plugins: {
    name: "DMS plugins",
    desc: "The installer sets up the AI Assistant and Calculator plugins under DankMaterialShell.",
    a: "#e0af68",
    b: "#9ece6a"
  },
  colors: {
    name: "matugen colors",
    desc: "Wallpaper-based Material colors keep the shell, prompts, and branding visually aligned.",
    a: "#ff9e64",
    b: "#e0af68"
  },
  services: {
    name: "Core services",
    desc: "NetworkManager, Bluetooth, Docker, Tailscale, and power profiles are enabled when available.",
    a: "#c0caf5",
    b: "#a9b1d6"
  }
};

function setHeaderState() {
  header?.classList.toggle("scrolled", window.scrollY > 10);
}

function setHighlight(highlightKey) {
  const highlight = highlights[highlightKey] || highlights.desktop;

  highlightPreview?.style.setProperty("--theme-a", highlight.a);
  highlightPreview?.style.setProperty("--theme-b", highlight.b);

  if (highlightName) highlightName.textContent = highlight.name;
  if (highlightDesc) highlightDesc.textContent = highlight.desc;

  highlightButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.highlight === highlightKey);
  });
}

async function copyInstallCommand(button) {
  const code = button.closest(".code-block")?.querySelector("code");
  const text = code?.textContent?.trim();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = "Copy";
    }, 1400);
  } catch {
    button.textContent = "Select";
  }
}

window.addEventListener("scroll", setHeaderState, { passive: true });
copyButtons.forEach((button) => {
  button.addEventListener("click", () => copyInstallCommand(button));
});
highlightButtons.forEach((button) => {
  button.addEventListener("click", () => setHighlight(button.dataset.highlight));
});

setHeaderState();
setHighlight("desktop");
