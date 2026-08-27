import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The pre-Next.js static site served real .html files at these paths (menu.html,
  // historia.html, sucursales.html, index.html). Anything still pointing at those
  // URLs — a social bio link, a bookmark, an indexed search result — would 404
  // without these redirects to the new clean routes.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/menu.html", destination: "/menu", permanent: true },
      { source: "/historia.html", destination: "/historia", permanent: true },
      { source: "/sucursales.html", destination: "/sucursales", permanent: true },
    ];
  },
};

export default nextConfig;
