import amplitude from "@/services/amplitude-service";
import { IUser, useFeatureFlag } from "configcat-react";
import { Pressable, StyleSheet, Text } from "react-native";

export function SignupButton() {
  // Generate and store a stable anonymous userId for A/B testing.
  let userId = localStorage.getItem("ab_user_id");
  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem("ab_user_id", userId);
  }

  const user: IUser = {
    identifier: userId,
  };

  const { value: isCanShowUpdatedButtonTextEnabled } = useFeatureFlag(
    "canShowUpdatedButtonText",
    false,
    user,
  );

  const buttonText = isCanShowUpdatedButtonTextEnabled
    ? "Free Access !"
    : "Let's go now !";

  const handleSignupButtonClick = (buttonText: string) => {
    // Track a button click with optional properties
    const eventProperties = { buttonText: buttonText };
    amplitude.track("SignupButton Clicked", eventProperties);
  };

  return (
    <Pressable
      style={styles.signupButton}
      onPress={() => handleSignupButtonClick(buttonText)}
    >
      <Text style={styles.signupButtonText}>{buttonText}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  signupButton: {
    marginTop: 24,
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignSelf: "center",
    borderRadius: 0,
    backgroundColor: "#e24a41",
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },

  signupButtonText: {
    fontWeight: "600",
    fontSize: 20,
    color: "white",
  },
});
