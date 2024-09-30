import React from "react";
import { Header } from "../componets/Header";
import { AppLable } from "../componets/AppLable";
import { AppButton } from "../componets/AppButton";


const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
          <Header headerType= "h1" HeaderText="1. Занимательный вопрос"/>
          <AppLable labelText="Ваш ответ" 
            errorText="Введите ответ в правельном формате" 
            id="username" 
            hasError={true} 
            isRequired={true}
            inputPlaceholder="Ответ" 
            inputTupe="text"/>
            <Header headerType= "h1" HeaderText="2. Интересный вопрос"/>
            <AppLable 
            labelText="Ваш ответ" 
            errorText="Введите ответ в правельном формате" 
            id="username"
            hasError={true} 
            isRequired={true} 
            inputPlaceholder="Ответ" 
            inputTupe="text"/>
            <AppButton buttonText="Далее" isDisabled={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
