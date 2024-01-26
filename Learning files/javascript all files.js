/*
// 01
// Primitive data types.
console.log('Primitive & objects.');
// let a = null;
// let b = 23;
let c = true;
let d = BigInt('500');
let e = "harry";
let f = Symbol("I am a good boy.");
let g = undefined;
console.log(c, d, e, f, g);

// Non primitive data types.
const object = {
    "aman": true,
    "subh": false,
    "lovish": 67,
    "rohan": undefined,
}
console.log(object["lovish"]);

// 02
// operators and Expressions.
// Arithmatic operators.
let a = 2;
let b = 2;
console.log("a + b", a + b);
console.log("a - b", a - b);
console.log("a * b", a * b, 'Multiply');
console.log("a / b", a / b);
console.log("a ** b", a ** b, 'yaha pe matlab ki a ki power 2 ho gya.');

// increment & decrement operators
console.log("++a", ++a); // a me pahle ek jodega fir print hoga.
console.log("a++", a++); // pahle print hoga fir jodega.
console.log("--a", --a); // a me pahle ek ghatyega fir print hoga
console.log("a--", a--); // pahle print hoga fir ghatyega.
console.log("a", a);
console.log("a--", a--); // pahle print hoga fir ghatyega.
console.log("a", a);

// Assignment operators.
console.log(a, "abhi a ki value 10 hai.");
a += 5; console.log(a, "a 10 tha to 5 jodne pe 15.");
a -= 5; console.log(a, "a 15 ho gya hai ab to 5 minus pe fir se 10 ho gya.");
a *= 5; console.log(a, "Ye a ko 5 se multiply kar dega.");
a /= 5; console.log(a, "ye a ko 5 se divide kar dega.");

// Comparison operators.
console.log(a == b, 'barabar hai');
console.log(a != b, 'barabar nhi hai');
console.log(a === b, 'barabar hai lekin ye bhi check karta hai ki kya dono string hi hai ya nhi');
console.log(a !== b, 'barabar nhi hai lekin ye bhi check karta hai ki kya dono string hi hai ya nhi');
console.log(a > b, 'greatyer than');
console.log(a < b, 'smaller than');
console.log(a <= b, 'smaller than or equal to');
console.log(a >= b, 'greater than or equal to');

// Logical operators.
console.log(a == b && b > a, 'jab tak dono sach nhi ho jaati tab tak false hi ayega jab dono sach ho jayegi tab true ho jayega');
console.log(a == b || b > a, 'Agar dono me se ek bhi sach ho gyi to true aa jayega');
console.log(!false, 'matlab ki check kar rahe hai ki false to nhi hai na aur agar false nhi rahega to true ayega nhi to false');
console.log(!true, 'matlab ki check kar rahe hai ki false to nhi hai na aur agar false nhi rahega to true ayega nhi to false');

// // Conditional in expressions.
// if else and nested if else.

let userAge = parseInt(prompt("Enter your age:"));
if (userAge > 18) {
    console.log("You can drive your car.");
} else if (userAge > 10) {
    console.log("You can drive your car but very carefully because you are a kid .");
} else {
    console.log("You can not drive your car.");
}
// Ternary operators.

let ternaryAge = parseInt(prompt("Enter your age:"))
console.log(ternaryAge > 18 ? "You can do this." : "you can not do this.");

// test started
// 01
console.log(userAge > 18 ? "you can drive your car" : "you can not drive your car");
// 02
let age = prompt("Enter your age:");
console.log(age > 10 && age < 20 ? "you are eligible for game play" : "you are not eligible for game play");

// 03
let number1 = parseInt(prompt("Enter a number:"));
switch (number1) {
    case 10:
        console.log(`Your age is ${number1}`);
        break;
    case 20:
        console.log(`Your age is ${number1}`);
        break;
    case 30:
        console.log(`Your age is ${number1}`);
        break;
    case 40:
        console.log(`Your age is ${number1}`);
        break;
    case 50:
        console.log(`Your age is ${number1}`);
        break;
    case 60:
        console.log(`Your age is ${number1}`);
        break;
    case 70:
        console.log(`Your age is ${number1}`);
        break;
    case 80:
        console.log(`Your age is ${number1}`);
        break;
    case 90:
        console.log(`Your age is ${number1}`);
        break;
    default:
        console.log(`May be you are recently born.`);
        break;
};

// // Loops
// for loop.

let sum = 0;
let n = parseInt(prompt("Enter your number:"));
for (let i = 0; i < n; i++) {
    sum += (i + 1)
    console.log(sum);
};

let obj = {
    aman: 60,
    shivam: 50,
    harry: 90
}
// for in loop.
for (let a in obj) {
    console.log(`max of ${a} is ${obj[a]}`);
};

console.log("string methods.")
let name1 = '         aman and murli          ';
console.log(name1.length); // string ki lenght pata chl jayegi.
console.log(name1.toLowerCase()); // saare words lower case me ho jaynge.
console.log(name1.toUpperCase()); // saare words upper case me ho jaynge.
console.log(name1.slice(9, 13)); // isme do arguments de sakte hai pahle kaha se dusra kaha tak.
console.log(name1.slice(5)); // issi me agar shuru me de denge last vala nhi denge to poori string mil jaygi.
console.log(name1.replace('aman', 'crorepati')); // iski madad se replace kar sakte hai.
console.log(name1.trim()); // ye space ko khatam kar deta hai lekin sirf aage piche se bich me nhi.
console.log(name1.concat(" is the ", "Greatest name ", "in the world")); // iski madad se add kar sakte hai.
// quick quiz
for (let index = 0; index < name1.length; index++) {
    const element = name1[index];
    console.log(element);
}

// // Array & array methods.
let numberArray = [18, 52, 3, 44, 87, 76, [98, 89, 98,]];
let num_more = [11, 12, 13, 144, 176, 187, [98, 89, 98,]];

console.log(numberArray);
console.log(numberArray.toString()); // Koi bhi format ho usko string me convert kar dega.
console.log(parseInt(numberArray)); // Agar koi number hai to integer me convert kar dega.
console.log(numberArray.join("-")); // Ye array ke har element ke bich apke dwara diye gaye ek seprator laga ke unko jod dega.
console.log(numberArray.pop()); // Array ke pichhe ke ek element ko gayab kar dega.
console.log(numberArray.push('Added with push method.')); // Array me piche se ek element jodega joki aapke dwara diya jayega.
console.log(numberArray.shift()); // Array ke aage se ek element ko uda dega.
console.log(numberArray.unshift('Added with unshift method.')); // Array ke aage se ek element ko jod dega joki aapke dwaara diya jayega.
delete numberArray[0]; // jobhi index denge usko delte kar dega lekin uski jagah ko khali karega sirf gayab nhi karega aur usko length bhi nhi badlegi.
console.log(numberArray.concat(num_more)); // Maan lo do array hai aur aur unko jodna hai to concat ka use karke jod sakte hai.
const compare = (a, b) => {
    return a - b
}
console.log(numberArray.sort(compare)); // sort ki madad se ham sort kar sakte hai aur isme ham log function bhi likh sakte hai ki kaise sorting karvana hai age se ki kuchh bhi kar skate hai.
console.log(numberArray.reverse(compare)); // Ye reverse ka ekdamad values bhi dena hai aur jo values denge vo un kati huyi values pe chali jayengi.'); // Splice ki madad se ham log array ke andar koi bhi value ko change kar sakte hai.
let name2 = 'aman';
console.log(Array.from(name2));

// // Using loops with arrays
for (const i of numberArray) {
    console.log(i);
};
for (const i in numberArray) {
    console.log(i);
}
// // map, filter, reduce.
// map ka use karke new modifiesd array bana sakte hai lekin ham log existing array ko change nhi kar sakte hai
let mapArray = [9, 8, 7, 6, 5, 4, 3, 2, 1]
let mapFunction = mapArray.map((value, index, array) => {
    // console.log(value, index, array);
    console.log(value + 1);
    return value + index;
});
console.log(mapFunction);
// Filter ki  madad se ham dhundh sakte hai ki agar numbers me jo number 5 se kam ho unko dedo to mil jaynge
let filterFuction = mapArray.filter((value) => {
    return value < 5
})
console.log(filterFuction);
// Reduce me do parameters dena padta hai aur ye un dono parameters ko aap jo kahenge vo kar dega add sub chahe jo aur aise chalta rahega jab tak array end nhi ho jata hai
let reduceFuction = mapArray.reduce((value1, value2) => {
    return value1 + value2;
})
console.log(reduceFuction);

// // prcatice no 1.
let anArray = [10, 30, 20, 5, 8, 7,];
let number = parseInt(prompt("Enter your number:-"));
console.log(anArray);
anArray.push(number);
console.log(anArray);

// prcatice no 2.
const addNumber = () => {
    let number = parseInt(prompt("Enter your number:-"));
    console.log(anArray);
    anArray.push(number);
    console.log(anArray);
    if (number !== 0) {
        addNumber();
    } else {
        console.log("Proram ended!!");
    }
}
addNumber();

// prcatice no 3.
const filterDivisibleNumber = anArray.filter((value) => {
    return value % 10 === 0;

})
console.log(filterDivisibleNumber);
console.log(anArray);

// prcatice no 4.
const squareNumber = anArray.map((value) => {
    return value * value;
});
console.log(squareNumber);

// prcatice no 5.
let factorialArray = [10, 30, 20, 5, 8, 7,];
const factorialNumber = factorialArray.reduce((v1, v2) => {
    return v1 * v2;
});
console.log(factorialNumber);

// // Uses of console and his methods.
console.log("Start using console methods.");
console.error("Hey! here is an error.",);
console.warn("Stop using loops like a mad man.");
console.assert("Kya kar raha be tu.");
localStorage.setItem('key', 'aman')
console.table({ aman: 90, gupta: 100 })
console.info("I have no information for you.");

console.time("Start the loop");
for (let index = 0; index < 1000; index++) {
    console.log(index);
}
console.timeEnd("Start the loop");

console.time("Start the while loop");
let index = 0;
while (index < 10) {
    console.log(index);
    index++
}
console.timeEnd("Start the while loop");

// Accessing children of an Element.
console.log(document.body.firstElementChild); // yaha pe body ke andar ka pahle element uthaya jaa raha hai.
console.log(document.body.lastElementChild); // yaha pe body ke andar ka last element uthaya jaa raha hai.
console.log(document.body.childNodes); // yaha pe saare element ko uthaya ja raha hai.
console.log(document.body.childNodes[1]); // saare elements ko uthake usme se ek ko chuna gya hai.

// matches, contains and closeset.

let list = document.getElementById("list");
list.firstElementChild.style.color = 'red';
list.style.backgroundColor = 'black';
list.style.color = 'white';
list.style.borderRadius = '35px';
list.style.margin = '15px';
list.lastElementChild.style.color = 'aqua';

let li = document.getElementsByTagName('li');
let liArray = Array.from(li);
liArray.forEach(element => {
    element.style.fontFamily = 'sans'
});

// pata laga sakte hai ki is element me class ka kya name hai. 
const second = document.getElementById('second');
console.log(second.getAttribute("class"));

// check kar skte hai ki ye sa attribute isme hai ki nhi.
console.log(second.hasAttribute("class"));
console.log(second.hasAttribute("id"));
console.log(second.hasAttribute("style"));

// iss set kar sakte hai attributes.
console.log(second.setAttribute("class", "aman gupta"));
console.log(second.setAttribute("hidden", "true"));
console.log(second.removeAttribute("class",));
console.log(second.attributes);

// khud ka attribute hai ye aise hi bana sakte hai.
console.log(second.dataset.gameplayers);

// koi bhi element ko insert kar sakte hai in sab ka use karke
second.insertAdjacentHTML('beforebegin', '<div id="test">beforebegin</div>') // second tag ke pahle inject kar dega is html ko.
second.insertAdjacentHTML('afterbegin', '<div id="test">afterbegin</div>')  // second tag ke lagne ke baad aur jo uske andar ke text hai uske pahle hi laga dega.
second.insertAdjacentHTML('beforeend', '<div id="test">beforeend</div>') // aur ye tag aur text dono ke baad lagega.
second.insertAdjacentHTML('afterend', '<div id="test">afterend</div>') // aur ye tag khatam hone ke just niche lagega.
second.remove();

// classes ko kaise change karna hai kaise add karna hai sab ho jayega.
// classNmae aur classList me bas itna sa fark hai ki className me kayi classes ko ek sath set kar sakte hai lekin agar set karte hai to pahle ki saari classes delte ho jayengi aur yhi diffrence hai class name aur class list se aur class list se set karne pe  pahle ki classes delte nhi hongi.
second.className = 'bg-red tt-bold tt-align';
second.classList.add('bg-yellow');
second.classList.add('tt-bold');
second.classList.add('padding');
second.classList.add('black');
// ye remove kar deta hai lekin sirf jiska bname denge bas vhi ek remove karega poori nhi.
second.classList.remove('bg-yellow');
// isme ye hota hai ki agar class pahle se hai to hata dega aur nhi lagi hai to laga dega.
second.classList.toggle('bg-yellow');
// isse pata chalega ki ye class exist karti hai ki nhi.
second.classList.contains('bg-yellow');

// setTimeOut and setTimeInterval
document.write("Aman");
let setTimeFunc = setTimeout(() => {
    alert("Hey mai aa gya.")
}, 5000);
clearTimeout(setTimeFunc);

document.addEventListener('keydown', function (event) {
    // Arrow keys ke codes: left - 37, up - 38, right - 39, down - 40
    if (event.keyCode === 37) {
        console.log("Left arrow key press hua hai!");
    } else if (event.keyCode === 38) {
        console.log("Up arrow key press hua hai!");
    } else if (event.keyCode === 39) {
        console.log("Right arrow key press hua hai!");
    } else if (event.keyCode === 40) {
        console.log("Down arrow key press hua hai!");
    } else {
        console.log(` jaa check kar in sab  me kuchh dekh le.
    Arrow keys (left, up, right, down):
        Left: 37
        Up: 38
        Right: 39
        Down: 40

    Alphabet keys (A se Z tak):
        A: 65
        B: 66
        ...
        Z: 90

    Number keys (0 se 9 tak):
        0: 48
        1: 49
        ...
        9: 57

    Special keys:
        Enter: 13
        Spacebar: 32
        Shift: 16
        Ctrl: 17
        Alt: 18
        Esc: 27
        Function keys (F1 se F12 tak): 112 se lekar 123 tak`);
    }
});

// Callbacks
const loadScript = (src, callback) => {
    var script = document.createElement('script');
    script.src = src;
    script.onload = () => {
        console.log("Script is loaded");
        callback(null,src);
    }
    script.onerror = () => {
        console.log("Error loading script ", src);
        callback(new Error("src got some error."), src);
    }
    document.body.appendChild(script);
}
function hello(error, src) {
    if (error) {
        console.log(error);
        return
    }else{
        console.log('Script is loaded without error.');
    }
    console.log('Hello world. ' + src); 
}
loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', hello);

// promises
new Promise((resolve, reject) => {
    let result1 = true;
    if (result1) {
        resolve(1);
    } else {
        reject(0);
    }
}).then((value) => {
    console.log('Result1 successful.');
    let result2 = true;
    if (result2) {
        return 1;
    } else {
        return 0;
    }
}).then((value) => {
    console.log('Result2 successful.');
    let result3 = true;
    if (result3) {
        return 1;
    } else {
        return 0;
    }
}).then((value) => {
    console.log('Result3 successful.');
    new Promise((resolve, reject) => {
        let result4 = true;
        if (result4) {
            resolve(1);
        } else {
            reject(0);
        }
    })
}).then((value) => {
    console.log("Result4 successful.");
}).catch((error) => {
    console.log("Some error occurred.");
})

// Promise api :-
// 6 methods.
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1")
    }, 5000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Value 2')
        reject("Some error occurred")
    }, 6000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3")
    }, 3000);
});

// Yaha pe agar ham chahe ki jitni bhi promisses hai unko sab ke run karne ke baad mujhe value mile to promise api ka use karke kiya jata hai.
// let promise_all = Promise.all([p1, p2, p3]); // Promise.all se ham saari values ko ek sath utha sakte hai. Lekin agar ek me bhi error aya to ek bhi value nhi milegi bas ek error throw kar diya jayega.
// let promise_allSettled = Promise.allSettled([p1, p2, p3]); // Promise.allSettled me status dikhata hai kon kon si resolve huyi hai kon kon si reject.
// let promise_race = Promise.race([p1, p2, p3]); // Promise.race me jo promise sabse pahle resolve ho jayegi usko dikhaya jayega aur agar saabse pahle jo reject ho jayegi usko dikha diya jayega.
// let promise_any = Promise.any([p1, p2, p3]); // Promise.any me bhi jo saabse pahle value ayegi vhi dikhaya jayega lekin saabse pahle jo ayi usme rejected value ayi to usse ignore karega aur saari value rejected hai tab error dega kynki ye sirf aisi value dega jo sabse pahle resolve ho jayegi.
let promise_any = Promise.any([p1, p2, p3]); // 
promise_any.then((value) => {
    console.log(value);
}); 


async function loadWeather() {
    let india = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('INDIA_TEMPRETURE: 10deg');
        }, 2000);
    })
    let us = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('INDIA_TEMPRETURE: 20deg');
        }, 5000);
    })
    let indiaW = await india;
    let usW = await us;
    return [indiaW, usW];
}
console.log('Welcome to weather control room.');
let a = loadWeather();
a.then((value) => {
console.log(value);

// Try and catch.
try {
    console.log(aman);
} catch (error) {
    console.log(error);
    // Error object
    console.log(error.name);
    console.log(error.messege);
    console.log(error.stack);
}

// Finally clause.
// Finally ka kaam ye hai ki situation kaisi bhi ho ye chalega jarur.
const myFinally = () => {
    try {
        console.log(aman);
        return
    } catch (error) {
        console.log(error);
        // Error object
        console.log(error.name);
        console.log(error.messege);
        console.log(error.stack);
    }
    finally {
        console.log("Mai finally chal gya hu.");
    }
}
myFinally();

// Practice set of promisses callbacks chapter.
let scriptPromise = new Promise((resolve, reject) => {
    var script = document.createElement("script");
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
    document.head.appendChild(script);
    script.onload = () => {
        resolve("Script is loaded successfully.");
    };
    script.onerror = () => {
        reject(new Error('Here is some error in loading script.'));
    };
}).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});

async function asyncPromise() {
    new Promise((resolve, reject) => {
        var script = document.createElement("script");
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
        document.head.appendChild(script);
        script.onload = () => {
            resolve('ASYNC script is loaded successfully.');
        }
        script.onerror = () => {
            reject('Some error occurred in loading async script.');
        }
    }).then((value) => {
        console.log(value);
    }).catch((error) => {
        console.log(error);
    });
};
asyncPromise();

const rejectError = () => {
    return rejectPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("rejected."));
        }, 3000);
    });
};

const asyncRejectedValue = async () => {
    try {
        await rejectError();
    } catch (error) {
        console.log('This error is handled.');
    }
}
asyncRejectedValue();

// fetch only api. 
let fetchThisApi = fetch('https://goweather.herokuapp.com/weather/in');
fetchThisApi.then((Response) => {
    return Response.json()
}).then((value) => {
    console.log(value);
});

// Fetch post api.
const postApi = async () => {
    let option = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Aman gupta',
            password: 'amanji',
            userid: 42,
        })
    };
    let fetchPost = fetch('https://jsonplaceholder.typicode.com/posts', option);
    let awaitedPost = await fetchPost;
    return awaitedPost;
};
postApi()
    .then((value) => { return value.json() })
    .then((json) => { console.log(json) })
    .catch((error) => { console.log(error); });

    
    console.log(document.cookie);
    document.cookie = "name=aman";
    document.cookie = "naam=aman112233";
    // Ab tak to sirf text hi save kar rahe the to ho jaa raha tha lekin ab special chracters ko save karne ke liye isse use karna padega.
let key = prompt("Enter your key:");
let value = prompt("Enter your value:");
document.cookie = `${key}=${value}`;
console.log(document.cookie);

*/
