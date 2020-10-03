import React, {useEffect , useState} from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


const Modal = styled.Modal``;

const ModalArea = styled.View`
    flex: 1;
    backgroundColor: rgba(0, 0, 0, 0.5);
    justifyContent: flex-end;
`;

const ModalBody = styled.View`
    backgroundColor: #8BBE8A;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    padding: 0px 20px 40px 20px;
`;

const ModalItem = styled.View`
    borderRadius: 10px;
    marginBottom: 15px;
`;

const UserInfo = styled.View`
    alignItems: center;
`;
const UserAvatar = styled.Image`
    width: 200px;
    height: 200px;
    borderRadius: 20px;
    marginRight: 15px;
`;
const UserItem = styled.Text`
    color: #000;
    fontSize: 18px;
    fontWeight: bold;
`;


export default ({show, setShow,pokemonName,pokemonImage,pokemonHp,pokemonAtq,pokemonDef,pokemonVelo,pokemonHab}) => {

    const navigation = useNavigation();


    const handleCloseButtom = () => {
        setShow(false);

    }


    return(
        <Modal  
            transparent={true}
            visible={show}
            animationType="slide"
            onPress={handleCloseButtom}
        >

            <ModalArea>
                <ModalBody>

                    <ModalItem>
                        <UserInfo>
                            <UserAvatar source={{uri: pokemonImage}}/>
                            <UserItem>Name: {pokemonName}</UserItem>
                            <UserItem>Hp: {pokemonHp}</UserItem> 
                            <UserItem>Ataque: {pokemonAtq}</UserItem> 
                            <UserItem>Defesa: {pokemonDef}</UserItem> 
                            <UserItem>Velocidade: {pokemonVelo}</UserItem> 
                            <UserItem>Habilidades: {pokemonHab}</UserItem> 

                        </UserInfo>
                    </ModalItem>

                </ModalBody>
            </ModalArea>

        </Modal>
    )
}