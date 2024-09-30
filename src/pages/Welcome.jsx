import React from "react";
import { Header } from "../componets/Header";
import { AppLable } from "../componets/AppLable";
import { AppButton } from "../componets/AppButton";


const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerType= "h1" HeaderText="Регистрация"/>
          <form className="welcome__form">
            <AppLable labelText="Ваше имя" 
            errorText="Введите имя в правельном формате" 
            id="username" 
            isRequired 
            inputPlaceholder="Имя" 
            inputTupe="text"/>
            <AppLable 
            labelText="Ваш номер" 
            errorText="Введите имя в правельном формате" 
            id="phone"
            hasError={true} 
            isRequired={true} 
            inputPlaceholder="+998 9- --- -- --" 
            inputTupe="tel"/>
            <AppButton buttonText="Далее" isDisabled={true}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
