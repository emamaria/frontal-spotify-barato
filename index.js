window.onload = function(){
    init()

  
}


const init = async() => {

    const singers  =  await getSingers()

    console.log(singers);

    mapSingers(singers)

   

    
}



const getSingers = async()=> {

    
      
         let singers = await fetch(`https://spotify-barato2.vercel.app/api/singers`)
    
         let resultSingers =  await singers.json()
    
    
        return  resultSingers 
    

}


const getSongs = async()=> {

    
      
    let songs = await fetch(`https://spotify-barato2.vercel.app/api/songs`)

    let resultSongs =  await songs.json()


   return  resultSongs 


}





const mapSingers = (singers)=> {

 
    let mappedSingers = singers.map(singer => {
             return paintSingers({ name: singer.name, country: singer.country, age: singer.age, img: singer.img, songs: singer.songs})
 
   })
 
   console.log(mappedSingers);

   return mappedSingers
 
 
 }



 
 const paintSingers = (singer) => {

    let container = document.querySelector('#singersContainer')
 
    container.innerHTML += `<div class="songs">
    <h1 class="singerName">${singer.name}</h1> 
    <img class="image" src=${singer.img}  alt="singerImage">
    <h2 class="singerYear">Country:   ${singer.country}</h2> 
   <h2 class="songStyle">Age:  ${singer.age}</h2> 
   <h2 class="songName">Song:   ${singer.songs[0].name}</h2>
   <h2 class="songYear">Releasing year:   ${singer.songs[0].year}</h2> 
   <h2 class="songStyle">Song style:   ${singer.songs[0].style}</h2> 
    </div>`
 
    
  }