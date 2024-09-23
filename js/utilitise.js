function getInputFieldById(id) {
    const inPutFieldValue = parseFloat(document.getElementById(id).value);
    return inPutFieldValue;
}

function getTheElementId(id) {
    const elementId = parseFloat(document.getElementById(id).innerText);
    return elementId;
}

function getIdForChangeClassName (id){
   const classList = document.getElementById(id);
   return classList;
}