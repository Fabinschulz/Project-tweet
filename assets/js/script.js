const tweetar =  document.querySelector('button');
const textarea =  document.querySelector('textarea');
const feed = document.querySelector(".conteudoPrincipal__listaMeet")


function getText(event){
    event.preventDefault()

    const tweetArea = textarea.value;
    postTweet(tweetArea)
}

tweetar = addEventListener('click', getText);

function postTweet(tweetText){

    let date = new Data()
    let hours = date.getHours()
    let minute = date.getMinutes()

    const tweet = {
        name: "Fabio",
        photo: "./assets/img/ProfilePic.png",
        user: "@fabinschulz",
        text: tweetText,
        time : `${hours}and:${minute}`
    }

    listTemplate(tweet)

}

function listTemplate(tweet){
    const {name, photo, user, text, time} = tweet

    let li = document.createElement("li")
    li.classList.add("conteudoPrincipal__meet")

    let img = document.createElement("img")
    img.src = photo
    img.classList.add("meet_fotoPerfil")

    let div = document.createElement("div")
    div.classList.add("meet_conteudo")
    let h2 = document.createElement("h2")
    h2.innerText = name

    let span = document.createElement("span")
    span.innerText = ` ${user} - ${time}`

    let p = document.createElement("p")
    p.innerText = text

    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    li.appendChild(img)
    li.appendChild(div)

    feed.appendChild(li)
    textarea.innerText = ""
}