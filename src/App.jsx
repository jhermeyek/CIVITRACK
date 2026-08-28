import { useState } from "react";
import { AppProvider, useApp } from "./context/AppContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";
import Progress from "./pages/Progress";
import Evidences from "./pages/Evidences";
import Validation from "./pages/Validation";
import Reports from "./pages/Reports";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function AppContent() {
  const { user, setUser } = useApp();
  const [activePage, setActivePage] = useState("dashboard");

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  const navigate = (page) => setActivePage(page);

  const renderPage = () => {
    switch (activePage) {
      case "projects":
        return <Projects onSelect={() => navigate("activities")} />;
      case "activities":
        return <Activities />;
      case "progress":
        return <Progress />;
      case "evidences":
        return <Evidences />;
      case "validation":
        return <Validation />;
      case "reports":
        return <Reports />;
      default:
        return <Dashboard onNavigate={navigate} />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={navigate} />
      <div className="main-area">
        <Navbar user={user} onLogout={() => setUser(null)} />
        <main className="content">{renderPage()}</main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}