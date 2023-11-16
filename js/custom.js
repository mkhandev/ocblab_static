document.addEventListener("copy", (event) => {
    var pagelink = "\nSource: https://www.oceanizelab.com";
    var selection = window.getSelection();
    event.clipboardData.setData("text", selection + pagelink);
    event.preventDefault();
});