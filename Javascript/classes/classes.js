// class ImaClass{
//     constructor(color,size){
//         this.color = color;
//         this.size = size;
//     }
//     //adding a method
//     startEngine(){
//         this.isRunning = true;
//     }
// }

// function OtherCar(color){
//     this.color = color;
//     this.isRunning = false;

// }


classTemp = (temp) => {
    if(temp < 70) {
        speakToMarty = "please turn up heat 🔥";
    }else {
        speakToMarty ="thanks 😎";
    };
    console.log(speakToMarty);
};

classTemp(-32);