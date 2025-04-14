import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const AddressMap = () => {
  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position}>
        <Popup>A pretty popup. Easily customizable.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default AddressMap;
