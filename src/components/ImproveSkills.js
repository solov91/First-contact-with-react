export default function ImproveSkills(){
  const list = [
    'Изучай новые рецепты',
    'Экспериментируйте с едой',
    'Создавайте свои рецепты',
    'Изучайте пищевую ценность',
    'Повышайте свои навыки',
    'Получайте советы по приготовлению'
  ]

  return(
    <div className="section improve-skills">
      <div className="column img">
        <img className="improve-img" src="/img/gallery/10.jpg" alt=""></img>
      </div>
    <div className="column about-text">
      <h1 children="title">Улучши свои навыки</h1>
      { list.map(a => <p className="skill-item" key={a}>{a}</p>)}
      <button className="btn">Регистрация</button>
    </div>

  </div>
  )
}