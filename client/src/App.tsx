import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import HomeEn from "@/pages/HomeEn";
import EventiArchivio from "@/pages/EventiArchivio";
import EventDetails from "@/pages/EventDetails";
import { useState, useEffect } from "react";

// Create a hash-based location hook for wouter
function useHashLocation() {
  const [location, setLocation] = useState(
    window.location.hash.replace("#", "") || "/"
  );

  useEffect(() => {
    // Handle hash change events
    const handleHashChange = () => {
      const path = window.location.hash.replace("#", "") || "/";
      setLocation(path);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Replace URL hash without full page reload
  const navigate = (to: string): void => {
    window.location.hash = to;
  };

  return [location, (to: string) => navigate(to)] as [string, (path: string, ...args: any[]) => void];
}

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/en" component={HomeEn} />
        <Route path="/archivio-eventi" component={EventiArchivio} />
        <Route path="/evento/:id" component={EventDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
