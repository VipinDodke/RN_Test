import {
  SafeAreaView,
  Dimensions,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ModalComponent from '../CustomComponents/CustomIcon/CustomModa';

export default function AppConfigComponent({routeData, ...rest}) {
  const isDarkMode = useColorScheme() === 'dark';
  const {width, height} = Dimensions.get('screen');
  const [modalData, setModalData] = useState({open: false});
  const {component: Component} = routeData;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    width: width,
  };

  const openModal = useCallback(
    data => {
      if (modalData.open) {
        setModalData({
          open: false,
        });
      }
      setModalData(data);
    },
    [modalData.open],
  );

  const config = {
    width: width,
    height: height,
    toggleModal: openModal,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {modalData.open && (
        <ModalComponent
          open={modalData.open}
          containerStyle={modalData.containerStyle}
          component={modalData.component}
          data={modalData.data}
          config={config}
          closeModal={() => openModal({open: false})}
        />
      )}
      <Component config={config} {...rest} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
