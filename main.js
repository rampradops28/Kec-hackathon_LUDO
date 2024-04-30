 const pl1pos = [
    [80, 610],
    [155, 610],
    [230, 610],
    [305, 610],
    [305, 535],
    [305, 460],
    [305, 385],
    [305, 310],
    [305, 235],
    [305, 160],
    [230, 160],
    [155, 160],
    [80, 160],
    [5, 160],
    [-70, 160],
    [-145, 160],
    [-145, 235],
    [-145, 310],
    [-145, 385],
    [-145, 460],
    [-145, 535],
    [-145, 610],
    [-70, 610],
    [5, 610],
    [-70, 535],
    [-70, 460],
    [-70, 385],
    [-70, 310],
    [-70, 235],
    [5, 235],
    [80, 235],
    [155, 235],
    [230, 235],
    [230, 310],
    [230, 385],
    [230, 460],
    [230, 535],
    [155, 535],
    [80, 535],
    [5, 535],
    [5, 460],
    [5, 385],
    [5, 310],
    [80, 310],
    [155, 310],
    [155, 385],
    [155, 460],
    [80, 460],
    [80, 385],
];
console.log(pl1pos.length);
 const pl2pos = [
    [200, 380],
    [200, 305],
    [200, 230],
    [200, 155],
    [125, 155],
    [50, 155],
    [-25, 155],
    [-100, 155],
    [-175, 155],
    [-250, 155],
    [-250, 230],
    [-250, 305],
    [-250, 380],
    [-250, 455],
    [-250, 530],
    [-250, 605],
    [-175, 605],
    [-100, 605],
    [-25, 605],
    [50, 605],
    [125, 605],
    [200, 605],
    [200, 530],
    [200, 455],
    [125, 530],
    [50, 530],
    [-25, 530],
    [-100, 530],
    [-175, 530],
    [-175, 455],
    [-175, 380],
    [-175, 305],
    [-175, 230],
    [-100, 230],
    [-25, 230],
    [50, 230],
    [125, 230],
    [125, 305],
    [125, 380],
    [125, 455],
    [50, 455],
    [-25, 455],
    [-100, 455],
    [-100, 380],
    [-100, 305],
    [-25, 305],
    [50, 305],
    [50, 380],
    [-25, 380],
]
console.log(pl2pos.length);
 const pl3pos = [
    [25, 150],
    [-50, 150],
    [-125, 150],
    [-200, 150],
    [-200, 225],
    [-200, 300],
    [-200, 375],
    [-200, 450],
    [-200, 525],
    [-200, 600],
    [-125, 600],
    [-50, 600],
    [25, 600],
    [100, 600],
    [175, 600],
    [250, 600],
    [250, 525],
    [250, 450],
    [250, 375],
    [250, 300],
    [250, 225],
    [250, 150],
    [175, 150],
    [100, 150],
    [175, 225],
    [175, 300],
    [175, 375],
    [175, 450],
    [175, 525],
    [100, 525],
    [25, 525],
    [-50, 525],
    [-125, 525],
    [-125, 450],
    [-125, 375],
    [-125, 300],
    [-125, 225],
    [-50, 225],
    [25, 225],
    [100, 225],
    [100, 300],
    [100, 375],
    [100, 450],
    [25, 450],
    [-50, 450],
    [-50, 375],
    [-50, 300],
    [25, 300],
    [25, 375]
];

 const pl4pos = [
    [-310, 375],
    [-310, 450],
    [-310, 525],
    [-310, 600],
    [-235, 600],
    [-160, 600],
    [-85, 600],
    [-10, 600],
    [65, 600],
    [140, 600],
    [140, 525],
    [140, 450],
    [140, 375],
    [140, 300],
    [140, 225],
    [140, 150],
    [65, 150],
    [-10, 150],
    [-85, 150],
    [-160, 150],
    [-235, 150],
    [-310, 150],
    [-310, 225],
    [-310, 300],
    [-235, 225],
    [-160, 225],
    [-85, 225],
    [-10, 225],
    [65, 225],
    [65, 300],
    [65, 375],
    [65, 450],
    [65, 525],
    [-10, 525],
    [-85, 525],
    [-160, 525],
    [-235, 525],
    [-235, 450],
    [-235, 375],
    [-235, 300],
    [-160, 300],
    [-85, 300],
    [-10, 300],
    [-10, 375],
    [-10, 450],
    [-85, 450],
    [-160, 450],
    [-160, 375],
    [-85, 375]

];
console.log(pl4pos.length);
let attempt =1;
let cSet =1;
let canMove = false;
let spy1=false;
let spy2=false;
let spy3=false;
let spy4=false;

let p11pos = -1;
let p22pos = -1;
let p33pos = -1;
let p44pos = -1;
let p1pos = -1;
let p2pos = -1;
let p3pos = -1;
let p4pos = -1;
let res='';
let result1='';
let result2='';
//const wd = window.screen.width;

