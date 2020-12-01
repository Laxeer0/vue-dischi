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
        genreList() {
            if (this.currentGenre == 'all') {
                return this.albums
            } else {
                return this.albums.filter(album => {
                    return album.genre.toLowerCase().includes(this.currentGenre.toLowerCase())
                })
            }
        },
        
    }

});