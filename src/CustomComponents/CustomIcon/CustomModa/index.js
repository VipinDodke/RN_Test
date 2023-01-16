import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';

const ModalComponent = ({
  open,
  component: Component,
  data,
  closeModal,
  config,
}) => {
  return (
    <ReactNativeModal
      isVisible={open}
      deviceHeight={config.height}
      deviceWidth={config.width}
      animationIn="slideInUp" //fadeInUp
      animationOut="slideOutDown" //fadeInDown
      animationInTiming={370}
      animationOutTiming={1000}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
        {Component && (
          <Component data={data} config={config} closeModal={closeModal} />
        )}
      </SafeAreaView>
    </ReactNativeModal>
  );
};

export default ModalComponent;
