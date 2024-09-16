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
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

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
            style={[
              styles.input,
              // {borderColor: isFocused ? '#2c2c2c' : '#E2E4E8'},
            ]}
            value={randomId}
            onChangeText={text => setRandomId(text)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <TextInput
            placeholder="Enter User Name"
            style={[
              styles.input,
              // {borderColor: isFocused2 ? '#2c2c2c' : '#E2E4E8'},
            ]}
            value={userName}
            onChangeText={text => setUserName(text)}
            onFocus={() => setIsFocused2(true)}
            onBlur={() => setIsFocused2(false)}
          />
          {/* <Button
            title="Join Meeting"
            onPress={() => {
              if (randomId.length > 5) {
                navigation.navigate('callingScreen', {
                  callId: randomId,
                  userName: userName,
                  setRandomId: setRandomId,
                  setUserName: setUserName,
                });
              } else {
                alert('Enter Valid Id');
              }
            }}
          /> */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (randomId.length > 5) {
                navigation.navigate('callingScreen', {
                  callId: randomId,
                  userName: userName,
                  setRandomId: setRandomId,
                  setUserName: setUserName,
                });
              } else {
                alert('Enter Valid Id');
              }
            }}>
            <Text style={styles.buttonText}>Join Meeting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginVertical: 24, alignItems: 'center'}}
            onPress={() => {
              const id = generateRandomId();
              setRandomId(id);
            }}>
            <Text style={{color: '#4456DC', fontFamily: 'OpenSans-Regular'}}>
              Generate Meeting Id 🤝
            </Text>
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
    borderWidth: 1.5,
    paddingHorizontal: 16,
    borderColor: '#E2E4E8',
    marginBottom: 20,
    borderRadius: 6,
  },
  heading: {
    fontSize: 22,
    color: '#2c2c2c',
    marginBottom: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
   fontFamily:"OpenSans-Medium"
  },
});

export default HomeScreen;
