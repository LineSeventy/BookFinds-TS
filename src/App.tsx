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

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Unable to sign out:", error);
    }
  };

  if (isAuthLoading) {
    return <p>Loading...</p>;
  }

  return <Layout />;
}

export default App;
