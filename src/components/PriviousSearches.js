import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function PriviousSearches(){
  const searches = [
    'пицца',
    'гамбургеры',
    'печеньки',
    'салат',
    'суп',
    'гриль',
    'пирог',
    'выпечка',
  ]
  return(
      <div className="previous-searches section">
      <h2>Что Вы искали ранее</h2>
      <div className='previous-searches-conteiner'>
        { searches.map((a, i) => (<div key={i}className='search-item' style={{animationDelay: i * 0.1 + 's'}}>
          {a}
        </div>)) }
      </div>
      <div className="search-box">
        <input type='text' placeholder="Поиск..." />
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  )
}