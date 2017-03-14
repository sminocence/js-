window.onload = function(){
    //这是我想的方法，可是都没有成功
    // changeColor = function(elem,attr,value){
    //     elem.style[attr] = value;
    // };
    // var bu = document.getElementById("bu");
    // //获取button这个div下的所有input标签
    // var buts = bu.getElementsByTagName("input");
    // //用一个数组将这些body会用到的属性值一并储存起来
    // var colors = ['"red"','"green"','"blue"'];
    // //用一个for循环来遍历这些input元素
    // var len = buts.length;
    // for(var i=0;i<len;i++){
    //     buts[i].onclick = function(){
    //         // document.getElementsByTagName("body")[0].style.background=colors[this.index];
    //         changeColor(document.getElementsByTagName("body")[0],"background",colors[this.index]);
    //     }
    // }
    //下面是在网上找的例子
    //先取得link外链css的标签
    var oLink = document.getElementsByTagName("link")[0];
    //取得button这个div下面的所有input元素
    var bu = document.getElementById("bu");
    var buts = bu.getElementsByTagName("input");
    //为buts数组里面的每个input标签添加onclick事件
    for(var i=0;i<buts.length;i++){
        buts[i].onclick = function(){
            for(var p in buts) buts[p].className = "";
                console.log(i);
            oLink['href'] = "css/"+this.id + ".css";
        }
    }

}