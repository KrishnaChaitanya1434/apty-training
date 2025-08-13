const container = document.getElementById("container");

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName === "DIV" && node.classList.contains("editable")) {
          node.addEventListener("click", handleDivClick);
        }
        if (
          node.tagName === "TEXTAREA" &&
          node.classList.contains("edit-area")
        ) {
          node.addEventListener("blur", handleBlur);
        }
      }
    });
  });
});

observer.observe(container, { childList: true, subtree: true });

document.querySelector(".editable").addEventListener("click", handleDivClick);

function handleDivClick(e) {
  const currentText = e.target.textContent.replace("✏️", "").trim();
  const textarea = document.createElement("textarea");
  textarea.className = "edit-area";
  textarea.value = currentText;
  e.target.replaceWith(textarea);
  textarea.focus();
}

function handleBlur(e) {
  const updatedText = e.target.value;
  const div = document.createElement("div");
  div.className = "editable";
  div.textContent = updatedText + " ✏️";
  e.target.replaceWith(div);
}
