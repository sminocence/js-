window.onload = function(){
    var button = document.getElementById("sub");//取得提交按钮
    var inputs = document.getElementsByTagName("input");//取得所有的input元素
    //给button这个按钮添加点击事件
    button.onclick = function(){
        for(var i=0;i<inputs.length;i++){
            alert(inputs[i].value);
        }
    }
}