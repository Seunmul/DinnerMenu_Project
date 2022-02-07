import { useEffect } from "react"
import { setMap, resetMap, setMarker } from "./MapSetting.js"
import { addPolygon, addPolygonEvent } from "./Polygon.js"
import { restaurants } from "./Restaurants.js"

function App() {
  useEffect(() => {
    let Map = setMap("Map");

    addPolygon(Map,restaurants);
    
    // setMarker(Map, restaurants)
    return () => { //컴포넌트가 초기화 직전에 콜백함수로 실행.
      console.log("\n--- useEffect_CALLBACK");
      resetMap(Map);
    };

  }, []);

  return (
    <div id="RootArea" style={{
      display: "flex",
      flexDirection: "column",
      margin: "10px",
      alignContent: "center",
      fontFamily: "나눔고딕"
    }}>
      <div id="Title" style={{ textAlign: "center" }}>
        <h1>-  NAVERMAP  -</h1>
      </div>
      <div id="Main" style={{ width: "100vw", display: "flex", flexDirection: "row" }}>
        <div id="Map" style={{ height: "70vh", width: "65vw", marginLeft: "10px", marginRight: "10px" }}>
        </div>
      </div>
    </div>
  )
}

export default App;


