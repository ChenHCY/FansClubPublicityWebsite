/*Sing Dance Vlog Search feature part start*/
let searchBox = document.querySelector('#search-box');
let vdeios = document.querySelectorAll('.area .video-area .place');

searchBox.oninput = () =>{
   vdeios.forEach(hide => hide.style.display = 'none');
   let value = searchBox.value;
   vdeios.forEach(filter =>{
      let title = filter.getAttribute('data-title');
      if(value == title){
         filter.style.display = 'block';
      }
      if(searchBox.value == ''){
         filter.style.display = 'block';
      }
   });
};
/*Sing Dance Vlog Search feature part ends*/