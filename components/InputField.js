import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native';

export default function InputField(props) {
    let secureTextEntry = false;
    if(props.valueType === "password") {
        props.valueType = "text";
        secureTextEntry = true;
    }

    return(
        <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            inputMode={props.valueType}
            placeholder={props.placeholder}
            placeholderTextColor='#888'
            keyboardType="ascii-capable"
            secureTextEntry={secureTextEntry}
            textContentType={props.contentType}
        >
            {props.valueType === "password" ? <Image /> : null}
        </TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      padding: 10,
      backgroundColor: '#fff',
      width: Dimensions.get('window').width - 32,
      height: 54,
      borderRadius: 10,
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 8,
      marginTop: 0,
      fontFamily: 'Cabin-SemiBold',
      paddingLeft: 25,
    },
});