import React from 'react';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, View} from 'react-native';

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
    borderRadius: 5,
  },
});
var styles2 = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
});

export const CustomMaskElement = props => {
  return (
    <View style={{backgroundColor: 'transparent', height: '100%', bottom: 15}}>
      <LinearGradient
        colors={[
          '#FFFFFFFF',
          '#FFFFFFFF',
          '#FFFFFFFF',
          '#FFFFFFFF',
          '#FFFFFFFF',
          '#FFFFFFFF',
          '#FFFFFFFF',
          '#FFFFFF00',
        ]}
        style={styles.linearGradient}></LinearGradient>
    </View>
  );
};

const CustomMaskView = ({element, children}) => {
  return (
    <MaskedView
      style={styles2.container}
      maskElement={element || <CustomMaskElement />}>
      {children}
    </MaskedView>
  );
};

export default CustomMaskView;
