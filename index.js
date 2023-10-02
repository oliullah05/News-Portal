


const  fetchNewsCategory = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res=>res.json())
    .then(data=>showCategory(data?.data?.news_category))
}
fetchNewsCategory()



const showCategory =(CategoryName)=>{
    // console.log(data.category_name);
    const getCagegory = document.getElementById("category");
   

    CategoryName.map(singleCategory=> {
const createElement = document.createElement("p");
createElement.addEventListener("click",function(){
    // console.log(singleCategory.category_id,"clicked");
    document.getElementById("news").innerHTML=""
    fetchNewsData(singleCategory?.category_id)

})
createElement.className="text-black";
// createElement.className="flex";
// createElement.className="align-items-center";
createElement.innerHTML=`${singleCategory?.category_name}`
getCagegory.appendChild(createElement)

})


   
}

// ......................................

const fetchNewsData =(id)=>{
    console.log(id);
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res=>res.json())
    .then(newsData=>showNewsData(newsData.data))
}
fetchNewsData("08")



const showNewsData = (newsData)=>{

// console.log(newsData.length);


    const getNewsDataSection = document.getElementById("news")

newsData.map(singleNewsData=>{

// console.log(singleNewsData);
const {_id,image_url,title,details,author,total_view}=singleNewsData;
// console.log(author);




    const createSection = document.createElement("section")
    createSection.className=" d-flex my-5 gap-5";
    // console.log(singleNewsData);
   createSection.innerHTML=`
   <div>
   <img style="width: 340px;height: 300px;" src="${image_url}" alt="">
 </div>





 <div class="d-flex flex-column justify-content-around">
   <div>
     <h4 class="fw-bold">${title}</h4>
     <p>${details}</p>

     </div>
     


       <div class="d-flex justify-content-between align-items-center">
         <div class=" d-flex gap-3 align-items-center">
           <img class="img-fluid" style="width: 2.5rem;
                      height: 2.5rem;" src="${author?.img}                        " alt="">
           <div>
             <p class="mb-0">${author?.name}</p>
             <p class="mb-0">${author?.published_date}</p>
           </div>

         </div>

         <div>
           <img style="width: 2.5rem;
                                      height: 2.5rem;" src="./assets/view-icon.png" alt="" srcset="">
           <span>${total_view}</span>
         </div>

         <div class="">
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star checked"></span>
           <span class="fa fa-star"></span>
           <span class="fa fa-star"></span>
         </div>

 
         <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <div onclick="fetchModalSingleDetailsData('${_id}')">
     <i class="fa fa-location-arrow" style="font-size:36px">see details</i>
 </div>
 </button>


 </div>

   
   
   
   
   `





getNewsDataSection.appendChild(createSection)

})





   


}


// ...............
// details data load

const fetchModalSingleDetailsData =(id)=>{
    console.log(id);
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    .then(res=>res.json())
    .then(data=>{
        showModalSingleDetailsData(data.data[0]);
    })
}

const showModalSingleDetailsData =(modalData)=>{
    console.log(modalData);
    const getModalTittle = document.getElementById("exampleModalLabel")
    getModalTittle.innerText=`${modalData?.title}`
    // console.log(modalData?.title);
    const getModalbody = document.getElementById("modal-body")
getModalbody.innerHTML=`
<h1>${modalData?.details}</h1>
`






}

