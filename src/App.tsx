import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { ProfileProvider } from "./contexts/ProfileContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import MainApp from "./components/MainApp";

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <ProfileProvider>
          <MainApp />
        </ProfileProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
