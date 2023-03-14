module.exports = {
  expo: {
    name: "dinedrop-mobile",
    slug: "dinedrop-mobile",
    version: "1.0.0",
    orientation: "default",
    icon: "./assets/images/logo.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash-screen.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/logo.png",
        backgroundColor: "#FFFFFF",
      },
      splash: {
        dark: {
          image: "./assets/images/splash-screen-dark.png",
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      },
    },
    web: {
      favicon: "./assets/images/favicon.png",
    },
  },
};
