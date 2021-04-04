//docs: https://docs.thecatapi.com/

const baseUrl = 'https://api.thecatapi.com/v1/images/search'
const section = document.querySelector('div')
const button = document.querySelector('.btn')

// handling errs differently than try/catch
getRandomCats().catch(error => {
    console.log('This is an error.')
    console.log(error)
})

// fetching from the api
async function getRandomCats() {
    section.innerHTML = ''

    const response = await fetch(baseUrl)
    console.log("Response:", response)
    const json = await response.json()
    console.log('JSON:', json)
    console.log(json[0].url)
    return randomCatPhoto(json)
}

randomCatPhoto = json => {
    let photo = json[0].url
    section.classList.add('cats')
    
    let image = document.createElement('img')
    image.src = photo
    image.classList.add('random_cats')
    image.alt = photo
    section.appendChild(image)
}

button.addEventListener('click', getRandomCats)