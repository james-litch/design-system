import { Button } from "design-system";
import { IconCheck } from "design-system/icons";

function App() {
  return (
    <>
      <main className="content-grid py-lg">
        <div className="space-y-lg">
          <h1 className="text-green-800 text-fl-2">Scan.com - Design System</h1>
          <Button kind="pink">
            Components loading
            <IconCheck height={20} width={20} />
          </Button>
        </div>
      </main>
    </>
  );
}

export default App;
