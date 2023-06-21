import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>My Blog</a>
        </Link>
        <Link href="/admin">
          <a>Admin</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
