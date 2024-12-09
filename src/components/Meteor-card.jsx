export default function MeteorCard({ currentMeteor }) {
  return (
    <li>
      <h3>{currentMeteor.name}</h3>
      <p>Class: {currentMeteor.recclass}</p>
      <p>Mass: {currentMeteor.mass ? `${currentMeteor.mass}g` : "Unknown"}</p>
      {/* <p>Fall: {currentMeteor.fall}</p> */}
      <p>Latitude: {currentMeteor.geolocation?.latitude || "Unknown"}</p>
      <p>Longitude: {currentMeteor.geolocation?.longitude || "Unknown"}</p>
    </li>
  );
}
