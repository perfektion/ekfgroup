<template>
  <section class="ekf__header__menu-bar">
    <h2 class="visually_hidden">Раздел главного меню сайта</h2>
    <nuxt-link to="/" class="ekf__header__menu-bar__logo">
      <img
        src="./img/main_logo.png"
        alt="Логотип компании EKF — Производителя надёжной и доступной электротехнической продукции"
      />
    </nuxt-link>
    <nav class="ekf__header__menu-bar__nav">
      <ul>
        <li>
          <button class="ekf__header__menu-bar__nav__btn">ПРОДУКЦИЯ</button>
        </li>
        <li>
          <button class="ekf__header__menu-bar__nav__btn">ПОДДЕРЖКА</button>
        </li>
        <li>
          <button class="ekf__header__menu-bar__nav__btn">ГДЕ КУПИТЬ</button>
        </li>
        <li>
          <button class="ekf__header__menu-bar__nav__btn">ОБУЧЕНИЕ</button>
        </li>
        <li>
          <button class="ekf__header__menu-bar__nav__btn">О НАС</button>
        </li>
      </ul>
    </nav>
    <EkfHeaderMenuBarSearch />
  </section>
</template>
<style lang="scss">
.ekf__header__menu-bar {
  border-bottom: 3px solid #e21a22;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ekf__header__menu-bar__logo {
  display: block;
  margin-right: 60px;
  img {
    width: 130px;
  }
  &:hover {
    opacity: 0.5;
  }
  &:focus {
    outline: none;
    opacity: 0.5;
  }
  &:active {
    outline: none;
    opacity: 0.5;
  }
}
.ekf__header__menu-bar__nav {
  width: 100%;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    margin: 0;
    list-style: none;
    &::before {
      content: ' ';
      display: inline-block;
      height: 35px;
      border-left: 1px solid #c4c4c4;
      margin-right: 10px;
    }
  }
  .ekf__header__menu-bar__nav__btn {
    border: 1px solid transparent;
    background: none;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0 24px;
    line-height: 2.3rem;
    &:hover {
      border-color: #c4c4c4;
    }
    &:focus {
      outline: none;
      border-color: #c4c4c4;
    }
    &:active {
      outline: none;
      border-color: #c4c4c4;
    }
  }
}
</style>
