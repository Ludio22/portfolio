import { BrowserRouter } from "react-router-dom";
import Header from "./components/pages/Header";
import Preview from "./components/preview-section/Preview";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Preview />
      </div>
    </BrowserRouter>
  );
}

export default App;
