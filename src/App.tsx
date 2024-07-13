import { Button } from "design-system";
import { IconCheck } from "design-system/icons";

function App() {
  return (
    <>
      <div>
        <Button kind="pink">
          Components loading
          <IconCheck height={20} width={20} />
        </Button>
      </div>
    </>
  );
}

export default App;
