import { setMarker } from "./MapSetting";



const addPolygonEvent = (polygon, List, Map, index) => {
  const curGate = ("polygon"+(index+1)).toString();
  let newList = List.filter((restaurant) =>
    restaurant.gate === curGate
  )
  console.log(newList)
  console.log(curGate+"의 clicked 상태 : "+polygon.clicked)
  window.naver.maps.Event.addListener(polygon, 'click', function () {
    if (polygon.clicked) {
      polygon.clicked = false
      setMarker(Map, newList)
      console.log(curGate+"의 clicked 상태 : "+polygon.clicked)
    } else {
      polygon.clicked = true
      console.log(curGate+"의 clicked 상태 : "+polygon.clicked)
      Map._mapOptions.markers.forEach((marker) => {
        marker.setMap(null);
      })
    }
  })
  
}

const addPolygon = (map,List) => {
  let polygon_set= [
    polygon1,
    polygon2
  ];
  polygon_set.forEach((polygon,index)=>{
    polygon.map=map;    
    addPolygonEvent(new window.naver.maps.Polygon(polygon),List,map,index);
  });
}

export { addPolygon, addPolygonEvent };

const polygon1 = {
  //map: map,
  clicked: true,
  position: [35.887942739833925, 128.6033216174084],
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
  position: [35.885708831482084, 128.6051079686116],
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
