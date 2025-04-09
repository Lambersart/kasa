import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Accordion from "./components/Accordion.jsx";
import logements from "../logements.json";
import "./App.css";
import "./Detail.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Detail() {
      const { id } = useParams();
      const logement = logements.find((log) => log.id === id);

      const [currentIndex, setCurrentIndex] = useState(0); // index de l'image actuelle

      if (!logement) {
            return (
                  <>
                        <Header />
                        <div className="detail-error">
                              <h2>Logement introuvable</h2>
                              <p>
                                    Désolé, aucun logement ne correspond à cet
                                    identifiant.
                              </p>
                        </div>
                        <Footer title="à propos" />
                  </>
            );
      }

      const pictures = logement.pictures;
      const totalPictures = pictures.length;

      const goToPrevious = () => {
            setCurrentIndex((prevIndex) =>
                  prevIndex === 0 ? totalPictures - 1 : prevIndex - 1
            );
      };

      const goToNext = () => {
            setCurrentIndex((prevIndex) =>
                  prevIndex === totalPictures - 1 ? 0 : prevIndex + 1
            );
      };

      return (
            <>
                  <Header />

                  <div className="detail-container">
                        {/* Galerie d'images avec slider */}
                        <div className="detail-gallery">
                              <div className="image-container">
                                    {totalPictures > 1 && (
                                          <button
                                                className="nav-button left"
                                                onClick={goToPrevious}
                                          >
                                                <ChevronLeft size={32} />
                                          </button>
                                    )}

                                    <img
                                          src={pictures[currentIndex]}
                                          alt={`${logement.title} - image ${
                                                currentIndex + 1
                                          }`}
                                          className="detail-picture"
                                    />

                                    {totalPictures > 1 && (
                                          <button
                                                className="nav-button right"
                                                onClick={goToNext}
                                          >
                                                <ChevronRight size={32} />
                                          </button>
                                    )}

                                    {totalPictures > 1 && (
                                          <div className="counter">
                                                {currentIndex + 1}/
                                                {totalPictures}
                                          </div>
                                    )}
                              </div>

                              <h1>{logement.title}</h1>
                        </div>

                        {/* Accordéons */}
                        <div className="Accordion2">
                              <p>{logement.location}</p>
                              <p>{logement.rating}</p>
                              <p>{logement.tags}</p>
                              <div>{logement.host.picture}</div>
                              <div>{logement.host.name}</div>
                              <Accordion
                                    title="Description"
                                    content={logement.description}
                              />
                              <Accordion
                                    title="Equipements"
                                    content={logement.equipments.join("\n")}
                              />
                        </div>
                  </div>

                  <Footer title="à propos" />
            </>
      );
}

export default Detail;
