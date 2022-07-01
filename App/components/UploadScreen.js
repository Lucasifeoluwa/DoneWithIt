import React from "react";
import { View, StyleSheet, Modal, Button } from "react-native";
import AppText from "../compo/AppText";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import Colors from "../config/Colors";
import AppButton from "../compo/AppButton";

function UploadScreen({ onDone, progress = 0, visible }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={Colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;

/* 
     {progress < 1 ? (
          <Progress.Bar
            color={Colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay  
            loop={false}
            onAnimationFinish={on}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
*/
