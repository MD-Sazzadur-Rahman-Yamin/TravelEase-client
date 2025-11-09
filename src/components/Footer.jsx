import React from "react";

const Footer = () => {
  return (
    <footer className="p-6 text-center bg-base-200 text-base-content">
      <div className="mb-2">
        <h2 className="text-xl font-bold">TravelEase</h2>
      </div>
      <p className="text-sm mb-3">
        &copy; {new Date().getFullYear()} TravelEase. All rights reserved.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
