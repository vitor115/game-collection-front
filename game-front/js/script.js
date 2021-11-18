j=0
window.onload = function(){
  callAPI('http://localhost:3000/game', 'GET', function(status, response){
      if (status === 200){
          const posts = response.response
          var section = document.getElementById('games');
          var str = "";
          console.log(response)
          console.log(posts[0])

          for (var i=0; i<posts.length; i++){
              addGame();
              document.getElementById('game_name'+i).innerText = posts[i].title
              document.getElementById('game_dev'+i).innerText = posts[i].publisher
              document.getElementById('game_img'+i).innerHTML = '<img class= "game_image" src="'+posts[i].img+'" alt="">'
              document.getElementById('game_grade'+i).innerText = posts[i].grade
              document.getElementById('game_review'+i).innerText = posts[i].review
          }
      }
  
  });
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
      document.getElementById("games").innerHTML += '<div class="container"><div class="card"><header class=jogo id="game"><div class="title"><p class="game_name" id="game_name'+ j +'">Far Cry 6</p><p class="game_dev" id="game_dev'+j+'">Ubisoft</p></div> <div class="gameBox" id="game_img'+j+'"><img class= "game_image" src="img/far2.jpg" alt=""></div></header> <section class="review"><div class="notas"><div class="subnota"><p class="titleNota">Nota</p><div class="nota"><h2 id="game_grade'+j+'">7.2</h2></div></div></div> <h3 class="titleReview">REVIEW</h3><div  id="style-1"><div class="resumo scrollbar"><p id="game_review'+j+'">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium libero minus molestiae quo placeat magnam architecto minima aliquam voluptatibus! Dolorum excepturi, laudantium quia illo eos molestiae fuga id fugit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, incidunt. Ducimus voluptatem dolor molestias! Voluptatum sequi ab sit perspiciatis, eveniet natus quo dolores necessitatibus nostrum nam, sunt error vitae delectus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti voluptas aut cumque quae quam explicabo officia, illum perspiciatis ea quos sit! Tempore animi veritatis deserunt ad molestiae dicta pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, delectus assumenda natus recusandae atque totam ratione porro similique beatae nesciunt asperiores minima deleniti ipsa dolorum cupiditate tempora hic reiciendis ab? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore cum odio facere dolore sunt deleniti a. Ipsum modi, laudantium quos quidem ab aspernatur illum corporis vero laboriosam tempora facere beatae? </p></div></div></section></div></div>'
      j++
    }

