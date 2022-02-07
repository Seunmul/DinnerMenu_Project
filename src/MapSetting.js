//_MAP_SETTING.js
const _MAP_SETTING = (MAP) => {


};

// 디폴트 맵 옵션
const mapOptionsDefault = {
  center: new window.naver.maps.LatLng(35.8905, 128.611),
  zoom: 15,
  markers: [],
  scaleControl: true,
  logoControl: false,
  mapDataControl: false,
  zoomControl: true,
  zoomControlOptions: {
    style: window.naver.maps.ZoomControlStyle.LARGE,
    position: window.naver.maps.Position.TOP_RIGHT,
    legendDisabled: true
  },
  maxZoom: 20,
  minZoom: 5,
  mapTypeControl: true,
  mapTypeControlOptions: {
    style: window.naver.maps.MapTypeControlStyle.BUTTON,
    position: window.naver.maps.Position.TOP_LEFT
  }
};

//디폴트 인포창
const infoWindow = new window.naver.maps.InfoWindow({

});

//맵 이벤트 설정
const setMapEvent = (MAP) => {
  //우클릭시 마커를 생성하는 이벤트 리스너
  // window.naver.maps.Event.addListener(MAP, 'rightclick', (e) => {
  //   console.log("rightclick")
  // })
  // window.naver.maps.Event.addListener(MAP, 'click', function (e) {
  //   console.log("click")
  // });
  // window.naver.maps.Event.addListener(MAP, 'dblclick', function (e) {
  //   console.log("dblclick")
  // });
  // window.naver.maps.Event.addListener(MAP, 'mousemove', function (e) {
  //   //console.log("mousemove")
  // });
  // window.naver.maps.Event.addListener(MAP, 'mouseup', function (e) {
  //   console.log("mouseup")
  // });
  // window.naver.maps.Event.addListener(MAP, 'mousedown', function (e) {
  //   console.log("mousedown")
  // });
};

//맵 설정 _div_name에 div컴포넌트 id 입력 -> 해당 컴포넌트에 map인스턴스 렌더링
const setMap = (div_id) => {
  new window.naver.maps.Map(div_id, mapOptionsDefault);
  //선언 시 window.naver.maps.Map.__instances[0]에 위 window.naver.maps.Map 인스턴스 저장됨
  const MAP = window.naver.maps.Map.__instances[0]
  setMapEvent(MAP);
  return (MAP)
};

const BLUE_ICON = (
  '<img src="data:image/png;base64,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"'
  + ' alt="" '
  + 'style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; '
  + '-webkit-user-select: none; position: absolute; width: 34px; height: 34px; left: 0px; top: 0px;">'
)

const RED_ICON = (
  '<img src="https://img.icons8.com/plasticine/100/000000/marker.png"'
  + 'alt="" '
  + 'style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; '
  + '-webkit-user-select: none; position: absolute; width: 34px; height: 34px; left: 0px; top: 0px;">'
)

