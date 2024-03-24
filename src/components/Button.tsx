import {Text, Pressable} from 'react-native';
import {ReactNode} from 'react';
import {styles} from '../theme/styles';

interface Props {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'orange';
  size?: 'md' | 'lg';
  blackText?: boolean;
  onPress?: () => void;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  blackText = false,
  onPress,
}: Props) => {
  let variantStyle = styles.buttonPrimary;
  let sizeStyle = styles.buttonSizeMd;

  if (variant === 'secondary') {
    variantStyle = styles.buttonSecondary;
  }
  if (variant === 'orange') {
    variantStyle = styles.buttonOrange;
  }

  if (size === 'lg') {
    sizeStyle = styles.buttonSizeLg;
  }
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => ({
        ...styles.button,
        ...variantStyle,
        ...sizeStyle,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text
        style={{...styles.buttonText, color: blackText ? 'black' : 'white'}}>
        {children}
      </Text>
    </Pressable>
  );
};
