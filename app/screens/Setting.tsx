import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import CoinList from '../components/CoinList/Index' 

const Index = ( { navigation, route } ) => {

    return (
        <>
            <SafeAreaView style={ styles.viewMain }>
                <View style={ styles.viewBody }>
                    <CoinList isChecked={ true } />
                </View>     
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    viewMain: {
        flex: 1
    },
    viewHeader: {
        backgroundColor: "#506075",
        flex: .15,
        justifyContent: "center",
        paddingLeft: 20
    },
    viewBody: {
        flex: .85,
    },
    textHeader: {
        color: "#FFFFFF",
        fontSize: 20,
    }
})

export default Index;