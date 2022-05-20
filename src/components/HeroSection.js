import Galleryimg from "./Galleryimg"

export default function HeroSection(){
  
  const images = [
    '/img/gallery/1.jpg',
    '/img/gallery/2.jpg',
    '/img/gallery/3.jpg',
    '/img/gallery/4.jpg',
    '/img/gallery/5.jpg',
    '/img/gallery/6.jpg',
    '/img/gallery/7.jpg',
    '/img/gallery/8.jpg',
    '/img/gallery/9.jpg',
  ]

  return (
    <div className="section hero">
      <div className="column about-text">
        <h1 children="title">Про нас</h1>
        <p className="info">Разнообразный и богатый опыт говорит нам, что внедрение современных методик обеспечивает актуальность новых предложений. Приятно, граждане, наблюдать, как интерактивные прототипы и по сей день остаются уделом либералов, которые жаждут быть призваны к ответу.</p>
        <button className="btn">Узнать подробнее</button>
      </div>
      <div className="column gallery">
        { images.map((src, index) => (
          <Galleryimg key={index} imgSrc={src} pt={'90%'} />
        ))}
        
      </div>
    </div>
  )
}