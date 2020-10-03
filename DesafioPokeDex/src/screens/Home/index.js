import React, { useState , useEffect,useContext} from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import Icon from 'react-native-vector-icons/AntDesign';

import ModalPokedex from '../../components/ModalPokedex';
import Api from '../../Api';

import { 
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,

    InputPokemonArea,
    PokenonInput,

    PokemonItem,
    PokemonName,

    LoadingIcon,
    ListArea,

} from './styles';


export default () => {

    const navigation = useNavigation();
    const { state: user} = useContext(UserContext)


    const[pokemonText, setPokemonText] = useState('');
    const[refreshing, setRefreshing] = useState(false);
    const[serchByName, setSerchByName] = useState(false);
    const[loading , setLoading] = useState(false);
    const[listPokemon, setListPokemon] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [pokemonName, setPokemonName] = useState('');
    const [pokemonImage, setPokemonImage] = useState('');
    const [pokemonHp, setPokemonHp] = useState('');
    const [pokemonAtq, setPokemonAtq] = useState('');
    const [pokemonDef, setPokemonDef] = useState('');
    const [pokemonVelo, setPokemonVelo] = useState('');
    const [pokemonHab, setPokemonHab] = useState('');


    const getPokemon = async () => {
        setLoading(true);
        setSerchByName(false);
        setListPokemon([]);

        let res = await Api.getPokemons();

        if(res){
            setListPokemon(res.results)
            
        }else{
            alert("Ocorreu um erro, tente novamente mais tarde.")
        }

        setLoading(false);
        
    }

    const getPokemonByName = async () => {

        setLoading(true);
        setSerchByName(true);
        setListPokemon([]);

        let res = await Api.getPokemonByName(pokemonText);

        if(res){
            setListPokemon(res.results)
            
        }else{
            alert("Ocorreu um erro, tente novamente mais tarde.")
        }

        setLoading(false);

    }


    useEffect(() => {
        getPokemon();
    }, []);

    const hanldeSelectPokemonClick = async (itemUrl) => {

        setPokemonName('')
        setPokemonImage('')
        setPokemonHp('')
        setPokemonAtq('')
        setPokemonDef('')
        setPokemonVelo('')
        setPokemonHab('')

        if (serchByName) {
            itemUrl = `https://pokeapi.co/api/v2/pokemon/${itemUrl}/`;
        }

        let res = await Api.getPokemonByUrl(itemUrl);

        if(res){
            setPokemonName(res.name)
            setPokemonImage(res.sprites.front_default)
            setPokemonHp(res.stats[0].base_stat)
            setPokemonAtq(res.stats[1].base_stat)
            setPokemonDef(res.stats[2].base_stat)
            setPokemonVelo(res.stats[5].base_stat)
            setPokemonHab(res.abilities[0].ability.name)

            setShowModal(true)           
        }else{
            alert("Ocorreu um erro, tente novamente mais tarde.")
        }

        setLoading(false);
        
   
    }

    const onRefresh = async () => {
        setRefreshing(false)
        getPokemon();

    }

 
    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>

                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Olá {user.name} essa é a sua Pokedex</HeaderTitle>
                    <Icon name="logou" size={50}/>

                </HeaderArea>

                <InputPokemonArea>
                    <PokenonInput 
                        placeholder="Qual pokemon você procura?"
                        placeholderTextColor="#000"
                        value={pokemonText}
                        onChangeText={t=>setPokemonText(t)}
                        onEndEditing={getPokemonByName}
                    
                    />
                    
                </InputPokemonArea>

                {loading &&
                    <LoadingIcon size="large" color="#FFF"/>
                }
                
                <ListArea>

                    {serchByName?
                        listPokemon.map((item,k)=>(
                            <PokemonItem key={k} onPress={() => hanldeSelectPokemonClick(item.id)}>
                                    <PokemonName>{item.name}</PokemonName>
                            </PokemonItem>
                        ))
                        :
                        listPokemon.map((item,k)=>(
                            <PokemonItem key={k} onPress={() => hanldeSelectPokemonClick(item.url)}>
                                    <PokemonName>{item.name}</PokemonName>
                            </PokemonItem>
                        ))
                    
                    }
                    
                </ListArea>

            </Scroller>

            <ModalPokedex
                show={showModal}
                setShow={setShowModal}
                pokemonName={pokemonName}
                pokemonImage={pokemonImage}
                pokemonHp={pokemonHp}
                pokemonAtq={pokemonAtq}
                pokemonDef={pokemonDef}
                pokemonVelo={pokemonVelo}
                pokemonHab={pokemonHab}
            />
        </Container>
    );
}



