import React, { useState } from "react";
import languages from "./assets/languages";
import Button from "../Components/Button";
import Card from "../Components/Card";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="container vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1>Learn Web development</h1>
      <div className="btn-container">
        {languages.map((language) => (
          <Button
            key={language.id}
            title={language.title}
            isActive={selectedLanguage.id === language.id}
            onClick={() => setSelectedLanguage(language)}
          />
        ))}
      </div>
      <Card
        title={selectedLanguage.title}
        description={selectedLanguage.description}
      />
    </div>
  );
}

export default App;
