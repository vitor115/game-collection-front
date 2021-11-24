
function sendGame(){
    event.preventDefault();
    var img = document.getElementsByName("img")[0];
    var title = document.getElementsByName("title")[0];
    var publisher = document.getElementsByName("publisher")[0];
    var grade = document.getElementsByName("grade")[0];
    var review = document.getElementsByName("review")[0];
    console.log(review.value)
    if(title.value != "" && img.value != "" && publisher.value != "" && grade.value != "" && review.value != "" ){
        if(grade.value>=0 && grade.value <=10){
            let newGame = {
                img: img.value,
                title: title.value,
                publisher: publisher.value,
                grade: grade.value,
                review:review.value
            }
            console.log(newGame);
            callAPI("http://localhost:3000/game",'POST', function(status, response){
                if(status === 201){
                    alert('Game criado com sucesso');
                    location.href = "./index.html";
                }else{
                    alert("Não foi possível criar o Game tente novamente mais tarde");
                }    
            
                }, newGame)
        }else{
            alert("A nota deve estar entre 0 a 10!");
        }    
    }else{
        alert("Preencha todos os campos!");
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