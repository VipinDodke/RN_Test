import {View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import Issue from '../../assets/images/issue.png';
import Time from '../../assets/images/time.png';
// import BG from '../../assets/images/bg.png';

export default function ScoreBoard({config}) {
  return (
    <>
      <View
        style={[
          styles.sectionContainer,
          {height: parseInt(config.height / 6.2)},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#D2BAF5',
                fontFamily: 'Avenir Next',
                lineHeight: 16,
                fontWeight: '600',
              }}>
              UNDER OR OVER
            </Text>
            <Image
              source={Issue}
              resizeMode="cover"
              style={{width: 19, height: 19, bottom: 3, left: 4}}
            />
          </View>
          <View
            style={{
              width: '50%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#B296DC',
                fontFamily: 'Montserrat-VariableFont_wght',
                lineHeight: 16,
                fontWeight: '400',
              }}>
              Starting in
            </Text>
            <View style={{bottom: 2}}>
              <Image
                resizeMode="cover"
                source={Time}
                style={{width: 18, height: 18}}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                color: '#B296DC',
                fontFamily: 'Montserrat-VariableFont_wght',
                lineHeight: 15,
                fontWeight: '600',
              }}>
              03:23:12
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingTop: 50,
            height: 100,
            //   alignSelf: 'flex-start',
            //   backgroundColor: 'red',
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#D2BAF5',
              fontFamily: 'Montserrat-VariableFont_wght',
              lineHeight: 16,
              fontWeight: '600',
            }}>
            Bitcoin price will be under
          </Text>
          <View
            style={{
              flexDirection: 'row',
              position: 'relative',
              alignContent: 'space-between',
              justifyContent: 'flex-start',
              zIndex: 0,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#ffffff',
                fontFamily: 'Montserrat-VariableFont_wght',
                lineHeight: 16,
                fontWeight: '700',
              }}>
              $24,524
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: '#ffffff',
                fontFamily: 'Montserrat-VariableFont_wght',
                lineHeight: 14,
                fontWeight: '500',
                zIndex: 1,
              }}>
              {" at 7 a ET on 22nd Jan'21"}
            </Text>
            {/* <View
              style={{
                backgroundColor: '#5929A1',
                width: 205,
                height: 190,
                borderRadius: 200,
                // bottom: 30,
                // right: 45,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}>
              <Image
                source={BG}
                style={{width: 100, height: 60, zIndex: 1}} //left: 40, top: 0
              />
            </View> */}
          </View>
        </View>
      </View>
      {/* <View style={{zIndex: 2, flex: 1, backgroundColor: 'white'}}></View> */}
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: '#6231AD',
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 20,
    zIndex: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
