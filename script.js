// 初始化地图
const map = L.map('map').setView([28.2282, 112.9388], 13); // 设置地图中心为长沙市

// 加载地图图层
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// 旅游景点数据
const spots = [
  {
    name: "五一广场",
    lat: 28.2278,
    lon: 112.9381,
    description: "五一广场是长沙市的商业和文化中心，历史悠久。",
    openingHours: "08:00 - 22:00",
    image: "img/wuyi_square.jpg"
  },
  {
    name: "岳麓山",
    lat: 28.2293,
    lon: 112.9396,
    description: "岳麓山是长沙的名胜之一，以自然景观和文化景点闻名。",
    openingHours: "全天开放",
    image: "img/yuelu_mountain.jpg"
  },
  // 添加其他景点
];

// 在地图上标记景点
spots.forEach(spot => {
  const marker = L.marker([spot.lat, spot.lon]).addTo(map);
  marker.bindPopup(`<b>${spot.name}</b><br>${spot.description}`);
  marker.on('click', () => {
    showSpotDetails(spot);
  });
});

// 展示景点详情
function showSpotDetails(spot) {
  const detailsDiv = document.getElementById("spot-details");
  detailsDiv.innerHTML = `
    <h3>${spot.name}</h3>
    <img src="${spot.image}" alt="${spot.name}" style="width: 100%; height: auto; margin-bottom: 10px;" />
    <p><strong>开放时间：</strong>${spot.openingHours}</p>
    <p><strong>简介：</strong>${spot.description}</p>
  `;
}
