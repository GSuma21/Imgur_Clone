var Myimages = document.getElementById("imageBody")
var img_details = document.getElementById("img_detail")


async function doit(){
    var data = await fetch(`https://pixabay.com/api/?key=27416276-e30e5e99771e783493f9bc484&q=roses+flowers+animals&image_type=photo&per_page=200`)
                .then(res => res.json())
                // .then(res => console.log(res.hits))
                .then(res => createPage(res.hits))

}
// async function doit(){
           
//                 var data = await fetch(`https://pixabay.com/api/videos/?key=27416276-e30e5e99771e783493f9bc484&q=yellow+flowers`)
//     .then(res => res.json())
//     // .then(res=> console.log(res.hits))
//     .then(res => createPage(res.hits))
//         }

function createPage(data){
    data.map((ele) =>{
        var card = document.createElement('div')
        card.setAttribute("class", "card");
        var details = document.createElement('div')
        details.setAttribute("class","details")
        var likes = document.createElement('div')
        likes.setAttribute("class","likes")
        var img = document.createElement('img')
       
        var p1 = document.createElement('p')
        var p2 = document.createElement('p')
        var p3 = document.createElement('p')
        var p4 = document.createElement('p')

        p1.innerHTML = `<p>${ele.tags}</p>`
        p2.innerHTML = `<p>${ele.likes}</p>`
        p4.innerHTML = `<p>${ele.views}</p>`

        img.src = ele.webformatURL;

        likes.append("likes:",p2,"views:",p4);
        details.append(p1,likes)
        card.append(img,p1,"likes:",p2,"views:",p4)

        Myimages.append(card);
       
       

        


    })
}

doit();
        