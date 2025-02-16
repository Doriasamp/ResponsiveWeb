// Print on console
console.log("Hello World");

const dialogEle = document.getElementById("dialogEle");
const launchBtn = document.getElementById("launchDialog");
const formResult = document.getElementById("formResult");

launchBtn.addEventListener("click", () => dialogEle.showModal());
dialogEle.addEventListener("close", () => {
    console.log(dialogEle.returnValue);
    formResult.textContent = dialogEle.returnValue;
});