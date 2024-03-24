import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  calculatorContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  resultContainer: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '300',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },

  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: colors.darkGray,
    color: colors.textSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonSizeMd: {
    width: 80,
    height: 80,
  },
  buttonSizeLg: {
    width: 160,
    height: 80,
  },
  buttonPrimary: {
    backgroundColor: colors.darkGray,
    color: colors.textPrimary,
  },
  buttonSecondary: {
    backgroundColor: colors.lightGray,
    color: colors.lightGray,
  },
  buttonOrange: {
    backgroundColor: colors.orange,
    color: colors.textPrimary,
  },
  buttonText: {
    fontSize: 30,
    color: colors.textPrimary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
