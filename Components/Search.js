import React from 'react';
import{StyleSheet,TextInput,View,Button,FlatList,Text} from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props){
        super(props)
        this.state= {films:[],
    }
    this.searchedText=""
    }

    _loadFilms(){
        if (this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => this.setState({films:data.results}))
        }
    }
 
    _searchTextInput(text){
        this.searchedText=text
    }

    render(){
        console.log("RENDER")
        return(
            <View style={styles.main_container}>
                <TextInput onChangeText={(text)=> this._searchTextInput(text)} style={styles.TextInput} placeholder="Titre du film"/>
                <Button  style={styles.Button} title="Rechercher" onPress={() => this._loadFilms()} />
                <FlatList
                    keyExtractor={(item)=> item.id.toString()}
                    data={this.state.films}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container:{
        flex:1,
        marginTop:20
    },
    TextInput:{
        marginLeft:5,
        marginRight:5,
        height:50,
        borderColor:'#000',
        borderWidth:1,
        paddingLeft:5
    },
    Button:{
        height:50
    }
})
export default Search