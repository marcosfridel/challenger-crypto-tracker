import React, { useEffect, useState } from 'react';
import { Switch } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { changeCheckCoinShow } from '../../redux/cointrade/actions';
import Props from './Props';

const Index = (props:Props) => {

    const dispatch = useDispatch()
    const [ checked, setChecked ] = useState<boolean>(false);

    useEffect(() => {
        setChecked(props.checked);
    }, [])


    const toggleSwitch = () => {
        const switchChecked = !checked;
        setChecked(switchChecked);
        dispatch(changeCheckCoinShow(props.symbol, switchChecked));
    }

    return (
        <>

            <Switch
                onValueChange={ () => toggleSwitch() }
                value={ checked }
                trackColor={{ false: "#AF9F8A", true: "#506075" }}
                thumbColor={ "#f4f3f4" }
            />          
        </>
    )
}

export default Index;