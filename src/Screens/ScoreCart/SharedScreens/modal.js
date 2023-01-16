import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import BitCoin from '../../../assets/images/bitCoin.png';
import CustomMaskView from './MaskView';

const numberList = [11, 12, 13, 14, 15, 16, 17];
export default function Modal({config}) {
  const {width, height} = Dimensions.get('screen');

  const closeModal = () => {
    config.toggleModal({
      open: false,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        top: '5%',
      }}>
      <View
        style={{
          padding: '5%',
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flex: 0.65,
          width,
          height,
        }}>
        <View
          style={{
            width: '100%',
            height: '10%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '14%',
              height: 7,
              borderRadius: 9,
              backgroundColor: '#B5C0C8',
            }}></View>
        </View>
        <Text style={{color: '#333333', fontSize: config.width / 20}}>
          Your Prediction is Under
        </Text>
        <View style={{paddingTop: '5%'}}>
          <Text style={{color: '#727682', fontSize: config.height / 58}}>
            ENTRY TICKETS
          </Text>

          <View
            style={{
              height: config.height / 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* // scr / mask //map   */}
            {/* <Text>Hello</Text> */}
            <ScrollView
              style={{
                marginTop: 10,
                marginBottom: 10,
                flex: 1,
                width: config.width,
                borderBottomWidth: 2,
                borderBottomColor: 'rgba(204, 204, 204, 0.3)',
              }}
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                width: '100%',
              }}>
              <CustomMaskView>
                {numberList.map((item, index) => {
                  return (
                    <View
                      key={'' + item}
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:
                          index == parseInt(numberList.length / 2)
                            ? '#f4eee0'
                            : 'white',
                      }}>
                      <Text
                        style={{
                          // fontFamily: 'Montserrat-VariableFont_wght',
                          fontSize: 24,
                          lineHeight: 29,
                          // fontWeight: '600',
                          color: '#333333',
                        }}>
                        {item}
                      </Text>
                    </View>
                  );
                })}
              </CustomMaskView>
            </ScrollView>
          </View>

          <View
            style={{
              height: config.height / 6,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                width: config.width / 1.1,
                flexDirection: 'row',
                bottom: 20,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <Text>You can win</Text>
                <Text
                  style={{
                    color: '#03A67F',
                  }}>
                  $2000
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Total</Text>
                <View style={{paddingHorizontal: 5}}>
                  <Image source={BitCoin} style={{width: 20, height: 15}} />
                </View>
                <Text>5</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={closeModal}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: parseInt(config.height / 20),
                width: config.width / 1.1,
                height: 55,
                backgroundColor: '#6231AD',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: 14,
                  lineHeight: 17,
                  textAlignVertical: 'auto',
                }}>
                Submit my prediction
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
