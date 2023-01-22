import React from 'react'
import ReactDOM from 'react-dom'
import "./frontend.scss"

const divsToUpdate = document.querySelectorAll(".nd-flexbox-card-updateme");

divsToUpdate.forEach(function(div) {
  const data = JSON.parse(div.querySelector("pre").innerHTML)
  ReactDOM.render(<FlexboxCards {...data} />, div);
  div.classList.remove("nd-flexbox-card-updateme");
})

function FlexboxCards(props) {
  return (
    <div className="nd-flexbox-card-container">
      <ul className="item-list">
        {props.cardTitle.map(function(title, index) {
          return (
            <li className="item" style={{backgroundColor: props.bgColor}}>
              <img src={props.imageUrl[index]} alt={props.imageAlt[index]}/>
              <div className="item-text">
                <h3>{title}</h3>
                <p>{props.cardDescription[index]}</p>
                <form action={props.buttonUrl[index]}>
                  <button type="submit" className="filledOutline">{props.buttonText[index]}</button>
                </form>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}