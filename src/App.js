import "./App.css";
import Card from "./components/card/Card.js";

function App() {
  return (
    <div>
      {/* Row 1 */}
      <Card
        container
        marginBottom="20px"
        justifyContent="space-between"
        color="#FFF"
        textAlign="center"
      >
        <Card width="100%" height="100px" backgroundColor="red">
          <h3>Box One</h3>
        </Card>
        <Card width="100%" height="100px" backgroundColor="blue">
          <h3>Box Two</h3>
        </Card>
        <Card width="100%" height="100px" backgroundColor="red">
          <h3>Box Three</h3>
        </Card>
      </Card>

      {/* Row 2 */}
      <Card
        container
        marginBottom="20px"
        justifyContent="space-between"
        color="#FFF"
        textAlign="center"
      >
        <Card width="40%" height="100px" backgroundColor="red">
          <h3>Box One</h3>
        </Card>
        <Card width="20%" height="100px" backgroundColor="blue">
          <h3>Box Two</h3>
        </Card>
        <Card width="40%" height="100px" backgroundColor="red">
          <h3>Box Three</h3>
        </Card>
      </Card>
      {/* Row 3 */}
      <Card
        container
        marginBottom="20px"
        justifyContent="space-between"
        color="#FFF"
        textAlign="center"
      >
        <Card width="46%" height="100px" backgroundColor="red">
          <h3>Box One</h3>
        </Card>
        <Card width="8%" height="100px" backgroundColor="blue">
          <h3>Box Two</h3>
        </Card>
        <Card width="46%" height="100px" backgroundColor="red">
          <h3>Box Three</h3>
        </Card>
      </Card>
    </div>
  );
}

export default App;
