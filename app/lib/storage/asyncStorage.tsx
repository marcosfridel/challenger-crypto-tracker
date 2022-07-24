import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (key:string, value:string) => {
    try {
        await AsyncStorage.setItem(`@${key}`, value)
    } catch (e) {
    }
}

export const setObject = async (key:string, value:object | undefined) => {
    if(!value) return;
    
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(`@${key}`, jsonValue)
    } catch (e) {
    }
}

export const getData = async (key:string) => {
    try {
        const value:any | null = await AsyncStorage.getItem(`@${key}`);
        return value ? value : '';   
    } 
    catch(e) {
    }    
}
  
export const getObject = async (key:string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@${key}`)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } 
    catch(e) {
    }
}
  