import { NavigatorScreenParams } from "@react-navigation/native";
import { SocialUser } from "../src/__generated__/graphql";

export type AuthStackParamList = {
  SignInStack: NavigatorScreenParams<SignInParamList>;
  SignUpStack: NavigatorScreenParams<SignUpParamList>;
};

type SuccessPage = {
  navigateTo: keyof SignInParamList | keyof SignUpParamList;
  successMessage: string;
  buttonTitle: string;
};

export type SignInParamList = {
  SignInPage: undefined;
  OtpPage: undefined;
  ForgotPasswordPage: undefined;
  ResetPasswordPage: undefined;
  SuccessPage: SuccessPage;
};

export type SignUpParamList = {
  SignUpPage: SocialUser;
  BioPage: undefined;
  UploadImagePage: undefined;
  SetLocationPage: undefined;
  OtpPage: undefined;
  SuccessPage: SuccessPage;
};

export type MainPageParamList = {
  HomeStack: undefined;
  ProfileStack: undefined;
  CartStack: undefined;
  ChatStack: undefined;
};

export type HomePageParamList = {
  HomePage: undefined;
  RestrauntPage: undefined;
  MenuPage: undefined;
  FilterPage: undefined;
  NotificationPage: undefined;
  RatingPage: undefined;
  VoucherPage: undefined;
  RestrauntDetail: undefined;
  ProductDetail: undefined;
};

export type ChatPageParamList = {
  AllChatsPage: undefined;
  SingleChatPage: undefined;
  CallPage: undefined;
};
