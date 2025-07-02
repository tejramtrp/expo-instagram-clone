import React from 'react';
import { View, TouchableOpacity, Image, } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../assets/golden';
export default function Header() {
  return (
   <View style={styles.notch}>
          <View style={styles.containerLogo}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png',
              }}
              style={{ width: 115, height: 35 }}
            />
          </View>
          <View style={styles.containerRight}>
            <TouchableOpacity>
              {' '}
              <Icon name="heart" type="feather" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.heartIcon}></View>
            <TouchableOpacity>
              <Icon name="send" type="feather" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
  );
}