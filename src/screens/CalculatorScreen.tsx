import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/styles';
import {Button} from '../components/Button';
import {useCalculator} from '../hooks/calculator';

export const CalculatorScreen = () => {
  const {
    number,
    buildNumber,
    clean,
    deleteLastNumber,
    toggleSign,
    result,
    calculate,
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.resultContainer}>
        <Text style={styles.mainResult} adjustsFontSizeToFit numberOfLines={1}>
          {number}
        </Text>
        <Text style={styles.subResult} adjustsFontSizeToFit numberOfLines={1}>
          {result}
        </Text>
      </View>
      <View>
        <View style={styles.row}>
          <Button onPress={clean} variant="secondary" blackText={true}>
            C
          </Button>
          <Button variant="secondary" blackText={true} onPress={toggleSign}>
            +/-
          </Button>
          <Button
            variant="secondary"
            blackText={true}
            onPress={deleteLastNumber}>
            del
          </Button>
          <Button variant="orange" onPress={() => buildNumber('/')}>
            /
          </Button>
        </View>
        <View style={styles.row}>
          <Button variant="primary" onPress={() => buildNumber('7')}>
            7
          </Button>
          <Button variant="primary" onPress={() => buildNumber('8')}>
            8
          </Button>
          <Button variant="primary" onPress={() => buildNumber('9')}>
            9
          </Button>
          <Button variant="orange" onPress={() => buildNumber('x')}>
            x
          </Button>
        </View>
        <View style={styles.row}>
          <Button variant="primary" onPress={() => buildNumber('4')}>
            4
          </Button>
          <Button variant="primary" onPress={() => buildNumber('5')}>
            5
          </Button>
          <Button variant="primary" onPress={() => buildNumber('6')}>
            6
          </Button>
          <Button variant="orange" onPress={() => buildNumber('-')}>
            -
          </Button>
        </View>
        <View style={styles.row}>
          <Button variant="primary" onPress={() => buildNumber('1')}>
            1
          </Button>
          <Button variant="primary" onPress={() => buildNumber('2')}>
            2
          </Button>
          <Button variant="primary" onPress={() => buildNumber('3')}>
            3
          </Button>
          <Button variant="orange" onPress={() => buildNumber('+')}>
            +
          </Button>
        </View>
        <View style={styles.row}>
          <Button variant="primary" size="lg" onPress={() => buildNumber('0')}>
            0
          </Button>
          <Button variant="primary" onPress={() => buildNumber('.')}>
            .
          </Button>
          <Button variant="orange" onPress={calculate}>
            =
          </Button>
        </View>
      </View>
    </View>
  );
};
