import { useFeatureFlag } from "configcat-react";
import { Text, StyleSheet, Pressable } from "react-native";

export function SignupButton() {
  const { value: isSignupButtonEnabled } = useFeatureFlag(
    "signupButton",
    false,
  );

  return (
    isSignupButtonEnabled && (
      <Pressable
        style={styles.signupButton}
        onPress={() => {}}
      >
        <Text style={styles.signupButtonText}>Let&apos;s go now !</Text>
      </Pressable>
    )
  );
}

const styles = StyleSheet.create({
  signupButton: {
    marginTop: 24,
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignSelf: 'center',
    borderRadius: 0,
    backgroundColor: '#e24a41',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },

  signupButtonText: {
    fontFamily: 'Epilogue-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    color: 'white'
  }
});
