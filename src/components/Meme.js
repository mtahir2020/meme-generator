import React from 'react'
import memesData from '../memesData'

export default function Meme() {

  // React.useState() is a hook, returns an array
// const [memeText, setMemeText] = React.useState("Get a new meme image!")


  let [meme, setMeme] = React.useState(
    {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    }
  )

  let [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage(e) {
    e.preventDefault()
    let memes = allMemeImages.data.memes
    let randomNum = Math.floor(Math.random() * memes.length)
    setMeme(function(oldMeme) {
      return {
        ...meme,
        randomImage: memes[randomNum].url
      }
    })
  }

  function memeText() {
    setMeme(function(oldMeme){
      return {

        topText: document.getElementById('topText').value,
        bottomText: document.getElementById('bottomText').value,
        randomImage: oldMeme.randomImage

      }
    })
  }



  return (
    <div>
      <form className="form">
        <div className='form-wrapper'>
          <div className="text-input">
            <input id="topText" type={'text'} onKeyUp={memeText} placeholder="Shut up"></input>
            <input id="bottomText" type={'text'} onKeyUp={memeText} placeholder="And take my money"></input>
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
