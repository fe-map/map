import React from 'react';
import './App.css';
import MapContainer from './MapContainer';



class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {

      }
   }

   render() {
      const numMaps = 1;

      const center = [37.043607, 37.313436];
      const zoom = 16;
      const style = {
         grid: `repeat(${Math.sqrt(numMaps)}, 1fr) / repeat(${Math.sqrt(numMaps)}, 1fr)`
      }
      return (
         <div
            className="container"
            style={style}
         >
            {
                     <div >
                        <MapContainer
                           center={center}
                           zoom={zoom}
                        />
                     </div>
            }

         </div>

      );
   }
}

export default App;
