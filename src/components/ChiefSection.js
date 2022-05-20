import ChiefsCard from "./ChiefsCard"

export default function ChiefSection(){
  const chiefs = [
    {
      name: 'Хуан Карлос',
      img: '/img/gallery/top-chiefs/img_1.jpg',
      recipesCount: '10',
      cuisine: 'Мексиканская'
    },
    {
      name: 'Роберто Гастори',
      img: '/img/gallery/top-chiefs/img_2.jpg',
      recipesCount: '12',
      cuisine: 'Итальянская'
    },
    {
      name: 'Иванов Иван',
      img: '/img/gallery/top-chiefs/img_3.jpg',
      recipesCount: '10',
      cuisine: 'Русская'
    },
    {
      name: 'Жан-Поль Рошон',
      img: '/img/gallery/top-chiefs/img_4.jpg',
      recipesCount: '07',
      cuisine: 'Французская'
    },
    {
      name: 'Хосе Алонсо',
      img: '/img/gallery/top-chiefs/img_5.jpg',
      recipesCount: '17',
      cuisine: 'Бразильская'
    },
    {
      name: 'Гарри Холланд',
      img: '/img/gallery/top-chiefs/img_6.jpg',
      recipesCount: '10',
      cuisine: 'Английская'
    },
  ]
  return(
    <div className="section shiefs">
      <h1 className="title">Наши лучшие повора</h1>
      <div className="top-chiefs-conteiner">

      {chiefs.map(a => <ChiefsCard key={a.name} chief={a} />)}
      </div>
    </div>
  )
}