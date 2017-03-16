window.onload = function(){
    var button = document.getElementById("but");
    var divs = document.getElementsByTagName("div");
    button.onclick = function(){
        for(var i=0;i<divs.length;i++){
            divs[i].style.background = "red";
        }
    }
}