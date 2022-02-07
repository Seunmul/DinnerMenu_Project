import { setMarker } from "./MapSetting";

const addPolygonEvent = (polygon, List, Map, index) => {
  const curGate = ("polygon"+(index+1)).toString();
  let newList = List.filter((restaurant) =>
    restaurant.gate === curGate
  )
  console.log(curGate+"의 현재 마커 array : ");
  console.log(newList);
  console.log(curGate+"의 clicked 상태 : "+polygon.clicked);

  polygon.markers=[...setMarker(Map, newList)]; 
  // polygon.markers에 마커정보 저장 
  // 해당 폴리곤에 마커정보를 저장하고 visible 특성을 조절하는 방법
  // setMarker안에 setMarkerEvent함수가 전역개체를 참조하고 있어 이벤트 설정 시 문제가 생기는 부분이 존재
  // infowindow역시 폴리곤 영역이 클릭 해제되었을 때 그대로 남아있게 됨 =>버그수정 필요.
  console.log(polygon.markers);
  polygon.markers.forEach((marker) => {
    marker.setVisible(false);
  })
  window.naver.maps.Event.addListener(polygon, 'click', function (e) {
    if (polygon.clicked) {
      //Map.setCenter(polygon.position);
      polygon.clicked = false
      polygon.markers.forEach((marker) => {
        marker.setVisible(true);
      })  
      console.log(curGate+"의 clicked 상태 : "+polygon.clicked)
    } else {
      polygon.clicked = true
      console.log(curGate+"의 clicked 상태 : "+polygon.clicked)
      polygon.markers.forEach((marker) => {
        marker.setVisible(false);
      })
    }
    
  })
  
}

const addPolygon = (map,List) => {
  let polygon_set= [
    polygon1,
    polygon2,
    polygon3,
  ];
  polygon_set.forEach((polygon,index)=>{
    //console.log(polygon);
    polygon.map=map;    
    addPolygonEvent(new window.naver.maps.Polygon(polygon),List,map,index);
  });
}

export { addPolygon, addPolygonEvent };

const polygon1 = {
  //map: map,
  clicked: true,
  position: new window.naver.maps.LatLng(35.887942739833925, 128.6033216174084),
  zoomLevel: 17,
  paths: [
    [
      new window.naver.maps.LatLng(35.88950206238851, 128.60386490821838),
      new window.naver.maps.LatLng(35.8891934973318, 128.60336065292358),
      new window.naver.maps.LatLng(35.88793749476296, 128.6020463705063),
      new window.naver.maps.LatLng(35.88633812701632, 128.6024808883667),
      new window.naver.maps.LatLng(35.886755356499236, 128.6034893989563),
      new window.naver.maps.LatLng(35.88734642783699, 128.60443353652954),
      new window.naver.maps.LatLng(35.888438530126905, 128.60389645725368),
      new window.naver.maps.LatLng(35.88950206238851, 128.60386490821838)
    ]
  ],
  fillColor: '#ff0000',
  fillOpacity: 0.3,
  strokeColor: '#ff0000',
  strokeOpacity: 0.6,
  strokeWeight: 3,
  clickable: true
};
const polygon2 = {
 // map: map,
  clicked: true,
  position: new window.naver.maps.LatLng(35.885708831482084, 128.6051079686116),
  zoomLevel: 17,

  markers: [],
  infoWindows: [],
  paths: [
    [
      new window.naver.maps.LatLng(35.88734642783699, 128.60443353652954),
      new window.naver.maps.LatLng(35.886755356499236, 128.6034893989563),
      new window.naver.maps.LatLng(35.88633812701632, 128.6024808883667),
      new window.naver.maps.LatLng(35.88627728086641, 128.60247015953064),
      new window.naver.maps.LatLng(35.88502123204247, 128.60455691814423),
      new window.naver.maps.LatLng(35.885925241509845, 128.60535621643066),
      new window.naver.maps.LatLng(35.88663366479379, 128.60559225082397),
      new window.naver.maps.LatLng(35.88671189519732, 128.60487341880798),
    ]
  ],
  fillColor: '#ff0000',
  fillOpacity: 0.3,
  strokeColor: '#ff0000',
  strokeOpacity: 0.6,
  strokeWeight: 3,
  clickable: true
};
const polygon3= {
   // map: map,
   clicked: true,
   position: new window.naver.maps.LatLng(35.893778389499694,128.60836029052732),
   zoomLevel: 17,
 
   markers: [],
   infoWindows: [],
   paths: [
     [
      new window.naver.maps.LatLng(35.89534284170994,128.6122012138366),
      new window.naver.maps.LatLng(35.89551666782492,128.61187934875488),
      new window.naver.maps.LatLng(35.89565572844209,128.6061930656433),
      new window.naver.maps.LatLng(35.89548190263246,128.60589265823364),
      new window.naver.maps.LatLng(35.89487350929305,128.60593557357788),
      new window.naver.maps.LatLng(35.89490827475267,128.60512018203735),
      new window.naver.maps.LatLng(35.890371253267055,128.6051845550537),
      new window.naver.maps.LatLng(35.89238773935897,128.60919713974),
      new window.naver.maps.LatLng(35.89370451182534,128.61060798168182),
      new window.naver.maps.LatLng(35.895242891521,128.6122977733612),
      new window.naver.maps.LatLng(35.89534284170994,128.61220121383667)
    ]
  ],
   fillColor: '#ff0000',
   fillOpacity: 0.3,
   strokeColor: '#ff0000',
   strokeOpacity: 0.6,
   strokeWeight: 3,
   clickable: true
}
