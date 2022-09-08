import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

// import so more icon from https://oblador.github.io/react-native-vector-icons/ and use .

import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Icon from 'react-native-vector-icons/Entypo';
// import Icon from 'react-native-vector-icons/EvilIcons';
// import Icon from 'react-native-vector-icons/Fontisto';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>
          React Native Icons from
          https://oblador.github.io/react-native-vector-icons/{' '}
        </Text>
        <Text>
          <Icon name="rocket" size={30} color="#647422" />
          <Icon name="home" size={30} color="#900" />
          <Icon name="thumbs-down" size={30} color="red" />
          <Icon name="thumbs-up" size={30} color="#900" />
          <Icon name="crop" size={30} color="blue" />
          <Icon name="money" size={30} color="#900" />
          <Icon name="bullhorn" size={30} color="green" />
          <Icon name="upload" size={30} color="#900" />
          <Icon name="facebook-square" size={30} color="blue" />
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
