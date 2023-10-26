import { Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const screen = Dimensions.get('window')
const buttonWidth = screen.width / 5

interface Props {
  text: string
  onPress: () => void
  isGray?: boolean
  isOrange?: boolean
  isZero?: boolean
  id?: string
}
export default function button({
  text,
  isGray,
  isOrange,
  isZero,
  id,
  onPress,
}: Props) {
  
  const buttonStyle = isOrange
    ? styles.buttonOrange
    : isGray
    ? styles.buttonGray
    : isZero
    ? styles.buttonZero
    : styles.buttonBlack

  const textStyle = isGray
    ? styles.textforGrayButton
    : isOrange
    ? styles.textforOrangeButton
    : styles.textforBlackButton

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle} onPress={onPress}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonBlack: {
    borderRadius: 50,
    width: buttonWidth,
    height: buttonWidth,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  buttonOrange: {
    borderRadius: 50,
    width: buttonWidth,
    height: buttonWidth,
    backgroundColor: '#FF9F06',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  buttonGray: {
    borderRadius: 50,
    width: buttonWidth,
    height: buttonWidth,
    backgroundColor: '#A5A5A5',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  buttonZero: {
    width: buttonWidth * 2 + 8,
    height: buttonWidth,
    borderRadius: 30,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  textforBlackButton: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 40,
  },
  textforOrangeButton: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 50,
  },
  textforGrayButton: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 40,
  },
})
