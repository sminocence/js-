window.onload = function(){
    //下面的代码是我自己写的
    //首先：给每个button添加点击事件
    //1.取得每个按钮元素
    // var width = document.getElementById("width");
    // var height = document.getElementById("height");
    // var color = document.getElementById("color");
    // var hidden = document.getElementById("hidden");
    // var reset = document.getElementById("reset");
    // var box = document.getElementById("box");
    // width.onclick=function(){
    //     box.style.width = "150px";
    // }
    // height.onclick=function(){
    //     box.style.height = "200px";
    // }
    // color.onclick = function(){
    //     box.style.background = "#1173CA";
    // }
    // hidden.onclick = function(){
    //     box.style.display = "none";
    // }
    // reset.onclick = function(){
    //     box.style.display = "block";
    //     box.style.width = "100px";
    //     box.style.height = "100px";
    //     box.style.background= "black";
    // }

    //下面是我在网上找的资源，写的代码
    //统一设置一个函数，供所有点击事件使用
    var changeStyle = function(elem,attr,value){
        elem.style[attr] = value
    };
    var oBtn = document.getElementsByTagName("input");//取得所有input标签元素
    var oDiv = document.getElementById("box");//取得box这个div
    var oAtt = ["width","height","background","display","display"];//将要设置的每一个属性都存在一个数组里面
    var oVal = ["200px","200px","red","none","block"];//将每个属性的值都存在一个数组里面
    //用一个循环，来遍历每个input元素，然后为它添加点击事件
    for(var i=0;i<oBtn.length;i++){
        oBtn[i].index = i;//z这里为什么要多一步赋值呢？因为没有这一句，打印出来的i都是5.原因是因为js中闭包，函数作用域的问题，js没有块级作用域
        oBtn[i].onclick = function(){
            this.index == oBtn.length-1 && (oDiv.style.cssText = "");//这里相当于if(this.index == oBtn.length-1){oDiv.style.cssText = "";},cssText设置为空主要是为了实现重置按钮的效果
            changeStyle(oDiv,oAtt[this.index],oVal[this.index])
        }//这里绑定的回调函数是匿名函数，不会执行，但是当事件发生调用函数时，循环已经结束了，所以拿到的是最后的值。
    }
}