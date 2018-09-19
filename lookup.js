const app = document.getElementById('root');

//const logo = document.createElement('img');
//logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

//pp.appendChild(logo);
app.appendChild(container);
//
//var request = new XMLHttpRequest();
//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
//request.onload = function () {
//
//  // Begin accessing JSON data here
//  var data = JSON.parse(this.response);
//  if (request.status >= 200 && request.status < 400) {
//    data.forEach(movie => {
//      const card = document.createElement('div');
//      card.setAttribute('class', 'card');
//
//      const h1 = document.createElement('h1');
//      h1.textContent = movie.title;
//
//      const p = document.createElement('p');
//      movie.description = movie.description.substring(0, 300);
//      p.textContent = `${movie.description}...`;
//
//      container.appendChild(card);
//      card.appendChild(h1);
//      card.appendChild(p);
//    });
//  } else {
//    const errorMessage = document.createElement('marquee');
//    errorMessage.textContent = `Gah, it's not working!`;
//    app.appendChild(errorMessage);
//  }
//}
//
//request.send();

// $.get("https://ghibliapi.herokuapp.com/film", function(data, status, err){
//         console.log(err);
//         if(status === "success"){
//             data.forEach(movie => {
//             	const card = document.createElement('div');
//                 const h1 = document.createElement('h1');
//                 h1.textContent = movie.title;
//                 container.appendChild(h1);
                
//             });
//             fetch('sample.txt')
//             .then(response => response.text())
//             .then(text => {
//                //console.log(text);
//             const p = document.createElement('p');
//                 p.setAttribute('id','mytext');
//                 p.textContent = text;
//                 container.appendChild(p);
//                 var str2 = text.replace(/(([^\s]+\s\s*){20})(.*)/,"$1…");
//                 console.log(str2);
//                 document.write(str2);
//             })
//         }
//         else{
//             console.log("error");
//         }
            
// });
$.ajax({
    url: "https://ghibliapi.herokuapp.com/films",
    dataType: 'json',
    cache: false,
    success: function(data){
        data.forEach(movie => {
                        	const card = document.createElement('div');
                            const h1 = document.createElement('h1');
                            h1.textContent = movie.title;
                            //container.appendChild(h1);
                            
                        });
                        // fetch('sample.txt')
                        // .then(response => response.text())
                        // .then(text => {
                        //    //console.log(text);
                        // const p = document.createElement('p');
                        //     p.setAttribute('id','mytext');
                        //     //p.textContent = text;
                        //     //container.appendChild(p);
                        //     var str2 = text.split(/\s+/).slice(0, 50);
                        //     console.log(str2);
                        //     for(let i=0; i< str2.length ; i++){
                        //         console.log(str2[i]);
                        //     }
                        //     container.appendChild(p);
                        // })
                        $.get('sample.txt', function(data){
                            console.log(data);
                            // const p = document.createElement('p');
                            // p.setAttribute('id','mytext');
                            //p.textContent = text;
                            //container.appendChild(p);
                            var str2 = data.split(/\s+/).slice(0, 50);
                            console.log(str2);
                            //document.write(str2);
                            // for(let i=0; i< str2.length ; i++){
                            //     const p = document.createElement('p');
                            //     p.setAttribute('id','mytext');
                            //     console.log(str2[i]);
                            //     p.textContent = str2[i].match;
                            //     container.appendChild(p);
                            // }
                            const pattern= /\d+/g;
                            var result = data.match(pattern);
                            console.log(result);
                            for(let i=0; i< result.length ; i++){
                                const p = document.createElement('p');
                                p.setAttribute('id','mytext');
                                console.log(result[i]);
                                p.textContent = result[i];
                                container.appendChild(p);
                            }
                            
                        });
        console.log(data);
    },
    error: function(e){
        console.log("Page not found");
        //alert(er);
    }
});


//var str1 = "Here is a sentence that just seems to go on and on. Here is a sentence that just seems to go on and on. Here is a sentence that just seems to go on and on.";
//
//var str2 = str1.replace(/(([^\s]+\s\s*){20})(.*)/,"$1…");
//
//document.write(str2);


// getMEthod= async(e) => {
//  const api_call =  await fetch("https://ghibliapi.herokuapp.com/films");
// const data = await api_call.json();
// console.log(data);  
// }

// getMEthod();


//req.send();









/*
Refer
var text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
    if (key == "city") {
        return value.toLowerCase();
    } else {
        return value;
    }});
document.getElementById("demo").innerHTML = obj.name + ", " + obj.city; 
*/
