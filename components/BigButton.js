import { Text, StyleSheet, Dimensions, View } from 'react-native';

export default function BigButton(props) {
    return(
        <View style={[{backgroundColor: props.backgroundColor}, styles.button, props.style]}>
            <Text style={styles.text} onPress={props.onPress}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width - 32,
        borderRadius: 10,
        height: 54,
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Cabin-Bold',
        textAlign: 'center',
    }
});