//마커 이벤트 설정
const setMarkerEvent = (MAP, marker) => {
  //Info Window default값. 
  //좌표 <-> 주소변환
  function searchCoordinateToAddress(latlng, marker, infoWindow) {
    window.naver.maps.Service.reverseGeocode({
      coords: latlng,
      orders: [
        window.naver.maps.Service.OrderType.ADDR,
        window.naver.maps.Service.OrderType.ROAD_ADDR
      ].join(',')
    }, function (status, response) {
      if (status === window.naver.maps.Service.Status.ERROR) {
        if (!latlng) {
          return alert('ReverseGeocode Error, Please check latlng');
        }
        if (latlng.toString) {
          return alert('ReverseGeocode Error, latlng:' + latlng.toString());
        }
        if (latlng.x && latlng.y) {
          return alert('ReverseGeocode Error, x:' + latlng.x + ', y:' + latlng.y);
        }
        return alert('ReverseGeocode Error, Please check latlng');
      }
      console.log(latlng);
      var address = response.v2.address,
        htmlAddresses = [];

      if (address.jibunAddress !== '') {
        htmlAddresses.push('[지번 주소] ' + address.jibunAddress);
      }

      if (address.roadAddress !== '') {
        htmlAddresses.push('[도로명 주소] ' + address.roadAddress);
      }

      infoWindow.setContent([
        '<div style="padding:10px;min-width:100px;line-height:150%;font-family:나눔고딕;font-size:15px">',
        '<h4 style="margin-top:5px;">검색 좌표</h4>',
        htmlAddresses.join('<br />'),
        '</div>'
      ].join('\n'));

      infoWindow.open(MAP, marker);
    });
  }
  //Info Window click이벤트에 설정
  window.naver.maps.Event.addListener(marker, "click", function (e) {
    console.log("click");
    if (infoWindow.getMap()) {
      infoWindow.close();
    } else {
      searchCoordinateToAddress(e.coord, marker, infoWindow);
    }
  })

  //마커 우클릭 선택 시 활성화/비활성화 이벤트
  window.naver.maps.Event.addListener(marker, 'rightclick', function (e) {
    console.log("rightclick");
    console.log("마커의 색깔을 변경합니다");
    //console.log(e)
    //console.log(e.overlay);
    //console.log(e.overlay._nmarker_id);
    //console.log(index);
    //console.log(marker.getPosition());
    //console.log(marker.icon.content);
    //console.log(marker.getIcon())
    /*마커 현재 상태가 블루이면 레드로, 레드이면 블루로
    -> 추후에 음식점 리스트에서 빼고 더하는 것 까지 구현*/
    if (marker.icon.content === BLUE_ICON) {
      marker.setIcon({
        content: RED_ICON,
        size: new window.naver.maps.Size(34, 34)
      });
      //markers 배열에서 하나 제거
      let index = null;
      MAP._mapOptions.markers.forEach((v, i) => {
        if (marker._nmarker_id === v._nmarker_id)
          index = i;
      })
      const markers = [
        ...MAP._mapOptions.markers.slice(0, index),
        ...MAP._mapOptions.markers.slice(index + 1)
      ];
      MAP._mapOptions.markers = markers;
      console.log("현재 마커 색 : RED");
    } else if (marker.icon.content === RED_ICON) {
      marker.setIcon({
        content: BLUE_ICON,
        size: new window.naver.maps.Size(34, 34)
      });
      MAP._mapOptions.markers.push(marker)
      console.log("현재 마커 색 : BLUE");
    } else {
      console.log("에러 : 해당하는 마커 색이 존재하지 않습니다.");
    }
    console.log(MAP._mapOptions.markers);
  })
}

//마커 설정 -> 지정된 좌표정보를 가지고 맵 인스턴스에 마커로 표시
const setMarker = (Map, List) => {
  let markers = [];
  List.forEach((Data, index) => {
    let marker = new window.naver.maps.Marker({
      position: window.naver.maps.LatLng(Data.latlng[0], Data.latlng[1]),
      map: Map,
      icon: {
        content: BLUE_ICON,
        size: new window.naver.maps.Size(34, 34),
        //anchor: new window.naver.maps.Point(11, 35)
      }
    })
    markers.push(marker);
    setMarkerEvent(Map, marker);
  })
  Map._mapOptions.markers = [...markers];
  console.log(Map._mapOptions.markers);
}

//맵 초기화
const resetMap = (MAP) => {
  console.log("naver_Map 인스턴스 삭제.")
  window.naver.maps.Event.clearInstanceListeners(MAP);// ()안의 대상객체의 이벤트 리스너 모두 제거
  console.log("Listener Ereased");
  MAP.destroy(); //.destroy()함수로 naver_Map 객체 인스턴스  안전하게 제거.-> 대상 객체의 이벤트 인스턴스 역시 제거.
  window.naver.maps.Map.__instances.pop(); // destroy한 객체를 인스턴스 전역변수에서 삭제.
  // alert("새로고침을 눌러주세요!!");
}


export default _MAP_SETTING;
export { setMap, setMarker, resetMap };