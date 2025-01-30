// let obj={
//     Name:"Sravya",
//     id:1,
//     Role:"Developer"

// }
// console.log(obj);
// let obj1=JSON.stringify(obj)
// console.log(obj1);
// let obj2=JSON.parse(obj1)
// console.log(obj2);

// //To fetch api 3 ways
// /**
//  * fetch method
//  * ajax
//  * axios
//  */




// window.fetch("data.json")

// .then((data) =>{
//     data.json()
// })
// .then((res)=>{
//     console.log(res);
//     // console.log(res[0]);

// res.map((x)={
//     console.log(x);
//     console.log(x.Name);
//     console.log(x.id);


//     })

// })

let btn = document.getElementById('btn')
console.log(btn);

btn.onclick = () => {
    let search = document.getElementById("search").value
    console.log(search);
    window.fetch(`https://pixabay.com/api/?key=48493792-eaeca23dee167e4ce00432217&q=${search}&image_type=photo`)
        .then((data) => data.json())
        .then((res) => {
            console.log(res);
            console.log(res.hits);
            res.hits.map((x) => {
                console.log(x);

                let demo = document.getElementById("demo")
                console.log(demo);

                demo.innerHTML += `<img src=${x.previewURL} />`
            })

        })


}