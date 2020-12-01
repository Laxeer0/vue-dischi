var root = new Vue({
    el: '#root',
    data: {
        apiUrl: "https://flynn.boolean.careers/exercises/api/array/music",
        albums: [],
        currentGenre: 'all',

    },
    created() {
        axios.get(this.apiUrl)
        .then((response) => {
            this.albums = response.data.response
        });
    
    },
    computed: {
        genreList(){
            return this.albums.filter(album => {
                if(this.currentGenre == 'all'){
                    return album.genre
                }else{
                    return album.genre.toLowerCase().includes(this.currentGenre.toLowerCase()) 
                }
            })
        }
    }

});