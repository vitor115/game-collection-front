j=0
window.onload = function(){
  callAPI('http://localhost:3000/game', 'GET', function(status, response){
      if (status === 200){
          const games = response.response

          for (var i=0; i<games.length; i++){
              addGame();
              document.getElementById('game_name'+i).innerText = games[i].title
              document.getElementById('game_dev'+i).innerText = games[i].publisher
              document.getElementById('game_img'+i).innerHTML = '<img class= "game_image" src="'+games[i].img+'" alt="">'
              document.getElementById('game_grade'+i).innerText = games[i].grade
              document.getElementById('game_review'+i).innerText = games[i].review
          }
      }
  
  });
}

function editGame(index){
  localStorage.setItem('index', index);
  location.href = "./details.html";

}
function newGame(){
  location.href = "./new_game.html";
}

function callAPI(url, method, callback, data){
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open(method, url, true);
  if (method == 'POST' || method == 'PATCH' || method == 'UPDATE'){
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
}
  xhr.onload = function(){
      callback(xhr.status, xhr.response);
  }

  if (data) {
      xhr.send( JSON.stringify(data) );
  } else {
      xhr.send();
  }
}



function abreNav(){
  document.getElementById("sideNav").style.width = "250px";
}

function closenav(){
  document.getElementById("sideNav").style.width = "0px";
}
  function addGame(){
      document.getElementById("games").innerHTML += ' <div class="container"> <div class="card"> <header class=jogo id="game"> <button class="edit_button" onclick="editGame('+j+')"><img src="img/edit.png" alt=""></button> <div class="title"> <p class="game_name" id="game_name'+j+'"> Far Cry 6 </p> <p class="game_dev" id="game_dev'+j+'"> Ubisoft </p> </div> <div class="gameBox" id="game_img'+j+'"> <img class= "game_image" src="img/far2.jpg" alt=""> </div> </header> <section class="review"> <div class="notas"> <div class="subnota"> <p class="titleNota">Nota</p> <div class="nota"> <h2 id="game_grade'+j+'"> 7.2 </h2> </div> </div> </div> <h3 class="titleReview">REVIEW</h3> <div id="style-1"> <div class="resumo scrollbar"> <p id="game_review'+j+'">  </p> </div> </div> </section> </div> </div>'
      j++
    }

