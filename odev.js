/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

var car = {
  registrationNumber: 'GA12345',
  brand: 'Toyota',

  displayDetails: function () {
    console.log(this.registrationNumber + ' ' + this.brand);
  },
};

var myCarDetails = car.displayDetails.bind(car); // apply, call ya da arrow function da kullanılabilirdi. This keywordünün car objesini göstermesi gerekmekte
myCarDetails();

/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {
  if (typeof name !== 'string' || name === '') return false;
  name = name.replace(/\s+/g, ' ').trim(); // Bununla kelime arasında bulunan birden fazla boşlukları temizliyorum. Ayrıca cumle basında ve sonunda olabilecek boşlukları da temizliyorum

  return name.split(' ').every((word) => word.length > 1); //Bununla boşluklara bölüp her kelimenin en az 2 karakterli oldugunu kontrol ediyorum.
}

/* Test Cases */
// console.log(isValidName('')); //Fail
// console.log(isValidName(6)); //Fail
// console.log(isValidName('2 ')); //Fail
// console.log(isValidName('o   ozkercin')); //Fail
// console.log(isValidName('    orhan ozkercin')); //Pass
// console.log(isValidName('orhan    ozkercin')); //Pass
// console.log(isValidName('or oz')); //Pass

/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
};

function summary(genre, year) {
  console.log(`${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`);
}

summary.call(book); // Birinci örnekteki gibi this keywordü booku göstermeli, apply, bind da kullanılabilirdi.
