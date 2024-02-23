var htmlEditor = ace.edit("html");
htmlEditor.setTheme("ace/theme/cobalt");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.resize();
htmlEditor.setHighlightActiveLine(false);

var cssEditor = ace.edit("css");
cssEditor.setTheme("ace/theme/cobalt");
cssEditor.session.setMode("ace/mode/css");
cssEditor.resize();
cssEditor.setHighlightActiveLine(false);

var jsEditor = ace.edit("js");
jsEditor.setTheme("ace/theme/cobalt");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.resize();
jsEditor.setHighlightActiveLine(false);

function compiler() {
  var htmlValue = htmlEditor.getValue();
  var cssValue = cssEditor.getValue();
  var jsValue = jsEditor.getValue();
  var result = document.getElementById("result").contentWindow.document;

  result.open();
  result.writeln(
    "<style>" +
    cssValue +
    "</style>" +
    htmlValue +
    "<script>" +
    jsValue +
    "</script>"
  );
  result.close();
}

var allButtons = document.querySelectorAll("#button-wrapper button");
var allPanels = document.querySelectorAll("#ide-container .panel-wrapper");

function switchPanel(panelIndex) {
  switcher(panelIndex);
}

switchPanel(0);

function runEdit(panelIndex) {
  switcher(panelIndex);
  compiler();
}

function switcher(panelIndex) {
  allButtons.forEach(function (node) {
    node.style.background = "";
  });
  allButtons[panelIndex].style.background = "#002240";
  allPanels.forEach(function (node) {
    node.style.display = "none";
  });
  allPanels[panelIndex].style.display = "block";
}
function clearErrors(){

  errors=document.getElementsByClassName('fromerror');
  for(let item of errors)
  {
      item.innerHTML="";
  }
}
function seterror(id,error){
//sets error inside tag of id
element=document.getElementById(id);
element.getElementsByClassName('fromerror')[0].innerHTML=error;
}
function validateForm(){
var returnval=true;
clearErrors();
var name=document.forms['myform']["fname"].value;
if(name.length<5){
  seterror("name","Length of name is too short");
  returnval=false;

}

if(name.length==0){
  seterror("name","Enter your name");
  returnval=false;
}
var email=document.forms['myform']["femail"].value;
if(email.length>20){
seterror("email","enter valid email");
returnval=false;
}

var pass=document.forms['myform']["fpass"].value;
if(pass.length<6){

seterror("pass","Password must be atleast 6 charecters");
returnval=false;
}
var cpass=document.forms['myform']["fcpass"].value;
if(cpass!=pass){

seterror("cpass","Password and confirm password should be matched");
returnval=false;
}

return returnval;
}