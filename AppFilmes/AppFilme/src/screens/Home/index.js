
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import BannerMovies from '../../components/bannerFilmes';
import CardMovies from '../../components/cardFilmes';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import Filmes from '../../data/movies'

import React,{useState, useEffect} from 'react';








export default function App() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try{
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=fd64a3925e5bdd7e06bf0547cf14e4f8&language=pt-BR&page=1');
        const data = await response.json();

        console.log(data.results)
        setMovies(data.results)

      }
      
      catch(error){
        console.log("requisição falhou", Error)
      }
    
    }
    getMovies();
  }, [])
  




  return (
    <View style={styles.container}>
     <Header> </Header>

     <SearchBar> </SearchBar>

     <BannerMovies> </BannerMovies>
     
    
     <View style = {{width :"90%"}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={movies}
            keyExtractor={(item) => item.id}
            
            
            renderItem={({ item }) => (


              <CardMovies
                titulo={item.title}
                imagem={item.poster_path}
                nota={item.nota}
              />
            )}
          />
        </View>
    
  

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:'center'
    
    
  },
});
