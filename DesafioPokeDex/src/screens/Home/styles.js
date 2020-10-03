import React, { Component } from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    backgroundColor: #d1e5d0;
    flex: 1;
    
`;
 export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
 `;


export const HeaderArea = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;

`;
export const HeaderTitle = styled.Text`
    width: 250px;
    fontSize: 24px;
    fontWeight: bold;
    color: #000;
`;
export const FilterOrder = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
    backgroundColor: #8BBE8A;
`;


export const InputPokemonArea = styled.View`
    backgroundColor: #F2F2F2;
    height: 60px;
    borderRadius: 30px;
    flexDirection: row;
    alignItems: center;
    paddingLeft: 20px;
    paddingRight: 20px;
    marginTop: 30px;
`;
export const PokenonInput = styled.TextInput`
    flex: 1;
    fontSize: 16px;
    color: #000;
`;
export const LocaitonFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;


export const LoadingIcon = styled.ActivityIndicator`
    marginTop: 50px;
`;

export const ListArea = styled.TouchableOpacity`
    marginTop: 30px;
    marginBottom: 30px;
`;


export const PokemonItem = styled.TouchableOpacity`
    backgroundColor: #FFF;
    marginBottom: 20px;
    borderRadius: 20px;
    padding: 15px;
    flexDirection: row;
`;

export const PokemonName = styled.Text`
    fontSize: 17px; 
    fontWeight: bold; 
`;

