import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import styles from '../assets/golden';

export default function SplashScreen({ navigation }) {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate logo
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();

    // After 2.5 seconds go to Home/Login
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Or 'Login'
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={splashStyles.splashcontainer}>
        <Animated.Image
          source={require('../assets/instagram-logo.png')}
          style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
          resizeMode="contain"
        />
      </View>
      <View style={splashStyles.ownbyApp}>
        <Text style={splashStyles.fromText}>From</Text>
        <Text style={splashStyles.ownbyAppText}>Facebook</Text>
      </View>
    </View>
  );
}
const splashStyles = StyleSheet.create({
  splashcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ownbyApp: {
    height: 100,
  },
  fromText: {
    textAlign: 'center',
    marginBottom: 5,
  },
  ownbyAppText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
});
