module.exports = {
  expo: {
    name: "dinedrop-mobile",
    slug: "dinedrop-mobile",
    version: "1.0.0",
    orientation: "default",
    scheme: "com.dinedrop.mobile",
    icon: "./assets/images/logo.png",
    extra: {
      eas: {
        projectId: "309e8c74-bd93-4057-a7d4-d0bb0aa7c28b",
      },
    },
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
      bundleIdentifier: "com.dinedrop.mobile",
      supportsTablet: true,
    },
    android: {
      package: "com.dinedrop.mobile",
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
