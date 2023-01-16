import {View, FlatList, Text, Image} from 'react-native';
import React from 'react';
import ScreenLayout from '../../ScreenLayout';
import EditImage from '../../assets/images/editProfile.png';
import LocalImage from '../../assets/images/localImage.png';
const Profile = ({config}) => {
  const data = [
    {
      title: 'First Stripe Earned',
      desc: 'Top 10% of heighest spending palyers in a month',
    },
    {
      title: 'Born Winner',
      desc: 'Top 10% of heighest spending palyers in a month',
    },
    {
      title: 'Trader of the month',
      desc: 'Won 7 under-over games in a row',
    },
    {
      title: 'rising Star',
      desc: 'Top 10% of heighest spending palyers in a month',
    },
  ];

  return (
    <ScreenLayout title={'Profile'} config={config} header={'ScoreCart'}>
      <View style={{height: '100%', width: '100%'}}>
        <View style={{paddingVertical: 20, alignItems: 'center'}}>
          <View
            style={{
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 15,
            }}>
            <View
              style={{
                position: 'relative',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  backgroundColor: 'gray',
                }}></View>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  position: 'absolute',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}>
                <Image source={EditImage} style={{width: 15, height: 15}} />
              </View>
            </View>

            <Text
              style={{
                // fontWeight: '600',
                paddingVertical: 10,
                fontFamily: 'Montserrat-VariableFont_wght',
              }}>
              Jina Simons
            </Text>
            <Text
              style={{
                paddingVertical: 5,
                fontFamily: 'Montserrat-VariableFont_wght',
              }}>
              6000 pts
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat-VariableFont_wght',
                textAlign: 'justify',
                paddingHorizontal: 20,
              }}>
              I’m a software developer that has been in the crypto space since
              2012. And I’ve seen it grow and falter over a period of time.
              Really happy to be here!
            </Text>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            {/* <Icon name="logout" size={20} color="black" /> */}
            <Text style={{paddingLeft: 10}}>Logout</Text>
          </View>
          {/* <Image source={star} style={{height: 30, width: 30}} /> */}
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
                width: '80%',
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-VariableFont_wght',
                  fontWeight: '600',
                  fontSize: 14,
                  lineHeight: 17,
                  color: '#727682',
                }}>
                Under or Over
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-VariableFont_wght',
                  fontWeight: '600',
                  fontSize: 14,
                  lineHeight: 17,
                  color: '#727682',
                }}>
                Top 5
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '80%',
              }}>
              <View style={{flexDirection: 'row'}}>
                {/* <Image
                source={upDownload}
                style={{height: 20, width: 20, marginEnd: 5}}
              /> */}
                <Text
                  style={{
                    fontFamily: 'Montserrat-VariableFont_wght',
                    fontSize: 24,
                    lineHeight: 29,
                    fontWeight: '700',
                    color: 'black',
                  }}>
                  81%
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                {/* <Image
                source={downDowload}
                style={{height: 20, width: 20, marginEnd: 5}}
              /> */}
                <Text
                  style={{
                    fontFamily: 'Montserrat-VariableFont_wght',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  -51%
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: config.width / 1.2,
              top: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                height: 50,
                width: '50%',
                justifyContent: 'center',
                fontFamily: 'Montserrat-VariableFont_wght',
                // borderBottomWidth: 3,
              }}>
              <Text>Game played</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                height: 50,
                width: '50%',
                justifyContent: 'center',
                borderBottomWidth: 3,
                borderBottomColor: '#6231AD',
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-VariableFont_wght',
                  color: '#6231AD',
                }}>
                Badges
              </Text>
            </View>
          </View>
          <View
            style={{
              top: 35,
              alignItems: 'center',
              width: '80%',
              justifyContent: 'center',
            }}>
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <View
                    style={{width: '89%', height: 60, flexDirection: 'row'}}>
                    <Image
                      source={LocalImage}
                      style={{
                        height: 50,
                        width: 50,
                        justifyContent: 'flex-start',
                      }}
                    />
                    <View style={{flexDirection: 'column'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: 'Montserrat-VariableFont_wght',
                          fontWeight: 'bold',
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          color: '#727682',
                          fontWeight: '700',
                          fontSize: 14,
                          lineHeight: 20,
                          width: '90%',
                          fontFamily: 'Montserrat-VariableFont_wght',
                        }}>
                        {item.desc}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default Profile;

{
  /* <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 0.5,
          }}>
        <Image source={header1} style={{height: 30, width: 30}} /> 
          <Text>Profile</Text>
          <View>
           <Icon name="chat-bubble" size={30} /> 

            <Text
              style={{
                backgroundColor: '#6231AD',
                color: 'white',
                textAlign: 'center',
                height: 20,
                width: 20,
                borderRadius: 80,
              }}>
              1
            </Text>
          </View>
        </View>
        */
}
