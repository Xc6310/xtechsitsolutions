let theService = document.querySelector('.the-service');
let infoBox = document.querySelectorAll('.info-box');
let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');
let pic4 = document.getElementById('pic4');
let pic5 = document.getElementById('pic5');
let pic6 = document.getElementById('pic6');
let btnOne = document.querySelector('.btn-one');
let btnTwo = document.querySelector('.btn-two');

let theService2 = ["pic1", "pic2", "pic3", "pic4", "pic5", "pic6",];
let details = theService2;
infoBox.innerHTML = theService2;
theService = infoBox;

btnOne.addEventListener('click', showBox);
btnTwo.addEventListener('click', showBox);

theService2.filter(showBox)

function showBox (){
for(let i = 0; i <= theService2.length; i++){
    infoBox.innerHTML = theService2
}
for(let i = 0; i >= theService2.length; i--){
    infoBox.innerHTML = theService2
}
(ifDetail)=>{
    let details = theService2
    if(details === pic1 || details === pic2 || details === pic3 || details === pic4 || details === pic5 || details === pic6){
        infoBox.innerHTML = theService2[i++]
    } else {
        infoBox.innerHTML = theService2[0]
    }
    return `${ifDetail} + ${theService2[i]}`
}
}


/* btnOne.addEventListener('click', function* next(){
    theService2 = yield
   yield pic1;
   yield pic2;
   yield pic3;
   yield pic4;
   yield pic5;
   return pic6;
})
let nextPic = next;
let pic1 = nextPic.next(pic1)
let pic2 = nextPic.next(pic2)
let pic3 = nextPic.next(pic3)
let pic4 = nextPic.next(pic4)
let pic5 = nextPic.next(pic5)
let pic6 = nextPic.next(pic6)
btnTwo.addEventListener('click', function* prev(){
    theService2 = yield
   yield pic1;
   yield pic2;
   yield pic3;
   yield pic4;
   yield pic5;
   return pic6;
})
let prevPic = prev;
let photo1 = prevPic.next(photo1)
let photo2 = prevPic.next(photo2)
let photo3 = prevPic.next(photo3)
let photo4 = prevPic.next(photo4)
let photo5 = prevPic.next(photo5)
let photo6 = prevPic.next(photo6) */;
