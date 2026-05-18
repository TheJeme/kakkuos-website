const header = document.querySelector("[data-header]");
const copyButtons = document.querySelectorAll("[data-copy]");

function setHeaderState() {
  header?.classList.toggle("scrolled", window.scrollY > 10);
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

setHeaderState();