function generateRandomNumber() {
    const numbers1 = [1, 2, 3, 0,1,1];
     result1 = numbers1[Math.floor(Math.random() * numbers1.length)];
    

    if (result1 === 1) {
        document.querySelector(".dice1").innerHTML = `<p class="Dice1"><img class="image1"src="images/images.jpg"></p>`;
    } else if (result1 === 2) {
        document.querySelector(".dice1").innerHTML = `<p class="Dice1"><img class="image1"src="images/images2.jpg"></p>`;
    } else if (result1 === 3) {
        document.querySelector(".dice1").innerHTML = `<p class="Dice1"><img class="image1"src="images/images3.jpg"></p>`;
    } else if (result1 === 0) {
        document.querySelector(".dice1").innerHTML = `<p class="Dice1"><img class="image1"src="images/images4.png"></p>`;
    }

     result2 = numbers1[Math.floor(Math.random() * numbers1.length)];

    if (result2 === 1) {
        document.querySelector(".dice2").innerHTML = `<p class="Dice1"><img class="image1" src="images/images.jpg"></p>`;
    } else if (result2 === 2) {
        document.querySelector(".dice2").innerHTML = `<p class="Dice1"><img class="image1" src="images/images2.jpg"></p>`;
    } else if (result2 === 3) {
        document.querySelector(".dice2").innerHTML = `<p class="Dice1"><img class="image1" src="images/images3.jpg"></p>`;
    } else if (result2 === 0) {
        document.querySelector(".dice2").innerHTML = `<p class="Dice1 "><img class="image1"src="images/images4.png"></p>`;
    }

    resultDisp();

    function resultDisp() {
        if (result1 === 0 && result2 === 0) {
            res = 12;
        } else {
            res = result1 + result2;
        }
        console.log(res);
    }
    switch(cSet){
        case 1:
            p1pos += res;
            p11pos += res;
            break;
        case 2:
            p2pos += res;
            p22pos += res;
            break;
        case 3:
            p3pos += res;
            p33pos += res;
            break;
        case 4:
            p4pos += res;
            p44pos += res;
            break;
    }

    enableSet(cSet);
    canMove=true;
    document.querySelector(".js-randomno").disabled = true;
    attempt +=1;
}
function enableSet(sNo){
    if (sNo===1)   {
        if(p1pos<0){
            p1pos=0;
        }
        if(p11pos<0){
            p11pos=0;
        }
        document.getElementById('p1').setAttribute('onclick',`moveNum('p1',${pl1pos[p1pos][0]+115},${pl1pos[p1pos][1]})`);
        
        document.getElementById('p11').setAttribute('onclick',`moveNum('p11',${pl1pos[p11pos][0] + 60},${pl1pos[p11pos][1]})`);
    }
    else if (sNo===2) {
        if(p2pos<0){
            p2pos=0;
        }
        if(p22pos<0){
            p22pos=0;
        }
        document.getElementById('p2').setAttribute('onclick',`moveNum('p2',${pl2pos[p2pos][0] },${pl2pos[p2pos][1]})`);
        document.getElementById('p22').setAttribute('onclick',`moveNum('p22',${pl2pos[p22pos][0] -60},${pl2pos[p22pos][1]})`);
    }
    else if (sNo===3) {
        if(p3pos<0){
            p3pos=0;
        }
        if(p33pos<0){
            p33pos=0;
        }
        document.getElementById('p3').setAttribute('onclick',`moveNum('p3',${pl3pos[p3pos][0] + 55},${pl3pos[p3pos][1]})`);
        document.getElementById('p33').setAttribute('onclick',`moveNum('p33',${pl3pos[p33pos][0]},${pl3pos[p33pos][1]})`);
    }
    else{
        if(p4pos<0){
            p4pos=0;
        }
        if(p44pos<0){
            p44pos=0;
        }
        document.getElementById('p4').setAttribute('onclick',`moveNum('p4',${pl4pos[p4pos][0]-55},${pl4pos[p4pos][1]})`);
        document.getElementById('p44').setAttribute('onclick',`moveNum('p44',${pl4pos[p44pos][0]-100},${pl4pos[p44pos][1]})`);
    }
}
function moveNum(id,loffs,toffs){
    if(canMove){
        const im = document.getElementById(id);
        console.log(loffs,toffs);
        if(!(id == 'p1'&& p1pos-res == -1 || id == 'p2' && p2pos-res == -1 || id == 'p3' && p3pos-res == -1 || id == 'p4' && p4pos-res == -1)||(id=='p1'&&p1pos==0&&p11pos !=0 || id=='p2' && p2pos==0 && p22pos !=0 || id=='p3' && p3pos==0 && p33pos !=0 || id=='p4' && p4pos==0 && p44pos !=0)){
         
            
            im.style.top = toffs + 'px';
            im.style.left = loffs + 'px';
            canMove = false
            document.querySelector(".js-randomno").disabled = false;
            if (cSet===1) {
                document.getElementById('p1').removeAttribute('onclick');
                document.getElementById('p11').removeAttribute('onclick');
            }
            else if (cSet===2) {
                document.getElementById('p2').removeAttribute('onclick');
                document.getElementById('p22').removeAttribute('onclick');
            }
            else if (cSet===3) {
                document.getElementById('p3').removeAttribute('onclick');
                document.getElementById('p33').removeAttribute('onclick');
            }
            else if (cSet===4) {
                document.getElementById('p4').removeAttribute('onclick');
                document.getElementById('p44').removeAttribute('onclick');
            }
            cSet= cSet=== 4? 1 : cSet+1;
            switch(id){
                case 'p1':
                    p11pos -= res;
                    break;
                case 'p11':
                    p1pos -= res;
                    break;
                case 'p2':
                    p22pos -= res;
                    break;
                case 'p22':
                    p2pos -= res;
                    break;
                case 'p3':
                    p33pos -= res;
                    break;
                case 'p33':
                    p3pos -= res;
                    break;
                case 'p4':
                    p44pos -= res;
                    break;
                case 'p44':
                    p4pos -= res;
                    break;
            }
        }
    }
}


document.querySelector(".js-randomno").addEventListener('click', generateRandomNumber);
