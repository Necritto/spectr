import React from "react";
import classes from "./Modal.module.scss";

import classnames from "classnames";

export const Modal = () => {
  return (
    <div className={classes.modal}>
      <div className={classes["modal-wrap"]}>
        <div className={classes.modal__heading}>
          <h2>Напишите нам</h2>
          <button className={classes["close-modal"]}>&times;</button>
        </div>
        <form>
          <div className={classes.name}>
            <label htmlFor="name">Имя</label>
            <input id="name" type="text" name="name" />
          </div>
          <div className={classes.email}>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" name="email" />
          </div>
          <div className={classes.phone}>
            <label htmlFor="phone">Телефон</label>
            <input id="phone" type="tel" name="phone" required />
          </div>
          <div className={classes.message}>
            <label htmlFor="message">Сообщение</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <div className={classes.check}>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6668 5L7.50016 14.1667L3.3335 10"
                  stroke="black"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Я согласен(-на) с{" "}
              <a href="/confident" target="_blank" rel="noopener noreferrer">
                политикой конфиденциальности
              </a>
            </label>
          </div>
          <div className={classes["form-btn"]}>
            <div className={classnames(classes.cancel, classes["close-modal"])}>
              <button type="button">Отмена</button>
            </div>
            <div className={classes.submit}>
              <input id="submit" type="submit" value="Отправить" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
