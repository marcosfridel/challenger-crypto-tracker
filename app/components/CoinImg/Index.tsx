import React from 'react';

import { Avatar } from 'react-native-elements';
import { imagesCoins } from '../Coin/Setup';
import Props from './Props';

const Index = (props:Props) => {
    return (
        <>
            <Avatar source ={ imagesCoins[props.symbol] }></Avatar>
        </>
    )
}

export default Index;