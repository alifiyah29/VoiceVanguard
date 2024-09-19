import React, { useContext } from "react";
import SpeakerMenu from "./SpeakerMenu";
import SpeakersList from "./SpeakersList";
import { ThemeContext } from "../context/ThemeContext";
import { SpeakersDataProvider } from "../context/SpeakersDataContext";

function Speakers() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      
      <SpeakerMenu />
      <div className="container">
        <div className="row g-4">
          <SpeakersDataProvider>
            <SpeakersList />
          </SpeakersDataProvider>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
