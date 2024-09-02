function copyText() {
    
    var textToCopy = document.getElementById("textToCopy").innerText;

    var tempInput = document.createElement("textarea");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Текст скопійовано!");
}