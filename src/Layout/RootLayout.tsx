import { Outlet } from "react-router";
import Header from "../Features/Components/Header";
import Footer from "../Features/Components/Footer";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
