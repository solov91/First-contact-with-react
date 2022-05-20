import Galleryimg from "./Galleryimg"

export default function RecipesCar({recipe}){
  return(
    <div className="recipes-card">
      <Galleryimg imgSrc={recipe.image} pt='65%'/>
      <div className="recipe-card-info">
        <img className="auther-img" src={recipe.authorImg} alt=''></img>
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, dignissimos! Unde aliquam perferendis velit alias aspernatur.
        </p>
        <a className="view-btn" href='!#'>Открыть</a>
      </div>
    </div>
  )
}