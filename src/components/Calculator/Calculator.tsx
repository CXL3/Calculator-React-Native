import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, Platform } from 'react-native'
import Button from '../Button/Button'
import useCalculator from '../../helper/useCalculator'

export default function Calculator() {
  const calc = useCalculator()

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.resultRow}>
          <Text style={styles.resultText} numberOfLines={1}>
            {calc.display()}
          </Text>
        </View>
        <View style={styles.row}>
          <Button id='AC' text='AC' isGray onPress={() => calc.clear()} />
          <Button
            id='+/-'
            text='&#x207A;&frasl;-'
            isGray
            onPress={() => calc.toggleSign()}
          />
          <Button
            id='%'
            text='%'
            isGray
            onPress={() => calc.percentageFunction()}
          />
          <Button
            id='/'
            text='÷'
            isOrange
            onPress={() => calc.handleOperatorPress('÷')}
          />
        </View>
        <View style={styles.row}>
          <Button id='7' text='7' onPress={() => calc.handleButtonPress('7')} />
          <Button id='8' text='8' onPress={() => calc.handleButtonPress('8')} />
          <Button id='9' text='9' onPress={() => calc.handleButtonPress('9')} />
          <Button
            id='x'
            text='×'
            isOrange
            onPress={() => calc.handleOperatorPress('x')}
          />
        </View>
        <View style={styles.row}>
          <Button id='4' text='4' onPress={() => calc.handleButtonPress('4')} />
          <Button id='5' text='5' onPress={() => calc.handleButtonPress('5')} />
          <Button id='6' text='6' onPress={() => calc.handleButtonPress('6')} />
          <Button
            id='-'
            text='−'
            isOrange
            onPress={() => calc.handleOperatorPress('-')}
          />
        </View>
        <View style={styles.row}>
          <Button id='1' text='1' onPress={() => calc.handleButtonPress('1')} />
          <Button id='2' text='2' onPress={() => calc.handleButtonPress('2')} />
          <Button id='3' text='3' onPress={() => calc.handleButtonPress('3')} />
          <Button
            id='+'
            text='+'
            isOrange
            onPress={() => calc.handleOperatorPress('+')}
          />
        </View>
        <View style={styles.row}>
          <Button
            id='0'
            text='0'
            isZero
            onPress={() => calc.handleButtonPress('0')}
          />
          <Button id='.' text='.' onPress={() => calc.handleButtonPress('.')} />
          <Button
            id='='
            text='='
            isOrange
            onPress={() => calc.calculateResult()}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: Platform.OS === 'ios' ? 60 : 0,
  },
  row: {
    flexDirection: 'row',
  },
  resultRow: {
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  resultText: {
    fontSize: Platform.OS === 'ios' ? 80 : 60,
    color: '#FFFFFF',
    textAlign: 'right', 
  },
})
