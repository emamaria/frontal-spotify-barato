
let singerList = [];

window.onload = function(){
    init()

    const input$$ = document.querySelector("#searchInput")
    input$$.addEventListener("input", ()=> searchSingers()) 

  
}


const init = async() => {

    const singers  =  await getSingers()

    console.log(singers);

    mapSingers(singers)

   singerList = [...singers];

  


    flip()

   
    


    
}



const getSingers = async()=> {

    
      
         let singers = await fetch(`https://spotify-barato2.vercel.app/api/singers`)
    
         let resultSingers =  await singers.json()
    
    
        return  resultSingers 
    

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
 
    container.innerHTML += `<div >
    <div class="songs">
    <div class="singerFront  backFront" >
    <h1 class="singerName">${singer.name}</h1> 
    <img class="image" src=${singer.img}  alt="singerImage">
    <h2 class="singerYear">Country:   ${singer.country}</h2> 
   <h2 class="songStyle">Age:  ${singer.age}</h2> 
    </div>
    <div class="songsBack  backFront">
    <h2 class="songName">Song:   ${singer.songs[0].name}</h2>
   <h2 class="songYear">Releasing year:   ${singer.songs[0].year}</h2> 
   <h2 class="songStyle">Song style:   ${singer.songs[0].style}</h2> 
    </div>
   </div>
    
    </div>`
 
    
  }



  const flip = () => {


    const card = document.querySelectorAll('.songs');

    console.log(card);
  
    for(let i = 0; i < card.length; i++){
  
  
        card[i].addEventListener('click', function() {
            card[i].classList.toggle('is-flipped');
          });
  
    }

  }

 


 

  const searchSingers = () => {
    const input = document.querySelector('#searchInput');
    console.log(input.value.toLocaleLowerCase())
    console.log("singerlist", singerList);
   
    let container = document.querySelector("#singersContainer");

    container.innerHTML = "";
    const filterSinger = singerList.filter(singer =>(singer.name.toLowerCase().includes(input.value.toLowerCase())))
    mapSingers(filterSinger)


    flip()

 

}


