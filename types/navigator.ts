export type AuthStackParamList = {
  SignInStack: undefined;
  SignUpStack: undefined;
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

type BioPage = {
  username: string;
  email: string;
  password: string;
  keepSignedIn: boolean;
  emailForAds: boolean;
};

type UploadImagePage = {
  firstName: string;
  lastName: string;
  mobileNumber: string;
};

export type SignUpParamList = {
  SignUpPage: undefined;
  BioPage: BioPage;
  UploadImagePage: UploadImagePage & BioPage;
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
