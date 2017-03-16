window.onload = function(){
    var box = document.getElementById("box");
    box.onmouseover = function(){
        this.className = "cu";
    }
    box.onmouseout = function(){
        this.className = "box";
    }
}