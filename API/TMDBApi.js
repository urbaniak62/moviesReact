// import API_TOKEN from '../Helpers/token'
const API_TOKEN ='75fc3bb2adcaed86123eb7babe51521d'

export function getFilmsFromApiWithSearchedText(text){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text

        return fetch(url)
        .then((response)=>response.json())
        .catch((error)=>console.log(error))

}
export function getImageFromApi(name){
    return 'https://image.tmdb.org/t/p/w300' + name
}