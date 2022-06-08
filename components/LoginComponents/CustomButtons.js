import React from "react";
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native';

export const CustomButtons = (props) => {
    const {onPress,title,valid} = props
    return (
        <TouchableOpacity 
                        onPress={valid?onPress:()=>console.log('invalid')}
                         style={[styles.button,valid?styles.primary:styles.secondary]}   >
            <Text style={[styles.buttonText,valid?styles.validText:styles.notValidText]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    primary:{
            backgroundColor:"green",
    },
    secondary:{
        backgroundColor:"lightgrey"
    },
    button:{
        paddingHorizontal:20,
        marginTop:20,
        padding:10,
        borderRadius:10,
        width:"50%",
        alignSelf:"center"
    },
    buttonText:{textAlign:"center",fontSize:16},
    notValidText:{color:"black"},
    validText:{color:"white"}

})

// export const CustomButtonSecodary = () => {
//     const {onPress,title} = props

//     return (
//         <TouchableOpacity onPress={onPress}>
//             <Text>{title}</Text>
//         </TouchableOpacity>
//     );
// }
