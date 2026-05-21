const header = document.querySelector("[data-header]");
const copyButtons = document.querySelectorAll("[data-copy]");

function setHeaderState() {
  header?.classList.toggle("scrolled", window.scrollY > 10);
}

async function copyInstallCommand(button) {
  const code = button.closest(".code-block")?.querySelector("code");
  const text = code?.textContent?.trim();
  if (!text) return;

  const originalLabel = button.textContent;

  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Copied";
    button.setAttribute("aria-label", "Install command copied");
    window.setTimeout(() => {
      button.textContent = originalLabel || "Copy";
      button.setAttribute("aria-label", "Copy install command");
    }, 1400);
  } catch {
    button.textContent = "Select";
    button.setAttribute("aria-label", "Select the install command to copy it");
  }
}

window.addEventListener("scroll", setHeaderState, { passive: true });
copyButtons.forEach((button) => {
  button.addEventListener("click", () => copyInstallCommand(button));
});

setHeaderState();
