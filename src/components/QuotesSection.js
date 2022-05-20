import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default function QuotesSection(){
  return(
    <div className="section quote">
      <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft} /> Являясь всего лишь частью общей картины, непосредственные участники технического прогресса лишь добавляют фракционных разногласий и указаны как претенденты на роль ключевых факторов</p>
      <p className="qoute-auther">Auther Auther</p>
    </div>
  )
}