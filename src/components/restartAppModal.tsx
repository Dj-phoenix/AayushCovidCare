import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Modal, ModalProps, Text, Divider, ButtonGroup } from '@ui-kitten/components';

interface RestartAppModalProps extends Omit<ModalProps, 'children'> {
  ifPressYes: () => void;
  ifPressNo: () => void;
}

export const RestartAppModal = (props: RestartAppModalProps): React.ReactElement => {

  const { ifPressYes,ifPressNo, ...modalProps } = props;

  return (
    <Modal
      backdropStyle={styles.backdrop}
      {...modalProps}>
      <Layout style={styles.container}>
        <Text
          style={styles.description}
          appearance='hint'
          category='h6' >
          Do you want to activate water reminder alert?
        </Text>

        <Divider />
        <Button style={styles.button}
          appearance='filled'
          onPress={ifPressYes}>
          Yes
        </Button>

        <Button 
          style={styles.button} 
          appearance='outline'
          onPress={ifPressNo}
          >
          No
    </Button>


      </Layout>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    padding: 50,
    width: 320,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  description: {
    marginTop: 8,
    marginBottom: 24,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    margin: 4
  }
});
