import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { SignupButton } from './SignupButton';

// Import Amplitude
// import {ampli} from '../src/ampli';

const Signup = () => {

  function handleSignup() {
    // ampli.userSignup();
  }

  return (
    <View style={styles.signupSection}>
      <View style={styles.signupCard}>
        <TextInput style={styles.emailInput} placeholder='Your E-mail'></TextInput>
        <SignupButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  signupSection: {
    flex: 1,
    padding: '5%',
    width: '100%'
  },

  signupCard: {
    backgroundColor: 'oldlace',
    padding: 24,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: 'red',
  },

  emailInput: {
    backgroundColor: 'white',
    padding: 6,
  },

  signupButtonText: {
    fontFamily: 'Epilogue-SemiBold',
    fontWeight: '600',
    fontSize: 20,
  }


})

export default Signup;
