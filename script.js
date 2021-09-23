/*Tangkap dan simpan  elemen input nya  */
const input = document.getElementById("number");
/*Tangkap dan simpan untuk elemen outputnya  */
const output = document.getElementById("result");

/*buat fungsi untuk bilangan genap */
function evens() {
  /* simpan dan ubah tipe data dalam variabel baru */
  let even = parseInt(input.value);
  /* buat variabel penampung nilai*/
  let resultEven = "";
  /* looping variabel input*/
  for (let i = 1; i <= even; i++) {
    /*buat pengkondisian bilangan genap */
    if (i % 2 == 0) {
      /*tambahkan hasil dari pengkondisian ke variabel penampung */
      resultEven += `.${i} `;
    }
  }
  /*injek variabel penampung pd output html */
  output.innerHTML = resultEven;
}

/*buat fungsi ganji */
function odds() {
  /* simpan dan ubah tipe data dalam variabel baru */
  let odd = parseInt(input.value);
  /* buat variabel penampung nilai*/
  let resultOdd = "";
  /* looping variabel input*/
  for (let x = 1; x <= odd; x++) {
    /*buat pengkondisian bilangan ganjil */
    if (x % 2 == 1) {
      /*tambahkan hasil dari pengkondisian ke variabel penampung */
      resultOdd += ` .${x}`;
    }
  }
  /*injek variabel penampung pd output html */
  output.innerHTML = resultOdd;
}
/*buat fungsi prima */
function primes() {
  /* simpan dan ubah tipe data dalam variabel baru */
  let prime = parseInt(input.value);
  /* buat variabel penampung nilai*/
  let resultPrime = "";
  /* looping variabel input*/
  for (let y = 1; y <= prime; y++) {
    /*buat variabel pembagi u/n hasil pengkondisian */
    let division = 0;
    /*loping hasil dr lopingan input*/
    for (let z = 1; z <= y; z++) {
      /*pengkondisian untuk penentu bilangan prima pertama */
      if (y % z == 0) {
        division++;
      }
    }
    /*pengkondisian untuk penentu bilangan prima kedua */
    if (division == 2) {
      resultPrime += ` .${y}`;
    }
  }
  /*injek variabel penampung pd output html */
  output.innerHTML = resultPrime;
}
