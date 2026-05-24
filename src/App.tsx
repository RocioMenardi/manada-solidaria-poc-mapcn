import { Map, MapControls } from "@/components/ui/map";

function App() {
  return (
    <div className="h-screen p-4">
      <Map center={[-63.24, -32.407]} zoom={12}>
        <MapControls />
      </Map>
    </div>
  );
}

export default App;
