import {View, StyleSheet} from 'react-native';
import React from 'react';
import Header from './Header';
import FooterMenu from './Footermenu';

export default function ScreenLayour({children, ...rest}) {
  return (
    <View style={styles.container}>
      {Boolean(!rest.hideHeader) && <Header {...rest} />}
      <View style={styles.mainContainer}>{children}</View>
      {!rest.hideFooter && <FooterMenu {...rest} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
