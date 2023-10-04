let saveParameter = "08";


const fetchNewsCategory = () => {

    fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(data => showCategory(data?.data?.news_category))
}
fetchNewsCategory()



const showCategory = (CategoryName) => {
  
    const getCagegory = document.getElementById("category");


    CategoryName.map(singleCategory => {
        const createElement = document.createElement("p");
        createElement.addEventListener("click", function () {
          document.getElementById("show-more-btn").classList.remove("d-none");

            document.getElementById("news").innerHTML = ""
            saveParameter=singleCategory?.category_id;
          
            fetchNewsData(singleCategory?.category_id)

        })
        createElement.className = "text-black";
        // createElement.className="flex";
        // createElement.className="align-items-center";
        createElement.innerHTML = `${singleCategory?.category_name}`
        getCagegory.appendChild(createElement)

    })



}

// ......................................








const fetchNewsData = (id,isclicked) => {
console.log(isclicked);

    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
        .then(res => res.json())
        .then(newsData =>{

          showNewsData(newsData.data,isclicked)
        } )
}

fetchNewsData("08",false)







document.getElementById("show-more-btn").addEventListener("click",function(){

  fetchNewsData(saveParameter,true)
document.getElementById("show-more-btn").className ="d-none"


})
;





const showNewsData = (newsData,isclicked) => {



const show2Items = newsData.slice(0, 2);

 

const getSearchBox = document.getElementById("search-box");
getSearchBox.placeholder=`${newsData.length} items found for this category`;










    const getNewsDataSection = document.getElementById("news")


const showHowMuch = isclicked?newsData:show2Items;


showHowMuch.map(singleNewsData => {

        const { _id, image_url, title, details, author, total_view } = singleNewsData;




        const createSection = document.createElement("section")
        createSection.className = " d-flex my-5 gap-5";

        createSection.innerHTML = `
   <div>
   <img loading="lazy" style="width: 340px;height: 300px;" src="${image_url}" alt="">
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
             <p class="mb-0">${author?.name?author?.name:""}</p>
             <p class="mb-0">${author?.published_date}</p>
           </div>

         </div>

         <div>
           <img style="width: 2.5rem;
                                      height: 2.5rem;" src="./assets/view-icon.png" alt="" srcset="">
           <span>${total_view?total_view:""}</span>
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

const fetchModalSingleDetailsData = (id) => {



    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        .then(res => res.json())
        .then(data => {
            showModalSingleDetailsData(data.data[0]);
        })
}

const showModalSingleDetailsData = (modalData) => {

    const getModalTittle = document.getElementById("exampleModalLabel")
    getModalTittle.innerText = `${modalData?.title}`

    const getModalbody = document.getElementById("modal-body")
    getModalbody.innerHTML = `
<h1>${modalData?.details}</h1>
`

}



