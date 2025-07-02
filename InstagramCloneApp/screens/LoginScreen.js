import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from '../assets/golden';
  
export default function LoginScreen({ navigation }) {
  const { setIsLoggedIn } = useContext(AuthContext);
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
          style={styles.loginInput}
          placeholder="Phone number, username or email"
          placeholderTextColor="#aaa"
        />
        {/* Password Input */}
        <TextInput
          style={styles.loginInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
         onPress={() => {
        setIsLoggedIn(true); // ✅ This will trigger AppStack
      }} 
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
       
      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Facebook Login */}
      <TouchableOpacity style={styles.fbLogin}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
          }}
          style={styles.fbIcon} 
        />
        <Text style={styles.fbText}>Log in with Facebook</Text>
      </TouchableOpacity>

      {/* Signup Redirect */}
      <View style={styles.signupContainer}>
        <Text style={{ color: '#444' }}>Don't have an account? </Text>
        <TouchableOpacity onPress={() =>{console.log("Going to Signup screen"); navigation.navigate('Signup')}}>
          <Text style={{ color: '#1e90ff', fontWeight: 'bold' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
