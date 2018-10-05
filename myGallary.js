function addLoadEvent(func){
    var oldOnLoad = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function() {
            oldOnLoad();
            func();
        };
    }

};
function prepareGallary(){
    if(!document.getElementById)return false;
    if(!document.getElementsByClassName)return false;
    var myGallary = document.getElementById('myGallary');
    if(!myGallary)return false;
    // if(!document.getElementById('myGallary'))return false;
    var links = document.getElementsByTagName('a');
    for(i=0;i<links.length;i++){
        links[i].onclick = function() {
            return showPic(this) ? false : true;
        };
    }

};


function showPic(whichPic){
    var source = whichPic.getAttribute('href');
    var placeHolder = document.getElementById('placeHolder');
    if(!placeHolder)return false;
    placeHolder.setAttribute('src',source);
    var title = whichPic.title ? whichPic.title : "";
    var description = document.getElementById('description');
    description.firstChild.nodeValue = title;
    return true;

};
function countBodyChildren(){
    var body = document.getElementsByTagName('body')[0];
    alert(body.childNodes.length);
    alert(body.nodeType)

}
addLoadEvent(prepareGallary);