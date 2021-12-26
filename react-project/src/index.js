import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* ================ДЗ от 26.12.2021 (Компоненты, JSX, рендеринг)================*/
//!Функциональный компонент
function ContainerFunc (props) {
  let answer = props.answer;
  if (answer === 4) {
    return(
      <div>
        <h1>Сколько будет 2 + 2</h1>
        <h2>Твой ответ: {props.answer}. И это правильный ответ!!!</h2>
     </div>
    )
  }
  return (
    <div>
        <h1>Сколько будет 2 + 2</h1>
        <h2>Твой ответ: {props.answer}. Это не правильный ответ, попробуй снова</h2>
    </div>
  )
}

//!Классовый компонент
class ContainerClass extends React.Component {
  render () {
    let answer = this.props.answer;
    if (answer === 4) {
      return(
        <div>
          <h1>Сколько будет 2 + 2</h1>
          <h2>Твой ответ: {this.props.answer}. И это правильный ответ!!!</h2>
      </div>
      )
    }
    return (
      <div>
          <h1>Сколько будет 2 + 2</h1>
          <h2>Твой ответ: {this.props.answer}. Это не правильный ответ, попробуй снова</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <ContainerClass answer= {4}/>,
  document.getElementById('root')
);