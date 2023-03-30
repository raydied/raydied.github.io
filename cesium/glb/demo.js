// 地图属性参数（当前示例框架中自动处理合并）
var mapOptions = {
  basemaps: [{ name: "天地图", type: "tdt", layer: "img_d", show: true }],
  scene: {
    center: {
      lat: 37.450335,
      lng: 121.463176,
      alt: 356.8,
      heading: 293.7,
      pitch: -33.9,
    },
  },
};

// mars3d.Map三维地图对象
var map = new mars3d.Map("mars3dContainer", mapOptions);
var arrData = [
  { name: "健康驿站", position: [121.457783, 37.452401, 25] },
  { name: "同仁路", position: [121.458894, 37.453235, 0] },
];

/*
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
(function onMounted() {
  //   map = mapInstance; // 记录map

  map.fixedLight = true; // 固定光照，避免gltf模型随时间存在亮度不一致。

  //旋转
  rotatePoint = new mars3d.thing.RotatePoint({
    direction: false, // 方向 true逆时针，false顺时针
    time: 50, // 给定飞行一周所需时间(单位 秒)，控制速度
    // autoStopAngle: 360, //到达指定角度后自动停止
  });
  map.addThing(rotatePoint);

  // 开启旋转
  rotatePoint.start();

  // 创建矢量数据图层
  var graphicLayer = new mars3d.layer.GraphicLayer();
  map.addLayer(graphicLayer);
  addDemoGraphic1(graphicLayer);

  var graphicLayerDiv = new mars3d.layer.GraphicLayer();
  map.addLayer(graphicLayerDiv);
  divGraphicHotSpot(graphicLayerDiv);
})();

/*
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
(function onUnmounted() {
  map = null;
})();

function addDemoGraphic1(graphicLayer) {
  //entity方式
  var graphic = new mars3d.graphic.ModelEntity({
    position: [121.458894, 37.453223, 0],
    style: {
      url: "./model/laishan.gltf",
      heading: 90,
      scale: 1,
      minimumPixelSize: 100,
    },
  });
  graphicLayer.addGraphic(graphic);

  //   //   开始 自旋转效果
  //   graphic.rotateStart({
  //     direction: false, // 控制方向, true逆时针，false顺时针
  //     time: 20, // time：给定飞行一周所需时间(单位 秒)，控制速度
  //   });

  // setTimeout(() => {
  //   graphic.rotateStop()
  // }, 3000)
}

// 效果四
function divGraphicHotSpot(graphicLayerDiv) {
  for (var i = 0; i < arrData.length; i++) {
    var item = arrData[i];

    var divGraphic = new mars3d.graphic.DivGraphic({
      position: item.position,
      style: {
        html: `<div class="mars-spot">
              <div class="mars-spot-board">
              <h5>${item.name}</h5>
              </div>
              <div class="mars-spot-line"></div>
            </div>`,
        offsetY: -60,
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.BTOOM,
      },
    });
    graphicLayerDiv.addGraphic(divGraphic);
  }
}
