module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.ctfassets.net",
      "images.unsplash.com",
      "www.hyperui.dev",
      "downloads.ctfassets.net",
    ],
  },
  i18n: {
    locales: ["hr", "en"],
    defaultLocale: "hr",
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://app.contentful.com",
        permanent: false,
      },
    ];
  },
};
