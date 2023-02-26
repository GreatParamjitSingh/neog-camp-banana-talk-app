var btnTranslate = document.querySelector("#btn-Translate");
var OutputResult = document.querySelector("#cardResult-Output");
var InputData = document.querySelector("#input-Data");

// var ServerUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var ServerUrl = "https://api.funtranslations.com/translate/minion.json";

function errorHandler(error, ToManyAttempts) {
  console.log("An error occured", error);
  console.log(ToManyAttempts);
}

function ConstructUrl(text) {
  return ServerUrl + "?" + "text=" + text;
}

function btnClicked() {
  if (InputData.value == "") {
    alert("Please enter some sentence");
  } else {
    var UrlValue = InputData.value;
    fetch(ConstructUrl(UrlValue))
      .then((response) => response.json())
      .then((json) => {
        OutputResult.innerText = json.contents.translated;
      })
      .catch(errorHandler);
  }
}

btnTranslate.addEventListener("click", btnClicked);
