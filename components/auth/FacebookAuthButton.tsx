import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/theme";

const FacebookAuthButton = () => {
  return (
    <TouchableOpacity style={styles.facebookButton}>
      <Ionicons name="logo-facebook" size={18} color={"#000"} />
      <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
    </TouchableOpacity>
  );
};

export default FacebookAuthButton;

const styles = StyleSheet.create({
  facebookButton: {
    backgroundColor: Colors.light,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  facebookButtonText: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: "600",
  },
});
