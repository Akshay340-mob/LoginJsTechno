import React from "react";
import { TextInput , View ,Text,TouchableOpacity,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const CustomInput = ({title,value,onToggle,
                updatedValue,secureTextEntry,isToggle,isValid}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.lable,isValid?styles.validText:styles.errorLable]}>{title}</Text>
            <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={text=>updatedValue(text,title)}
                secureTextEntry={secureTextEntry}
            />
            {isToggle?<TouchableOpacity
            onPress={onToggle}>
                <Icon name={secureTextEntry?"eye":"eye-off"}
                    size={20}/></TouchableOpacity>:null}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
            marginVertical:5,
    },
    inputContainer:{
        flexDirection:"row",
        alignItems:"center",justifyContent:"space-between",
        borderWidth:1,
        borderRadius:10,
        borderColor:"grey",
        paddingHorizontal:10
    },
    textInput:{
        width:"80%",
        color:"black"
    },
    lable:{marginVertical:5},
    errorLable:{color:"red"},
    validText:{color:"green"}
})

export default CustomInput;