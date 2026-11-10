import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const ConfirmEmail = () => {
  return (
    <>
      <Header />
      <p className="mx-auto my-16 max-w-md rounded-xl border border-blue-100 bg-blue-50 px-6 py-5 text-center text-sm font-medium text-blue-800 shadow-sm">
        Check your inbox to confirm your email address.
      </p>
      <Footer />
    </>
  );
};

export default ConfirmEmail;
