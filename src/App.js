import "./App.css";
import Editor from "./components/Editor";
import componentsConfig from "./editor/config/componentsConfig";
function App() {
  return (
      <Editor componentsConfig={componentsConfig} />
  );
}

export default App;
