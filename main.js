 
function generateRandomNumber() {
    const numbers1 = [1, 2, 3, 6];
    const result1 = numbers1[Math.floor(Math.random() * numbers1.length)];

    if(result1 === 1  ){
       // console.log(result1);
        document.querySelector(".dice1")
    . innerHTML= `<p class="Dice1"><img class="image1"src="images/images.jpg"></p>`;
    }
    else if(result1 === 2 ){
       // console.log(result1);
        document.querySelector(".dice1")
    . innerHTML= `<p class="Dice1"><img class="image1"src="images/images2.jpg"></p>`;
    }
    else if(result1 === 3){
       // console.log(result1);
        document.querySelector(".dice1")
    . innerHTML= `<p class="Dice1"><img class="image1"src="images/images3.jpg"></p>`;
    }
    else if(result1 === 6){
        //console.log(result1);
        document.querySelector(".dice1")
    . innerHTML= `<p class="Dice1"><img class="image1"src="images/images4.png"></p>`;
    }

    const numbers2 = [1, 2, 3, 6];
    const result2 = numbers2[Math.floor(Math.random() * numbers2.length)];
       
    if(result2 === 1  ){
        //console.log(result2);
        document.querySelector(".dice2")
    . innerHTML= `<p class="Dice1"><img class="image1" src="images/images.jpg"></p>`;
    }
    else if(result2 === 2 ){
       // console.log(result2);
        document.querySelector(".dice2")
    . innerHTML= `<p class="Dice1"><img class="image1" src="images/images2.jpg"></p>`;
    }
    else if(result2 === 3){
        //console.log(result2);
        document.querySelector(".dice2")
    . innerHTML= `<p class="Dice1"><img class="image1" src="images/images3.jpg"></p>`;
    }
    else if(result2 === 6){
       // console.log(result2);
        document.querySelector(".dice2")
    . innerHTML= `<p class="Dice1 "><img class="image1"src="images/images4.png"></p>`;
    }
}

document.querySelector(".js-randomno")
   .addEventListener('click', () => {
     generateRandomNumber();
});
 
const coordinates = {
    0: [3,7]
};

const length_box = 14.28;

const player = ['p1','p2'];

const playerpieceselements = {
    p1: document.querySelector('p1'),
    p2: document.querySelector('p2'),
}

 function setpieceposition(player,piece,newposition){

    if(!playerpieceselements[player] || !playerpieceselements[player][piece]){
        console.error("error");
        return;
    }
    const [x,y] = coordinates[newposition];

    const pieceElement = playerpieceselements[player][piece];

    pieceElement.style.top = y * length_box + '%';
    pieceElement.style.left = x * length_box + '%';
}

setpieceposition('p1',0,0);