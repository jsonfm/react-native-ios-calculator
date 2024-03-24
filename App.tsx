import {View, StatusBar} from 'react-native';
import {styles} from './src/theme/styles';
import {CalculatorScreen} from './src/screens/CalculatorScreen';

const App = () => {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalculatorScreen />
    </View>
  );
};

export default App;
