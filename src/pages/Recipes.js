import PriviousSearches from "../components/PriviousSearches"
import RecipesCard from "../components/RecipesCard"

export default function Recipes(){
const recipes = [
  {
    title:'Стейк из свинины',
    image: '/img/gallery/1.jpg',
    authorImg: '/img/gallery/top-chiefs/img_1.jpg'
  },
  {
    title:'Пенне с томатами',
    image: '/img/gallery/2.jpg',
    authorImg: '/img/gallery/top-chiefs/img_2.jpg'
  },
  {
    title:'Борщ',
    image: '/img/gallery/3.jpg',
    authorImg: '/img/gallery/top-chiefs/img_3.jpg'
  },
  {
    title:'Конкильони с сыром',
    image: '/img/gallery/4.jpg',
    authorImg: '/img/gallery/top-chiefs/img_4.jpg'
  },
  {
    title:'Мясо с грибами',
    image: '/img/gallery/5.jpg',
    authorImg: '/img/gallery/top-chiefs/img_5.jpg'
  },
  {
    title:'Гамбургер с витченой и помидорами',
    image: '/img/gallery/6.jpg',
    authorImg: '/img/gallery/top-chiefs/img_6.jpg'
  },
  {
    title:'Бублик с овощами',
    image: '/img/gallery/7.jpg',
    authorImg: '/img/gallery/top-chiefs/img_3.jpg'
  },
  {
    title:'Сёмга с картофелем',
    image: '/img/gallery/8.jpg',
    authorImg: '/img/gallery/top-chiefs/img_4.jpg'
  },
  {
    title:'Блинчики с клубникой',
    image: '/img/gallery/9.jpg',
    authorImg: '/img/gallery/top-chiefs/img_6.jpg'
  },
  {
    title:'Стейки из свинины',
    image: '/img/gallery/10.jpg',
    authorImg: '/img/gallery/top-chiefs/img_5.jpg'
  },
].sort(() => Math.random() - 0.5)

  return(
    <div>
      <PriviousSearches />
      <div className="recipes-container">
        
        {recipes.map((a, i) => (
          <RecipesCard key={i} recipe={a}/>
        ))}
      </div>
    </div>
  )
}