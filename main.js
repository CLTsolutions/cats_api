//docs: https://docs.thecatapi.com/

const baseUrl = 'https://api.thecatapi.com/v1/images/search'
const section = document.querySelector('div')
const button = document.querySelector('.btn')

// handling errs differently than try/catch
// async would need to be refactored as 'async function getRandomCats()'
// getRandomCats().catch(error => {
//     console.log('This is an error.')
//     console.log(error)
// })

// fetching from the api
getRandomCats = async () => {
    section.innerHTML = ''

    try {
        const response = await fetch(baseUrl)
        const json = await response.json()
        console.log('JSON:', json)
        return randomCatPhoto(json)
    } catch (e) {
        console.log('This is an error');
        console.log(e);
    }
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