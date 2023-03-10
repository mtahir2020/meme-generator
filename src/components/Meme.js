import React from 'react'


export default function Meme() {

  // React.useState() is a hook, returns an array
// const [memeText, setMemeText] = React.useState("Get a new meme image!")


// console.log('re-rendered')
  let [meme, setMeme] = React.useState(
    {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    }
  )

  let [allMemes, setAllMemes] = React.useState([])

  React.useEffect(function(){
    fetch("https://api.imgflip.com/get_memes")
          .then((res) => res.json())
          .then((data) => setAllMemes(data.data.memes))
  }, [])



  // console.log("all meme data " + allMemes)

  function getMemeImage(e) {
    e.preventDefault()
    let memes = allMemes
    let randomNum = Math.floor(Math.random() * memes.length)
    setMeme(function(oldMeme) {
      return {
        ...meme,
        randomImage: memes[randomNum].url
      }
    })
  }

  function memeText(event) {

    const {name, value} = event.target
    // console.log(name)
    // console.log(value)
    setMeme(function(oldMeme){
      return {

        ...oldMeme,
        [name]: value
        // topText: document.getElementById('topText').value,
        // bottomText: document.getElementById('bottomText').value,
        // randomImage: oldMeme.randomImage

      }
    })
  }



  return (
    <div>
      <form className="form">
        <div className='form-wrapper'>
          <div className="text-input">
            <input
              // id="topText"
              type='text'
              onChange={memeText}
              placeholder="Shut up"
              name="topText"
              value={meme.topText}
              />

            <input
              // id="bottomText"
              type='text'
              onChange={memeText}
              placeholder="And take my money"
              name='bottomText'
              value={meme.bottomText}
            />

          </div>
          <div className='submit'>
            <input type={'submit'} onClick={getMemeImage} value='Get a new meme image'></input>
          </div>
        </div>
      </form>
      <div className='img-ctr'>
        <div className='top-text'>{meme.topText}</div>
        <img src={`${meme.randomImage}`} height={600} width={600}></img>
        <div className='bottom-text'>{meme.bottomText}</div>
      </div>
    </div>
  )
}
