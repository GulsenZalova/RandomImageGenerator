const BASE_URL = 'https://dog.ceo/api/breeds/image/random';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});


async function displayData(url){
  let image=document.querySelector(".image")
  image.classList.add("image")
 await axiosInstance.get(`${url}`)
 .then(res=>{
    image.src=res.data.message[0]
 })
}

setInterval(displayData,500)