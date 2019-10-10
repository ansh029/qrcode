import React, { Component } from 'react';

// import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, PermissionsAndroid ,Alert} from 'react-native';

import { CameraKitCameraScreen, } from 'react-native-camera-kit';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class App extends Component {

  onSuccess = (e) => {
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));

    Alert.alert(e)
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={QRCodeScanner.Constants.FlashMode.torch}      
        topContent={
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

  // constructor() {

  //   super();

  //   this.state = {
     
  //     QR_Code_Value: '',

  //     Start_Scanner: false,

  //   };

  // }

  // openLink_in_browser = () => {

  //   Linking.openURL(this.state.QR_Code_Value);

  // }

  // onQR_Code_Scan_Done = (QR_Code) => {

  //   this.setState({ QR_Code_Value: QR_Code });

  //   this.setState({ Start_Scanner: false });

  // }

  // open_QR_Code_Scanner = () => {

  //   var that = this;

  //   if (Platform.OS === 'android') {
  //     async function requestCameraPermission() {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.CAMERA, {
  //           'title': 'Camera App Permission',
  //           'message': 'Camera App needs access to your camera '
  //         }
  //         )
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {

  //           that.setState({ QR_Code_Value: '' });
  //           that.setState({ Start_Scanner: true });
  //         } else {
  //           alert("CAMERA permission denied");
  //         }
  //       } catch (err) {
  //         alert("Camera permission err", err);
  //         console.warn(err);
  //       }
  //     }
  //     requestCameraPermission();
  //   } else {
  //     that.setState({ QR_Code_Value: '' });
  //     that.setState({ Start_Scanner: true });
  //   }
  // }


//   render() {
//     if (!this.state.Start_Scanner) {

//       return (
//         <View style={styles.MainContainer}>

//           {/* <Text style={{ fontSize: 22, textAlign: 'center' }}>React Native Scan QR Code Example</Text>

//           <Text style={styles.QR_text}>
//             {this.state.QR_Code_Value ? 'Scanned QR Code: ' + this.state.QR_Code_Value : ''}
//           </Text>

//           {this.state.QR_Code_Value.includes("http") ?
//             <TouchableOpacity
//               onPress={this.openLink_in_browser}
//               style={styles.button}>
//               <Text style={{ color: '#FFF', fontSize: 14 }}>Open Link in default Browser</Text>
//             </TouchableOpacity> : null
//           }

//           <TouchableOpacity
//             onPress={this.open_QR_Code_Scanner}
//             style={styles.button}>
//             <Text style={{ color: '#FFF', fontSize: 14 }}>
//               Open QR Scanner
//             </Text>
//           </TouchableOpacity> */}

         

//         </View>
//       );
//     }
//     return (
//       <View style={{ flex: 1 }}>

//         <CameraKitCameraScreen
//           showFrame={true}
//           scanBarcode={true}
//           laserColor={'#FF3D00'}
//           frameColor={'#00C853'}
//           colorForScannerFrame={'black'}
//           onReadCode={event =>
//             this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
//           }
//         />

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({

//   MainContainer: {
//     flex: 1,
//     paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   QR_text: {
//     color: '#000',
//     fontSize: 19,
//     padding: 8,
//     marginTop: 12
//   },
//   button: {
//     backgroundColor: '#2979FF',
//     alignItems: 'center',
//     padding: 12,
//     width: 300,
//     marginTop: 14
//   },
// });