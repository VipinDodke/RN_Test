import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, TouchableOpacity, Image, View, Text} from 'react-native';
import {footerMenu} from './constData';

export default function FooterMenu() {
  const {width, height} = Dimensions.get('screen');
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: width - 20,
        height: parseInt(height / 12),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      {footerMenu?.map(menu => {
        return (
          <View
            key={menu.key + ''}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              paddingHorizontal: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(menu.screen);
              }}
              style={{
                height: '50%',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Image source={menu.image} style={{width: 40, height: 40}} />
              <Text
                style={{
                  fontSize: 10,
                  lineHeight: 12,
                  fontWeight: '600',
                  textAlign: 'center',
                  letterSpacing: -0.24,
                  fontStyle: 'normal',
                  fontFamily: 'Montserrat-VariableFont_wght',
                }}>
                {menu.name}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
