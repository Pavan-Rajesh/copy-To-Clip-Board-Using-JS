const copyButton = document.getElementsByClassName("copy");

copyButton[0].addEventListener("click", (e) => {
  console.log("clicked");
  const textToBeCopied = document.getElementById("text").textContent;
  const clipBoard = navigator.clipboard;

  navigator.clipboard.writeText(textToBeCopied);
});
