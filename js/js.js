
const btnGen = document.querySelector("#btn-generate-qrcode");
const qrCodeBox = document.querySelector(".qr-code");
const qrInput = document.querySelector("#addres-in");
const qrimg = document.querySelector("#qr-img");

btnGen.addEventListener('click' , ()=>{
    let qrValue = qrInput.value;
    if(!qrValue){
        return alert('لطفا یه متن یا آدرس رو وارد بکن .')
    }

     btnGen.innerHTML = 'درحال دریافت QR code';
     qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
     qrimg.addEventListener('load' , ()=>{
        qrCodeBox.classList.remove("hidden");
        btnGen.innerHTML = "تولید QR code";
     })
     

})

qrInput.addEventListener('keyup' , ()=>{
    if(!qrInput.value){
        qrCodeBox.classList.add("hidden");
    }
})