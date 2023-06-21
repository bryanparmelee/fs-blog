import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>This is the header.</header>

      <main>{children}</main>
      <footer>&copy; 2023 Bryan Parmelee</footer>
    </div>
  );
};

export default Layout;
