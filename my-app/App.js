import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [hours,setHours] = useState(0);
    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [customInterval,setCustomInterval] = useState(0);

    const startTimer = () =>{

          setCustomInterval(
              setInterval((e) =>{
                changeTime(e);
                }      
                ,1000
              )
              
          );
    };


    const stopTimer = ()=>{
      if(customInterval){
        clearInterval(customInterval);
    
      }
    }

    const clear = () =>{
      stopTimer();

      setMinutes(0); 
      setHours(0);
      setSeconds(0); 

    }

    const changeTime = () =>{
      setSeconds((prevState)=>{
        if (prevState+1 == 60){
          setMinutes(minutes + 1);
          return 0;
        }
        return prevState + 1;

      });

      /*setMinutes((prevState)=>{
        if (prevState+1 == 60){
          setHours(hours + 1);
          return 0;
        }
        return prevState + 1;

      });*/

    }

    

    

    

  return (
    <View style={styles.container}>

      <Text style ={styles.textTimer}>
          {hours <10 ? '0'+hours : hours}:
          {minutes <10 ? '0'+minutes : minutes}:
          {seconds <10 ? '0'+seconds : seconds}
      
      
      </Text>

      <StatusBar style="auto" />
      <View  style={styles.buttonConteiner}>

        <Button title='Start' onPress={startTimer}/>

        <Button title='Clear' onPress={clear}/>

        <Button  title='Stop' onPress={stopTimer}/>

        

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTimer :{
    fontSize : 30,

  },
  buttonConteiner : {

    width : 250,
  

    flexDirection : 'row',
  justifyContent : 'space-evenly',
  textAlign : 'auto',
  height : 150,
  marginTop : 10,
    
    
  }
});
