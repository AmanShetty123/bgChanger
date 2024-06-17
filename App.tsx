import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Circle, Square} from 'react-native-shape';

const App = () => {
  const [bgCircle, setBgCircle] = useState('#fff');
  const [bgsmallCircle, setBgSmallCircle] = useState('#fff');
  const [bgSquare, setBgSquare] = useState('#fff');
  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color1 = '#';
    for (let i = 0; i < 6; i++) {
      color1 += hexRange[Math.floor(Math.random() * hexRange.length)];
    }

    let color2 = '#';
    for (let i = 0; i < 6; i++) {
      color2 += hexRange[Math.floor(Math.random() * hexRange.length)];
    }
    let color3 = '#';
    for (let i = 0; i < 6; i++) {
      color3 += hexRange[Math.floor(Math.random() * hexRange.length)];
    }
    setBgCircle(color1);
    setBgSmallCircle(color2);
    setBgSquare(color3);
  };
  return (
    <>
      <StatusBar backgroundColor={'#000'} />
      <View style={styles.container}>
        <View style={[styles.circle]}>
          <Circle scale={4} color={bgCircle} />
        </View>
        <View style={styles.btnAndCircle}>
          <View style={styles.btn}>
            <TouchableOpacity onPress={generateColor}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>
                Press Me
              </Text>
            </TouchableOpacity>
          </View>
          <Circle scale={1} color={bgsmallCircle} />
        </View>
        <View style={styles.square}>
          <Square scale={3} color={bgSquare} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  circle: {
    marginLeft: '25%',
    marginTop: '25%',
  },
  btnAndCircle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '30%',
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#6a14bd',
  },
  square: {
    marginLeft: '50%',
    marginTop: '30%',
  },
});

export default App;
