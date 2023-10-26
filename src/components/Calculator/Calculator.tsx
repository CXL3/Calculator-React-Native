import * as React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import Button from '../Button/Button'

export default function Calculator() {
  const [result, setResult] = React.useState('0')
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.resultText}>{result}</Text>
        <View style={styles.row}>
          <Button id='AC' text='AC' isGray onPress={() => {}} />
          <Button id='+/-' text='&#x207A;&frasl;-' isGray onPress={() => {}} />
          <Button id='%' text='%' isGray onPress={() => {}} />
          <Button id='/' text='÷' isOrange onPress={() => {}} />
        </View>
        <View style={styles.row}>
          <Button id='7' text='7' onPress={() => {}} />
          <Button id='8' text='8' onPress={() => {}} />
          <Button id='9' text='9' onPress={() => {}} />
          <Button id='x' text='&#215;' isOrange onPress={() => {}} />
        </View>
        <View style={styles.row}>
          <Button id='4' text='4' onPress={() => {}} />
          <Button id='5' text='5' onPress={() => {}} />
          <Button id='6' text='6' onPress={() => {}} />
          <Button id='-' text='&#8722;' isOrange onPress={() => {}} />
        </View>
        <View style={styles.row}>
          <Button id='1' text='1' onPress={() => {}} />
          <Button id='2' text='2' onPress={() => {}} />
          <Button id='3' text='3' onPress={() => {}} />
          <Button id='+' text='+' isOrange onPress={() => {}} />
        </View>
        <View style={styles.row}>
          <Button id='0' text='0' isZero onPress={() => {}} />
          <Button id='.' text='.' onPress={() => {}} />
          <Button id='=' text='=' isOrange onPress={() => {}} />
        </View>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  resultText: {
    fontSize: 60,
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    fontWeight: '400',
    paddingRight: 10,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})