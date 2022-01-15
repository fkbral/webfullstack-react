import './styles.css'

export function ImageFeed({columnCount=2}) {
  const defaultImgUrl = "https://source.unsplash.com/random/?city,night"

  // const images = [
  //   defaultImgUrl,
  //   defaultImgUrl,
  //   defaultImgUrl,
  //   defaultImgUrl,
  //   defaultImgUrl,
  //   defaultImgUrl,
  //   defaultImgUrl,
  //   defaultImgUrl,
  //   defaultImgUrl,
  //   defaultImgUrl,
  //   defaultImgUrl,
  //   defaultImgUrl,
  // ]

  console.log(columnCount)

  const images = Array.from({length: 12}, (_image, index) => {
    return {
      id: index,
      url: `${defaultImgUrl}, ${index}`,
    }
  })

  return (
    <div className="image-feed">
      <ul>
      {
        images.map((image) => 
        <li key={image.id} style={{flexBasis: `calc(${100/columnCount}% - 2 * 18px)`}}>
          <img src={image.url} alt="Imagem aleatória" width={180} />
        </li>
        )
      }
      </ul>
    </div>
  )
}