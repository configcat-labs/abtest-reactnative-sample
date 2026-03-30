import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerTitle}>Train your dog, the easy way!</Text>
      <Text style={styles.bannerDescription}>
        Learn how to train and teach your dog new tricks from our world-renowned dog trainer,
        <Text style={styles.bannerLink}> Jim Haverman</Text>.
      </Text>
  </View>
  );
}

const styles = StyleSheet.create({

  banner: {
    flex: 1,
    padding: '5%',
  },

  bannerTitle: {
    fontSize: 48,
    lineHeight: 52,
    color: '#ff7e6d',
    fontFamily: 'Hahmlet-Bold'
  },
  
  bannerDescription: {
    fontSize: 20,
    lineHeight: 30,
    color: '#3e3f38',
    fontFamily: 'AndadaPro-Regular'
  },

  bannerLink: {
    fontWeight: 'bold',
    color: '#0693e3',
  }
})

export default Banner;