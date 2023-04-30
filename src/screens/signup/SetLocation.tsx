import React from "react";

//React native
import { Text, TouchableOpacity, View } from "react-native";

//Expo
import * as Location from "expo-location";

//Components
import SignUpLayout from "../../components/layout/SignUpLayout";

//Custom Hooks
import useToast from "../../hooks/useToast";

//Types
import type { SignUpParamList } from "../../../types/navigator";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

//Svgs
import LocationIcon from "../../../assets/svg/LocationIcon";
import { useSignUpContext } from "../../context/SignUpContextProvider";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

type Props = NativeStackScreenProps<SignUpParamList, "SetLocationPage">;

const SetLocation: React.FC<Props> = ({ navigation }) => {
  const { showToast } = useToast();
  const { setSignUpState, signUpState } = useSignUpContext();

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        showToast({
          message: "Permission to access location was denied",
          type: "error",
        });
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setSignUpState((currentValue) => ({
        ...currentValue,
        location,
      }));
    } catch (error) {
      showToast({
        message: error.message,
        type: "error",
      });
      return;
    }
  };

  return (
    <SignUpLayout
      nextPage="Verify OTP"
      heading="Set Your Location "
      info="This data will be displayed in your account profile for security"
      onPressPrev={() => navigation.goBack()}
      onPressNext={() => navigation.navigate("OtpPage")}
      className="flex-1 flex items-start justify-between py-4"
    >
      <View className="flex space-y-6 w-full">
        <View className="flex flex-row items-center gap-2">
          <LocationIcon />
          <Text className="text-xl font-bold dark:text-white">
            Your Location
          </Text>
        </View>

        <TouchableOpacity
          onPress={getLocation}
          className="w-full py-4 rounded-md bg-[#F6F6F6]"
        >
          <Text className="text-center text-lg font-semibold">
            Set Location
          </Text>
        </TouchableOpacity>

        <MapView provider={PROVIDER_GOOGLE} showsUserLocation loadingEnabled className="w-full h-96">
          {signUpState.location && (
            <Marker
              coordinate={{
                latitude: signUpState.location?.coords.latitude,
                longitude: signUpState.location?.coords.longitude,
              }}
            />
          )}
        </MapView>
      </View>
    </SignUpLayout>
  );
};

export default SetLocation;
