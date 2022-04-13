//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto(){
    let date = document.querySelector('input').value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=Z53xhvJKzsx1BskIPUb1bbIR1VaYsacGNYUBGzss&date=${date}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.media_type==='image'){
                document.querySelector("img").style.display = "inline"
                document.querySelector('img').src=data.url
                document.querySelector("iframe").style.display = "none";
            }
            else if(data.media_type==='video'){
                document.querySelector("iframe").style.display = "inline"
                document.querySelector("img").style.display = "none"
                document.querySelector('iframe').src=data.url
            }
            document.querySelector('h2').innerText=data.title
            document.querySelector('h3').innerText=data.explanation
        })

    
    .catch(err => {
        console.log(`error ${err}`)
    })
}