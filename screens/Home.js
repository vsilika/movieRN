import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import MoviePopular from '../components/MoviePopular';



function HomeScreen() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setMovies(data.results);
            });
    }, [])

    return (
        <ScrollView>
            {movies.map((movieReq) => <MoviePopular
                key={movieReq.id}{...movieReq}
            />)}
        </ScrollView>
    );
};





export default HomeScreen;