import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {ButtonSolid} from 'react-native-ui-buttons';

// Import Amplitude
import {ampli} from '../src/ampli';

const Signup = () => {

  function handleSignup() {
    ampli.userSignup();
  }

  return (
    <View style={styles.signupSection}>
      <View style={styles.signupCard}>
        <TextInput style={styles.emailInput} placeholder='Your E-mail'></TextInput>
        <ButtonSolid onPress={handleSignup} textStyle={styles.signupButtonText} style={styles.signupButton} title="Let's go now !" />
        {/* <ButtonSolid onPress={handleSignup} textStyle={styles.signupButtonText} style={styles.signupButton} title="Free access !" /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  signupSection: {
    flex: 1,
    padding: '5%',
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
  }


})

export default Signup;