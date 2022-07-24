import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import CoinSwitch from '../CoinSwitch/Index';
import { Props } from './Props';

const Index = (props:Props) => {
    return (
        <>
            <View style={ styles.viewRow }>
                <View style={ styles.viewRowItem }>
                    <Text>{ props.name ? props.name : '-' }</Text>
                </View>
                <CoinSwitch
                    symbol={ props.symbol }
                    checked={ props.show }
                />
            </View> 
        </>
    )
}

const styles = StyleSheet.create({
    viewRow: { 
        flexDirection: 'row', 
        alignContent: 'center', 
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        borderBottomWidth: 0.5, 
        borderBottomColor: '#AAAAAA' 
    },
    viewRowItem: { 
        flex: 1 
    }
})

export default Index;