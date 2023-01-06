var encryptData = function(elementId, result) {
    var element = document.getElementById(elementId);
    var text = element.value;
    var encrypted = btoa(text);
    var resultElement = document.getElementById(result);
    resultElement.value = encrypted;
 }

 var decryptData = function(elementId, result) {
    var element = document.getElementById(elementId);
    var text = element.value;
    var decrypted = atob(text);
    var resultElement = document.getElementById(result);
    resultElement.value = decrypted;
 }