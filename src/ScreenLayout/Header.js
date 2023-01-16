import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Header({config, title}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        // justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 60,
        width: config.width,
      }}>
      {/* <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Text style={{fontSize: 20, lineHeight: 21}}>Back</Text>
      </TouchableOpacity> */}
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          position: 'absolute',
        }}>
        <Text style={{fontSize: 20, lineHeight: 21}}>{title}</Text>
      </View>
    </View>
  );
}
