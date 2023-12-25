import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";
import { ViteMinifyPlugin } from "vite-plugin-minify";
// const IN_PRODUCTION = process.env.NODE_ENV === "production";

// Hide Preloader while in development.
const hidePreloader = () => {
    return {
      name: "hide-preloader",
      transformIndexHtml(html) {
        return html.replace(
          `<link rel="stylesheet" href="./src/css/preloader.min.css?ver=2.1" type="text/css" media="screen">`,
          `<!-- <link rel="stylesheet" href="./src/css/preloader.min.css?ver=2.1" type="text/css" media="screen"> -->`
        );
      }
  }
}

export default defineConfig({
  plugins: [
    hidePreloader(),
    webfontDownload(
      [
        "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
      ]
      // {
      //   injectAsStyleTag: true,
      //   minifyCss: true,
      //   async: true,
      //   cache: true,
      //   proxy: false,
      // }
    ),
    ViteMinifyPlugin({}),
  ],
  base: "./",
  server: {
    port: 3000,
  },
  build: {
    outDir: "./docs",
  },
});
