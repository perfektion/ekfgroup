<template>
  <section class="ekf__header__title-bar">
    <h2 class="visually_hidden">
      Ссылки для входа и переходы на другие проекты EKF
    </h2>
    <EkfHeaderTitleBarAccount />
    <ul class="ekf__header__title-bar__links">
      <li class="ekf__header__title-bar__links__item">
        <a
          href="https://ekfgroup.com/uploads/pos-articles/2020-05/master-katalog-29.pdf"
          target="_blank"
          >Скачать каталог</a
        >
      </li>
      <li class="ekf__header__title-bar__links__item">
        <a href="https://ims2.ekf.su/" target="_blank">B2B IMS</a>
      </li>
      <li
        class="ekf__header__title-bar__links__item ekf__header__title-bar__links__item_icon_shop"
      >
        <a href="https://electrobaza.ru" target="_blank"> Интернет-магазин</a>
      </li>
      <li
        class="ekf__header__title-bar__links__item ekf__header__title-bar__links__item_icon_price"
      >
        <a href="#">Прайс-лист</a>
      </li>
      <li
        class="ekf__header__title-bar__links__item ekf__header__title-bar__links__item_icon_phone"
      >
        <a href="tel:88003338815" title="Телефон для связи">8 800 333 88 15</a>
      </li>
      <li
        class="ekf__header__title-bar__links__item ekf__header__title-bar__links__item_icon_basket"
      >
        <a href="#" title="Корзина покупок"></a>
      </li>
      <li
        class="ekf__header__title-bar__links__item ekf__header__title-bar__links__item_icon_lang"
      >
        <a
          href="https://en.ekfgroup.com"
          target="_blank"
          title="EKFGroup.com in English"
          >EN</a
        >
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.ekf__header__title-bar {
  background-color: $color_header_title_bar_bg;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .ekf__header__title-bar__links {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    .ekf__header__title-bar__links__item {
      margin-left: 10px;
      a {
        display: inline-block;
        padding-right: 10px;
        line-height: 22px;
        color: white;
        font-size: 0.875rem;
        text-decoration: none;
        border-right: 1px solid #615e5e;
        &:hover {
          text-decoration: underline;
          border-right: 1px solid $color_main;
        }
        &:focus {
          outline: none;
          text-decoration: underline;
          border-right: 1px solid $color_main;
        }
        &:active {
          outline: none;
          text-decoration: underline;
          border-right: 1px solid$color_main;
        }
      }
    }
    .ekf__header__title-bar__links__item_icon_shop {
      a {
        background: url('./img/link_magaz.svg') no-repeat 0 0;
        background-size: contain;
        padding-left: 30px;
      }
    }
    .ekf__header__title-bar__links__item_icon_price {
      a {
        background: url('./img/price.svg') no-repeat 0 0;
        background-size: contain;
        padding-left: 30px;
      }
    }
    .ekf__header__title-bar__links__item_icon_phone {
      a {
        background: url('./img/phone.svg') no-repeat 0 0;
        background-size: contain;
        padding-left: 30px;
      }
    }
    .ekf__header__title-bar__links__item_icon_basket {
      a {
        mask-image: url('./img/basket_img.svg');
        background-color: white;
        padding: 0;
        height: 30px;
        width: 30px;
        border: none;
        &:hover {
          border: none;
          background-color: red;
        }
        &:focus {
          outline: none;
          border: none;
          background-color: red;
        }
        &:active {
          outline: none;
          border: none;
          background-color: red;
        }
      }
    }
    .ekf__header__title-bar__links__item_icon_lang {
      a {
        border: 1px solid #e8e7e7;
        border-radius: 50%;
        padding: 0;
        width: 27px;
        height: 27px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          border: 1px solid $color_main;
          color: $color_main;
          text-decoration: none;
        }
        &:focus {
          outline: none;
          border: 1px solid $color_main;
          color: $color_main;
          text-decoration: none;
        }
        &:active {
          outline: none;
          border: 1px solid $color_main;
          color: $color_main;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
