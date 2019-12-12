import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('./leaf-orange.png'),
    iconRetinaUrl: require('./leaf-orange.png'),
    iconSize: new L.Point(35, 45),

});

export { iconPerson };
