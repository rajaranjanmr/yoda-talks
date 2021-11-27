var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var txtInput = document.querySelector("#txt-input");
//var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/yoda.json";
function getTranslationURL(text){
    return serverUrl + "?" + "text=" + text;
}
function errorHandler(error){
    console.log("error occured ",error);
}
function clickHandler(){
    // console.log("clicked!");
    // console.log("input",txtInput.value);
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    }).catch(errorHandler);                 
}


//
btnTranslate.addEventListener("click",clickHandler);
//function taking another function as input is called callback
// call back in js is when we call the method on some events and 
//function is triggered back. same as normal function

