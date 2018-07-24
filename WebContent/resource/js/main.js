/**
 * Created by zwlong on 2018/2/7.
 */
function initialize() {
    var map = new BMap.Map('container');
    map.centerAndZoom(new BMap.Point(113.30, 23.30), 11);

    window.setTimeout(function(){
        map.panTo(new BMap.Point(113.30,23.20),11);//panTo()方法将让地图平滑移动至新中心点，如果移动距离超过了当前地图区域大小，则地图会直跳到该点。
    }, 2000);

    map.enableScrollWheelZoom(true);//开启鼠标滚轮缩放

    var opts = {type: BMAP_NAVIGATION_CONTROL_SMALL}
    map.addControl(new BMap.NavigationControl(opts));//添加控件
    map.addControl(new BMap.MapTypeControl());//地图类型

    var point = new BMap.Point(113.30,23.20);
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point);        // 创建标注
    map.addOverlay(marker);                     // 将标注添加到地图中

    //添加信息框
    // var opts = {
    //     width : 200,     // 信息窗口宽度
    //     height: 100,     // 信息窗口高度
    //     title : "海底捞王府井店" , // 信息窗口标题
    //     enableMessage:true,//设置允许信息窗发送短息
    //     message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
    // }
    var opts ="<h4 style='margin:0 0 5px 0;padding:0.2em 0'>天安门</h4>" +
        "<img style='float:right;margin:4px' id='imgDemo' src='http://e.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059099ccd5a2334349b023bbae5.jpg' width='139' height='104' title='天安门'/>" +
        "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p>" +
        "</div>";
    // var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);  // 创建信息窗口对象
    var infoWindow = new BMap.InfoWindow( opts);  // 创建信息窗口对象

    marker.addEventListener("mouseover", function(){
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    });
    marker.addEventListener("mouseout", function(){
        map.closeInfoWindow(infoWindow,point); //开启信息窗口
    });
}

function loadScript() {
    var script = document.createElement("script");
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=lKSHQkUVGuokC1hVVwqUfpq2UGX8d1bH&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;


