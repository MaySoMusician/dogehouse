/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, fontFamily } from "../constants/GlobalStyles";

export const SchedulePage: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text
        style={{
          alignSelf: "center",
          fontFamily: fontFamily.extraBold,
          color: colors.text,
        }}
      >
        Schedule Page
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.primary900,
  },
});
