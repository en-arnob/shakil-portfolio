import React from "react";
import GitHubButton from "react-github-btn";

function Footer({ github }) {
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-4">
        Made with{" "}
        <span role="img" aria-label="heart">
          💙
        </span>{" "}
        using{" "}
        <span className="text-blue-500 hover:underline" href="/">
          React
        </span>
      </p>
      <p className="text-gray-600 ">© 2024, Shakil Ahmed</p>
      <p className="text-gray-600">📞+880 1329-654810</p>
      <p className="text-gray-600 mb-4">📧hridoyhussainshakil@gmail.com</p>
    </div>
  );
}

export default Footer;
