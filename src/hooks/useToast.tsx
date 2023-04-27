import Toast from "react-native-root-toast";

interface ToastProps {
  message: string;
  duration?: number;
  type?: "success" | "error" | "warning" | "info";
}

const useToast = () => {
  const typeColors = {
    success: "green",
    error: "red",
    warning: "orange",
    info: "black",
  };
  const showToast = ({ message, duration, type }: ToastProps) => {
    const backgroundColor = typeColors[type] || typeColors.info;
    return Toast.show(message, {
      duration: duration || Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      backgroundColor,
      textColor: "white",
      opacity: 0.8,
    });
  };

  const hideToast = (toast) => {
    if (toast) {
      Toast.hide(toast);
    }
  };

  return { showToast, hideToast };
};

export default useToast;
