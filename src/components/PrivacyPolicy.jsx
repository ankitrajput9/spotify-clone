import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

        <p className="text-gray-300 mb-4">
          This website is a demo project created for educational and learning
          purposes only.
        </p>

        <p className="text-gray-300 mb-4">
          We do not collect, store, or share any personal information such as
          names, emails, passwords, or payment details.
        </p>

        <p className="text-gray-300 mb-4">
          All music, images, and media used in this project are for demonstration
          purposes only and do not represent ownership or commercial use.
        </p>

        <p className="text-gray-300 mb-4">
          By using this website, you acknowledge that this project is not an
          official Spotify product and is not affiliated with Spotify in any
          way.
        </p>

        <p className="text-gray-400 mt-10 text-sm">
          If you have any questions, feel free to contact the developer.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
