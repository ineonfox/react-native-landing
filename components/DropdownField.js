import { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Dimensions, Pressable } from 'react-native';

export default function DropdownField(props) {
    const [isComboboxOpen, setIsComboboxOpen] = useState(false);
    const [isChosen, setIsChosen] = useState(false);
    const [chosen, setChosen] = useState();

    const onPressHandler = (e) => {
        setIsChosen(true);
        setChosen(e._dispatchInstances.memoizedProps.children);
        setIsComboboxOpen(false);
    }

    return(
        <View style={[{height: isComboboxOpen ? props.options.length * 56 + 54 : 54}, styles.container, isComboboxOpen ? styles.selectOpened : null, props.style]}>
            <Pressable style={styles.mainContainer} onPress={() => setIsComboboxOpen(!isComboboxOpen)}>
                <Text style={[styles.containerText, {color: chosen ? '#000' : '#888'}]}>{chosen ? chosen : props.placeholder}</Text>
                <Image style={isComboboxOpen ? {transform: [{rotate: '180deg'}]} : null} source={require('../assets/arrow_down.png')} /> 
            </Pressable>
            {props.options.map((val, i) => {
                return (
                    <View style={[{display: isComboboxOpen ? 'flex' : 'none'}, styles.selectOption]}>
                        <Image style={styles.selectImage} source={val.uri} />
                        <Text 
                            style={styles.containerText}
                            onPress={onPressHandler}
                        >{val.name}</Text>
                    </View>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      width: Dimensions.get('window').width - 32,
      borderRadius: 10,
      marginBottom: 8,
      marginTop: 0,
    },
    mainContainer: {
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        height: 54,
        borderBottomWidth: 1,
        borderColor: '#f5f5f5',
        width: '100%',
        paddingLeft: 25,
        paddingRight: 25,
    },
    containerText: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Cabin-SemiBold',
        color: '#888'
    },
    selectOption: {
        height: 54,
        // verticalAlign: 'middle',
        // borderWidth: 1,
        borderTopWidth: 1,
        marginLeft: 25,
        marginRight: 25,
        // flexDirection:'row',
        alignItems: 'center',
        // borderBottomWidth: 1,
        borderColor: '#f5f5f5',
        flexDirection: 'row'
    },
    selectImage: {
        marginRight: 12
    },
    selectOpened: {
        shadowOffset: {height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 4,
    }
});

DropdownField.defaultProps = {
    options: ["Italia", "Francia", "Germania"]
};