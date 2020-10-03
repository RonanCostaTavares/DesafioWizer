import React,{useEffect , useContext} from 'react';
import { Container , LoadingIcon} from './styles'
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';


import Api from '../../Api';


export default () => {

    const {dispatch: userDispatch } = useContext(UserContext); 
    const navigation = useNavigation();

    useEffect(()=> {

        const checkToken = async() => {
            //const token = await AsyncStorage.getItem('token');

            navigation.reset({
                routes: [{name: 'SignUp'}]
            })


        }
        checkToken();
    }, []);


    return (
        <Container>
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}