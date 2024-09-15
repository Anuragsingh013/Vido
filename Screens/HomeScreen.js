import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [randomId, setRandomId] = useState('');
  const [userName, setUserName] = useState('');

  const navigation = useNavigation();

  const generateRandomId = () => {
    return `${Math.floor(Math.random() * 10000)}-${Math.floor(
      Math.random() * 10000,
    )}-${Math.floor(Math.random() * 10000)}`;
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: 'white'}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Adjust for iOS
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled" // Allows tap on button when keyboard is up
      >
        <StatusBar backgroundColor={'#4456DC'} barStyle={'light-content'} />
        <Text style={styles.heading}>Join meeting with Vido 🎭</Text>

        <Image
          source={require('../Assets/Images/logo.jpeg')}
          style={{width: 180, height: 180}}
        />
        <View style={{width: '90%'}}>
          <TextInput
            placeholder="Enter Meeting Id"
            style={styles.input}
            value={randomId}
            onChangeText={text => setRandomId(text)}
          />
          <TextInput
            placeholder="Enter User Name"
            style={styles.input}
            value={userName}
            onChangeText={text => setUserName(text)}
          />
          <Button
            title="Join Meeting"
            onPress={() => {
              if (randomId.length > 5) {
                navigation.navigate('callingScreen', {
                  callId: randomId,
                  userName: userName,
                  setRandomId:setRandomId,
                  setUserName:setUserName
                });
              } else {
                alert('Enter Valid Id');
              }
            }}
          />
          <TouchableOpacity
            style={{marginVertical: 24, alignItems: 'center'}}
            onPress={() => {
              const id = generateRandomId();
              setRandomId(id);
            }}>
            <Text style={{color: '#4456DC'}}>Generate Meeting Id 🤝</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 16,
    borderColor: '#2c2c2c',
    marginBottom: 20,
    borderRadius: 6,
  },
  heading: {
    fontSize: 24,
    color: '#2c2c2c',
    marginBottom: 20,
  },
});

export default HomeScreen;
