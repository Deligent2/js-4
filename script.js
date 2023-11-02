// const a ='google.com'
// const b =a.includes('.');
// const c =a.includes('com')
// console.log(b)
// console.log(c)


// const a = 'gangster'
// const b = a.length;
// const c = b % 2 === 0 && b <= 8 && b >= 4
// console.log(b)
// console.log(c)


// let a = 'loremipsumdolorsitamet'
// console.log(a.split('') .map((el, idx) => idx % 2 === 0 ? 'e' : el) .join(''))


// function myfunction(password1, password2) {
//     const P1 = password1.trim();
//     const P2 = password2.trim();
//     const a= P1 === P2;
//     const b= !P1.startsWith(' ') && !P2.startsWith(' ');
// if (a && b) {
//     return 'welcome';
// } else {
//     return 'not correct'
// }
// }
// console.log(myfunction('ar1313', 'ar1313'))



// let a = ['Lorem', 'ipsum', 'dolor', 'sit'];
// let wordLengths = [];
// for (let i = 0; i < a.length; i++) {
//     let word = a[i];
//     wordLengths.push(word.length);
// }
// console.log(wordLengths);


// let a = ['Lorem', 'ipsum', 'dolor'];
// let wordIndexes = [];
// for (let i = 0; i < a.length; i++) {
//     let word = a[i];
//     wordIndexes.push(i + 1 )
// }
// console.log(wordIndexes);

// let a = ['Lorem', 'ipsum', 'dolor',];
// console.log(a.map((el, idx ) => idx !== 1 ? el[0].toUpperCase() + el.slice(1) : el ));

// const words = ['lorem', 'ipsum', 'dolor'];
// const a = words.map(word => word.toUpperCase());
// console.log(a);

// const arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// const result = arr.join('-');
// console.log(result); 

// const arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// const result = arr.join('/');
// console.log(result); 


// const arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// const result = arr.join(' ');
// console.log(result); 


// const a = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']; 
//   const b = a.filter((word) => word.includes("i")); 
//   console.log(b);


// const a = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// const b = a.filter((word) => word.toLowerCase().includes('i') || word.toLowerCase().includes('d'));
// console.log(b);


// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// arr.push('consectetur', 'adipiscing', 'elit');
// console.log(arr);


//  let arr =  [123, 33, 444, '22', 55, 66, 77, 88, 99]
//  console.log(arr.filter(el => typeof el === 'number'))


// let arr = [123, 33, 444, '22', 55, 66, 77, 88, 99]
// console.log(arr.map(el => {
//     if (typeof el === 'string') {
//         return Number(el)
//         } else {
//            return el
//         }
// }))


// const arr = ['null', undefined, 0, false, true, '']; 
// const filteredArr = arr.filter(value => value === 0 || value === false  || value === true); 
 
// console.log(filteredArr);

// const arr = ['null', undefined, 0, false, true, '']; 
// const filteredArr = arr.filter(value => value === true  || value === 'null'); 
 
// console.log(filteredArr);


// const arr = [1123, 'qwe'];
// const newArr = arr.concat(arr);
// console.log(newArray);


// const arr = [null, undefined];
// const newArr = arr.concat(arr);
// console.log(newArr);



// const str = 'lorem ipsum dolor sit amet';
// const arr = str.split(' ');
// const filterArr = [
//     arr[0] + ' ' + arr[2],
//     arr[4]
//   ];
// const result = filterArr.join(' ');
// console.log(arr)
// console.log(result);
