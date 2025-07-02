import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from '../assets/golden';
  
export default function SignupScreen({ navigation }) {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const response = await fetch('https://snack.expo.dev/@tejramtrp/instagram-ui-design/users?email=' + email);
    const users = await response.json();

    if (users.length > 0) {
      Alert.alert('User already exists');
    } else {
      await fetch('../db', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      Alert.alert('Signup successful');
      navigation.navigate('Login'); // navigate to login
    }
  };
  return (
    <SafeAreaView style={styles.loginContainer}>
      {/* Instagram Logo */}
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png',
        }}
        style={styles.loginLogo}
        resizeMode="contain"
      />
      
         {/* Email/Username Input */}
        
         <TextInput
          style={styles.loginInput} value={email} onChangeText={setEmail}
          placeholder="Email Address"
          placeholderTextColor="#aaa"
        />
         
        {/* Password Input */}
        <TextInput
          style={styles.loginInput} 
          placeholder="Password"
          placeholderTextColor="#aaa"
           value={password} onChangeText={setPassword} secureTextEntry
        />
        {/* Login Button  onPress={() => navigation.replace('Main')}   */}
        <TouchableOpacity
          style={styles.loginButton}
         onPress={handleSignup} >
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
       
       
      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>
 
      {/* Signup Redirect */}
      <View style={styles.signupContainer}>
        <Text style={{ color: '#444' }}>All ready have an account? </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: '#1e90ff', fontWeight: 'bold' }}>Login In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
