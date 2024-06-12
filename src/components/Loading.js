import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = ({setIsLoading}) => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'white'}/>
      <Text style={styles.loadingText}>Loading...</Text>

      <Pressable onPress={()=>setIsLoading(false)}  style={({ pressed }) => [
          {
            backgroundColor: pressed ? "lightblue" :"transparent" ,
          },
          styles.btnCloseContainer,
        ]}>
            <Text style={styles.btnClose}>X</Text>
      </Pressable>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        flexDirection:'row',
        width:'60%',
        height:'40%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(255, 99, 71, 0.6)',
        gap:10,
        borderRadius:30,
    },
    loadingText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },btnCloseContainer:{
        position:'absolute',
        top:10,
        right:10,
        borderColor:'white',
        borderWidth:1,
        padding:3,
        borderRadius:'50%',
        width:25,
        height:25,
        alignItems:'center',
        justifyContent:'center'
    },
    btnClose:{
        color:'white',
        fontSize:15
    }
})