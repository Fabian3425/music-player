const app = document.getElementById('app-music'),
imgMusic = app.querySelector('.img-artist_music img'),
musicName = app.querySelector('.info_music'),
musicArtista = app.querySelector('.name_artist'),
mainAudio = app.querySelector('#main-audio');

let playPaused = document.querySelector('.btn_play');
let btnPrev = document.querySelector('#btn-prev');
let btnNext = document.querySelector('#btn-next');
let progressArea = document.querySelector('.progress_area');
let progressBar = document.querySelector('#progressBar');



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

//funccion de siguiente cancion
function nextMusic(){
    musicIndex++;
    musicIndex > artistas.length ? musicIndex = 1 : musicIndex = musicIndex;
    
    loadMusic(musicIndex);
    playMusic();

};
function prevMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = artistas.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();

};


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

btnNext.addEventListener('click', ()=>{
    nextMusic(); //Llamo a la siguiente cancion 

});

btnPrev.addEventListener('click', ()=>{
    prevMusic(); //Llamo a la siguiente cancion 

});




mainAudio.addEventListener('timeupdate', (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progresssWidth  = (currentTime / duration) * 100;
    progressBar.style.width = `${progresssWidth}%`;

    let musicCurrentTime = app.querySelector('.current'),
        musicDuration = app.querySelector('.duraccion');

    mainAudio.addEventListener('loadeddata', ()=>{
        


        let audioDuration = mainAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);

        if(totalSec < 10){
            totalSec = `${totalSec}`
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;
    });


        //Actualizar tiempo Actual

        let currentMin = Math.floor(currentTime / 60);
        let currentSec = Math.floor(currentTime % 60);

        if(currentSec < 10){
            currentSec = `0${currentSec}`
        }
        musicCurrentTime.innerText = `${currentMin}:${currentSec}`;

        progressArea.addEventListener('click', (e)=>{
            let progresssWidthval = progressBar.clientWidth;
            let clickedOffSetX = e.offsetX;
            let songDuration = mainAudio.duration;

            mainAudio.currentTime = (clickedOffSetX / progresssWidthval) * songDuration;
            playMusic();
        });
});



