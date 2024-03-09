// Q 40 
function make_album(artist_name : string, album_title: string, number_of_tracks?: number ): object {
	const music_album : {"Artist name" : string, "Album Title": string, tracks?: number } =  {
    	"Artist name": artist_name,
        "Album Title": album_title
    }
    if(number_of_tracks){
    	music_album["tracks"] = number_of_tracks;
    }
    
    return music_album;
}

console.log(make_album("abc", "xyz"));
console.log(make_album("abc", "xyz"));
console.log(make_album("abc", "xyz",45));