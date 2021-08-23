import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import Home from "./components/pages/pages/home/Home";
import './styles/css/styles.css';
import 'firebase/storage';
import ProjectsPage from "./components/pages/pages/projects/ProjectsPage";
import AboutPage from "./components/pages/pages/about/AboutPage";
import ContactPage from "./components/pages/pages/contact/ContactPage";
import ProjectPage from "./components/pages/pages/project/ProjectPage";

function App() {

  

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/contact" render={() => <ContactPage />} />
          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/projects/:slug" render={() => <ProjectPage />} />
          <Route path="/projects" render={() => <ProjectsPage />} />
          <Route path="/" render={() => <Home />}/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
