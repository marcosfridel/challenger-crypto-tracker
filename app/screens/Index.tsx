import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import CoinList from '../components/CoinList/Index' 
import { SpeedDial } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { initListCoin } from '../redux/cointrade/actions';

/* import AsyncStorage from '@react-native-async-storage/async-storage';
 */
const Index = ( { navigation, route } ) => {

    const dispatch = useDispatch()
    const [ open, setOpen ] = useState<boolean>(false);

    const refreshFetch = () => {
        dispatch(initListCoin());
    }

    return (
        <>
            <SafeAreaView style={ styles.viewMain }>
                <View style={ styles.viewHeader }>
                    <Text style={ styles.textHeader }>Crypto Tracker Pro</Text>
                </View>
                <View style={ styles.viewBody }>
                    <CoinList/>
                </View>     
                <SpeedDial
                    isOpen={open}
                    overlayColor="transparent"
                    icon={ { name: 'edit', color: '#fff' } }
                    onOpen={() => setOpen(!open)}
                    onClose={() => setOpen(!open)}
                    buttonStyle={ styles.speedDialButton }  
                >         
                    <SpeedDial.Action
                        icon={ { name: 'refresh', color: '#fff' } }
                        title="Refresh"
                        onPress={ () => { setOpen(false), refreshFetch() } }
                        buttonStyle={ styles.speedDialButton }  
                    />
                    <SpeedDial.Action
                        icon={ { name: 'add', color: '#fff' } }
                        title="Setting"
                        onPress={() => { setOpen(false), navigation.navigate('Setting') } }
                        buttonStyle={ styles.speedDialButton }  
                    />
                </SpeedDial>  
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
    },
    speedDialButton: {
        backgroundColor: "#506075",
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
    }
})

export default Index;