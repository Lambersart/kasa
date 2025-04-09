import { NavLink } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import logements from "../logements.json";
import Card from "../components/Card";
import BackgroundImage from "/Mask-GroupChezVous.png";

function App() {
      const logementCards = logements.map((logement) => (
            <Card key={logement.id} appart={logement} />
      ));

      return (
            <>
                  <Header />
                  <div>
                        <NavLink to="/logement/c67ab8a7">Details</NavLink>
                  </div>

                  <div
                        style={{
                              backgroundImage: `url(${BackgroundImage})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              height: "223px",
                              width: 1280,
                        }}
                  >
                        <h1 className="chezVous">
                              Chez vous, partout et ailleurs
                        </h1>
                  </div>

                  <NavLink to="/about"></NavLink>
                  <div id="card-grid" className="card-container">
                        {logementCards}
                  </div>
                  <div>
                        <Footer title={"accueil"} />
                  </div>
            </>
      );
}

export default App;
