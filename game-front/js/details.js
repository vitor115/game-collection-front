j=0
var games;
formData= new FormData();
window.onload = function(){
  callAPI('http://localhost:3000/game', 'GET', function(status, response){
      if (status === 200){
          games = response.response
          event.preventDefault();
          console.log(response);
          console.log(localStorage.getItem('index'));
          console.log(games[localStorage.getItem(localStorage.getItem('index'))]);
          document.getElementsByName('img')[0].value=games[localStorage.getItem('index')].img;
          document.getElementsByName('title')[0].value=games[localStorage.getItem('index')].title;
          document.getElementsByName('publisher')[0].value=games[localStorage.getItem('index')].publisher;
          document.getElementsByName('grade')[0].value=games[localStorage.getItem('index')].grade;
          document.getElementsByName('review')[0].value=games[localStorage.getItem('index')].review;   
      }
  });
}


function sendUpdate(){
    event.preventDefault();
    var newGame = games[localStorage.getItem('index')];
    var img = document.getElementsByName("img")[0].value;
    var title = document.getElementsByName("title")[0].value;
    var publisher = document.getElementsByName("publisher")[0].value;
    var grade = document.getElementsByName("grade")[0].value;
    var review = document.getElementsByName("review")[0].value;


    newGame.img = img;
    newGame.title = title;
    newGame.publisher = publisher;
    newGame.grade = grade;
    newGame.review = review;

    if(grade>=0 && grade<=10){
        newGame.grade = grade;
        callAPI("http://localhost:3000/game",'PATCH', function(status, response){
        if(status === 200){
            
            alert('Game atualizado com sucesso');
            location.href = "./index.html";
        }else{
            alert("Não foi possível atualizar o Game");
        }    
    
    }, newGame)
    }
    else{
        alert("A nota deve estar entre 0 a 10!");
    }

    console.log(newGame); 
}

function editGame(index){
    localStorage.setItem('index', index);
    location.href = "./details.html";
  
}

function deleteGame(){
    var confirmed = confirm("Tem certeza que quer apagar o Jogo?")
    if(confirmed){
        callAPI("http://localhost:3000/game/"+games[localStorage.getItem('index')].id,'DELETE', function(status, response){
            if(status === 200){
                alert("Jogo deletado com sucesso");
                location.href = "./index.html";

            }else{
                alert("Não foi possivel apagar o jogo tente novamente mais tarde")
            }

        })
    }
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
  
  