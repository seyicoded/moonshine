import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function HeaderCat({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.innercontainer1}>
                    <Icon name="ios-arrow-back" size={30} color="rgba(0,0,255,0.5)" onPress={()=> navigation.goBack()}/>
                </View>
                <View style={styles.innercontainer1}>
                    <Text style={styles.Textcolor}>Cafe Category List</Text>
                </View>
                <View style={styles.innercontainer2}>
                    <View style={styles.innercontainer1}>
                        
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%',
        backgroundColor: 'rgba(50,50,250,0.2)',
        height: '10%',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    innercontainer1: {
        justifyContent: 'center',
        paddingHorizontal: 9,
    },
    innercontainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 9,
    },
    Textcolor: {
        color: 'rgba(0,0,255,0.5)',
        fontWeight: '900',
        fontSize: 19,
    }
})
