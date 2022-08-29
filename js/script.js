const app = document.getElementById('app-music'),
imgMusic = app.querySelector('.img-artist_music img'),
musicName = app.querySelector('.info_music'),
musicArtista = app.querySelector('.name_artist'),
mainAudio = app.querySelector('#main-audio');

let playPaused = document.querySelector('.btn_play');
let prev = document.querySelector('.btn_previous');
let next = document.querySelector('.btn_next');





let musicIndex = 1;

window.addEventListener('load', ()=>{
    //Llamo la funcion para que se cargue cuando se actualice la pagina
    loadMusic(musicIndex);
});

//Funcionpara cargar la musica
function loadMusic(indexNumb){
    musicName.innerText = artistas[indexNumb - 1].nombre;
    musicArtista.innerText = artistas[indexNumb - 1].artista;
    imgMusic.src = `imagenes/${artistas[indexNumb - 1].img}`;
    mainAudio.src = `imagenes/${artistas[indexNumb - 1].src}`;
}

//Play Music Function

function playMusic(){
    app.classList.add('paused');
    playPaused.querySelector('i').setAttribute("class", "fa-solid fa-pause");  
    mainAudio.play();
}

function pauseMusic(){
    app.classList.remove('paused');
    playPaused.querySelector('i').setAttribute("class", "fa-solid fa-play");
    mainAudio.pause();
}




playPaused.addEventListener('click', ()=>{
    const isMusicPaused = app.classList.contains('paused');

    //Si isMusicPaused es true entonces llama a playMusic
   // isMusicPaused ?,  : 
    
    if(isMusicPaused){
         pauseMusic();
         
    }else{
        playMusic();
        
    }


});

