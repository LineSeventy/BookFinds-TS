import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";
import Layout from "./Layout/Layout";
import "./App.css";

function App() {
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      setIsAuthLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (isAuthLoading) {
    return <p>Loading...</p>;
  }

  return <Layout />;
}

export default App;
