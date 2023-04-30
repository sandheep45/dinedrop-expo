module.exports = {
  expo: {
    name: "dinedrop-mobile",
    slug: "dinedrop-mobile",
    version: "1.0.0",
    orientation: "default",
    scheme: "com.dinedrop.mobile",
    icon: "./assets/images/logo.png",
    plugins: [
      [
        "expo-camera",
        {
          cameraPermission: "Allow $(PRODUCT_NAME) to access your camera.",
        },
      ],
      [
        "expo-image-picker",
        {
          photosPermission:
            "The app accesses your photos to let you share them with your friends.",
        },
      ],
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission:
            "Allow $(PRODUCT_NAME) to use your location.",
        },
      ],
    ],
    extra: {
      googleExpoClientId:
        "716798608893-lr0csd1s7ndb3jdeq57gro6370kd52fv.apps.googleusercontent.com",
      googleAndroidClientId:
        "716798608893-cvf244dc69tmifta7lpuo4saelhniqsm.apps.googleusercontent.com",
      googleIosClientId:
        "716798608893-84fkh9ag62iup2knc9b3p1vtimju9s8a.apps.googleusercontent.com",
      facebookAppId: "667150601837264",
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
