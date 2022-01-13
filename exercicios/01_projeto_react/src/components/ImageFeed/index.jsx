import './styles.css'

export function ImageFeed() {
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
        <li key={image.id}>
          <img src={image.url} alt="" width={180} />
        </li>
        )
      }
      </ul>
    </div>
  )
}