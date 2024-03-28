import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Buttons from "./src/components/Buttons";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  const incrementCount = () => {
    setCount(count + total);
  };
  const decrementCount = () => {
    if(count <1){
      return
    }
    setCount(count - 1);
  };
  const plusTotal=()=>{
   setTotal(total +1)
  }
  const minusTotal=()=>{
    if(total <2){
      return
    }
    setTotal(total - 1);
  }
  return (
    <View style={styles.container}>
       <Text style={styles.Text}>{count}</Text>
      <View style={styles.div}>
       
        <Buttons button="+" onchange={incrementCount}/>
      <Buttons button="-" onchange={decrementCount} />
      </View>
      
      <View>
        <Buttons  button="+" onchange={plusTotal} />
        <Text style={styles.divText}>{total}</Text>
        <Buttons  button="-" onchange={minusTotal} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap:20
  
  },
  div:{
   flexDirection:"row",
    gap:20
    
  },
  Text:{
    fontSize:25,
    fontWeight:'700'  
  },
  divText:{
    fontSize:18,
    fontWeight:"500",
    textAlign:"center",
    paddingVertical:10
  }
});
export default App;
