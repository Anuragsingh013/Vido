import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
// import {
//   ZegoUIKitPrebuiltCall,
//   ONE_ON_ONE_VIDEO_CALL_CONFIG,
// } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import {useNavigation, useRoute} from '@react-navigation/native';
export default function VoiceCallScreen(props) {
  const userId = String(Math.floor(Math.random() * 100000));

  const navigation = useNavigation();
  const route = useRoute();
  const {callId, userName, setUserName, setRandomId} = route.params;
  console.log(route);

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={379220688}
        appSign={
          '3a870dac7e9ac4900be925ba2688a13a0dc2b2f2bea40588f06447008a9402e7'
        }
        // userID={"121212"} // userID can be something like a phone number or the user id on your own user system.
        // userName={"khushi"}
        userID={userId}
        userName={`user_${userName}`}
        callID={'group123'} // callID can be any unique string.b
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onCallEnd: (callID, reason, duration) => {
            setRandomId('');
            setUserName('');
            navigation.navigate('Home');
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});
// import {View, Text} from 'react-native';
// import React from 'react';

// const VoiceCallScreen = () => {
//   return (
//     <View>
//       <Text>VoiceCallScreen</Text>
//     </View>
//   );
// };

// export default VoiceCallScreen;
