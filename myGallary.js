function showPic(whichPic){
    var source = whichPic.getAttribute('href');
    var placeHolder = document.getElementById('placeHolder');
    placeHolder.setAttribute('src',source);
    var title = whichPic.title;
    var description = document.getElementById('description');
    description.firstChild.nodeValue = title;

};
function countBodyChildren(){
    var body = document.getElementsByTagName('body')[0];
    alert(body.childNodes.length);
    alert(body.nodeType)

}
// window.onload = countBodyChildren;