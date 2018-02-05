function onDOMLoaded() {
  document.getElementsByTagName("body")[0].classList.add("-js-dom-loaded");
  document.getElementById('reg-no-field').disabled=true;
  // Handling parent color change on focus.
  var items = document.getElementsByTagName("input");
  for (var i = 0; i < items.length; i++) {
    var elem = items[i];
    elem.addEventListener("focus", function onInputFocus() {
      this.parentNode.classList.add("focused-fieldset");
    });
    elem.addEventListener("blur", function onInputBlur() {
      this.parentNode.classList.remove("focused-fieldset");
    });
  }
}

function onFullyLoaded() {
  document.getElementsByTagName("body")[0].classList.add("-js-page-loaded");

}

////////////////////////////////////////////////////////////////////////////
function attachOnFullyLoaded(func) {
  if (window.attachEvent) {
    window.attachEvent('onload', func);
  } else {
    window.onload = func;
  }
}

function attachOnDOMLoaded(func) {
  document.addEventListener('DOMContentLoaded', func);
}

attachOnDOMLoaded(onDOMLoaded);
attachOnFullyLoaded(onFullyLoaded);

////////////////////////////////////////////////////////////////////////////
function EnableTextbox(ObjChkId,ObjTxtId)
{

    if(document.getElementById(ObjChkId).checked)
    {
        document.getElementById(ObjTxtId).disabled = false;
        document.getElementById(ObjTxtId).placeholder = "17BCE1234";
        document.getElementById('email').placeholder="@vitstudent.ac.in";
    }
    else
    {
        document.getElementById(ObjTxtId).disabled = true;
        document.getElementById(ObjTxtId).value="";
        document.getElementById(ObjTxtId).placeholder = "";
        document.getElementById('email').placeholder="";
    }
}

///////////////////////////////////////////////////////////////////////////
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
//////////////////////////////////////////////////////////////////////////