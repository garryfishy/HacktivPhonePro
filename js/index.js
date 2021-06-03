// 1. bikin object awal
let hp = {
	name : 'Hacktiv Pro 99',
	price : '600',
	stock : 40,
}

let namaHp = document.getElementById('hpName');
let hargaHp = document.getElementById('harga');
let stockHp = document.getElementById('stock');
namaHp.innerHTML = hp.name;
hargaHp.innerHTML = hp.price;
stockHp.innerHTML = hp.stock;




// console.log(object)
let objCustomer = {}
let btnOrder = document.getElementById('orderNow');

// variable customer-details
let namaCustDetails = document.getElementById('namaCust')
let emailCustDetails = document.getElementById('emailCust')
let noHpCustDetails = document.getElementById('noHpCust')
let jumlahCustDetails = document.getElementById('jumlahItem')
let totalCostDetails = document.getElementById('totalHarga')

let divDetailsPurchased = document.getElementById('details-purchased')
btnOrder.addEventListener('click',(event) =>{
    event.preventDefault();
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let noHp = document.getElementById('noHp').value;
    let jumlahDiBeli = document.getElementById('jumlah').value;
    const totalCost = jumlahDiBeli * hp.price;
    console.log('ini total cost',totalCost)
    // create object
    objCustomer = {
        nama,
        email,
        noHp,
        jumlahDiBeli,
        totalCost,
    }

    // ngurangin stock hp dan update html stock hp
    hp.stock -= objCustomer.jumlahDiBeli
    stockHp.innerHTML = hp.stock

    // update div customer-details
    namaCustDetails.innerHTML = objCustomer.nama
    emailCustDetails.innerHTML = objCustomer.email
    noHpCustDetails.innerHTML = objCustomer.noHp
    jumlahCustDetails.innerHTML = objCustomer.jumlahDiBeli
    totalCostDetails.innerHTML = objCustomer.totalCost
    //show div detail purchased
    divDetailsPurchased.style.display = 'flex'
})

// function onChange
let elementJumlah = document.getElementById('jumlah')

elementJumlah.addEventListener('mouseout', () => {
    console.log(parseInt(elementJumlah.value,10), typeof parseInt(elementJumlah.value,10));
    if(parseInt(elementJumlah.value,10) < 1){
        alert('Jumlah yang ingin di order harus lebih dari 0')
    }
})


//accordion function forvar 
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 