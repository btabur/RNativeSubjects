import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegisterPage = () => {
  return (
    <View style={styles.container}>
      <Text>RegisterPage</Text>
    </View>
  )
}

export default RegisterPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})