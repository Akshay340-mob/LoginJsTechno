import React,{useState} from 'react';
import {View,SafeAreaView,Text,ImageBackground,StyleSheet ,
            KeyboardAvoidingView,Alert} from 'react-native';
import { CustomButtons } from '../../components/LoginComponents/CustomButtons';
import CustomInput from '../../components/LoginComponents/CustomInput';
import { Constants } from '../../constants/Constants';

const LoginScreen = () => {

    const [username,setUsername] = useState({val:'',valid:false});
    const [password,setPassword] = useState({val:'',valid:false});
    const [secureTextEntry,setSecureTextEntry] = useState(true);

    const onToggle=()=>{
        setSecureTextEntry(prevState=>!prevState)
    }

    const validity=(enteredValue,type)=>{
        
        if(type == "username" && enteredValue.length>6)
                return true;
        if(type == "password" && Constants.regex.test(enteredValue))
               return true;
        else return false;       
    }

    const onSubmit=()=>{
        Alert.alert(
            "Logged In Successfully",
            `Hii Welcome ${username.val}` ,
            [
              
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
    }

   
    const onchageText=(enteredValue,inputType)=>{
        
        
         if(inputType == 'Username')
                 {
                     setUsername({val:enteredValue,valid:validity(enteredValue,"username")});
                    }
            else if(inputType == 'Password')
                setPassword({val:enteredValue,valid:validity(enteredValue,"password")});
            
    }

    return (
        <SafeAreaView style={styles.outerContainer}>
         
            <ImageBackground
          source={{uri : Constants.loginBackGround}}
          resizeMode="cover"
          style={[StyleSheet.absoluteFill,
                     {width: null, height: null }]}/>
        
        <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios'?"padding":"height"}
                keyboardVerticalOffset={60}
                style={styles.container}>

             <View style={styles.innercontainer}>
                 <Text style={styles.heading}>Login</Text>
             <CustomInput
                           title="Username"
                           value={username.val}
                           updatedValue={onchageText}
                           isToggle={false}
                           isValid={username.valid} 
                        />
                    <CustomInput
                        title="Password"
                        value={password.val}
                        updatedValue={onchageText}
                        isToggle={true}
                        isValid={password.valid} 
                        secureTextEntry={secureTextEntry}
                        onToggle={onToggle}
                    />
                    <CustomButtons
                        onPress={onSubmit}
                        title="Login"
                        valid={username.valid && password.valid}
                        />
             </View>
                    
              </KeyboardAvoidingView>
             
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
        container:{flex:1,
                        marginLeft:"10%",
                                justifyContent:"center",
                                    width:"80%"},
        outerContainer:{flex:1},
        innercontainer:{backgroundColor:"white",padding:20,borderRadius:10},
        heading:{textAlign:"center",fontSize:16}
})

export default LoginScreen;