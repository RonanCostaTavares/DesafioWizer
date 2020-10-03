import React, { useState ,  useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Api from '../../Api';

import { 
    Container, 
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold

} from './styles'

import Input from '../../components/Input'



export default () => {

    const {dispatch: userDispatch } = useContext(UserContext); 
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != '' && nameField != ''){

                await AsyncStorage.setItem('token', json.token)

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes: [{name: 'Home'}]
                })

        }else {
            alert("Preencha os campos!")
        }
    }


    const handleMessageButtonClick = () => {

        navigation.reset({
            routes:[{name: 'SignIn'}]
        });
    }

    return (
        <Container>
            {/* <Icon name="pokemon-go" size={100}/> */}

            {/* <BarberLogo width="100%" height="160"/> */}

            <InputArea>
                <Input 
                    // IconSvg={}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <Input 
                    // IconSvg={}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}

                />

                <Input 
                    // IconSvg={}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />
                
                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick} >
                <SignMessageButtonText>Ja possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>
            
        </Container>
    );
}