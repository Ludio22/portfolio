import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import Home from "./components/pages/pages/home/Home";
import './styles/css/styles.css';
import 'firebase/storage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" render={() => <Home />}/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
