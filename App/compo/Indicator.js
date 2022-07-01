import React from "react";
import LottieView from "lottie-react-native";

function Indicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay={true}
      loop={true}
      source={require("../assets/animations/loaderstraight.json")}
    />
  );
}

export default Indicator;
