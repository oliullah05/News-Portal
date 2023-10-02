


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
createElement.className="text-black";
// createElement.className="flex";
// createElement.className="align-items-center";
createElement.innerHTML=`${singleCategory?.category_name}`
getCagegory.appendChild(createElement)

})


   
}

// ......................................

const fetchNewsData =()=>{
    fetch("https://openapi.programming-hero.com/api/news/category/01")
    .then(res=>res.json())
    .then(newsData=>showNewsData(newsData.data))
}
fetchNewsData()



const showNewsData = (newsData)=>{
    const getNewsDataSection = document.getElementById("news")
    console.log(newsData[0]);

// newsData.map(SingleNewsData=>{
//    getNewsDataSection.innerHTML=`
//    `
// })

}