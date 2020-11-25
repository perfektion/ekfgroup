<template>
  <section class="ekf__header__menu-bar__nav__search">
    <button
      class="ekf__header__menu-bar__nav__search__btn"
      title="Поиск по сайту"
      @click="openPopup"
    ></button>
    <transition name="fade" mode="out-in">
      <div v-if="popupActive" class="ekf__header__menu-bar__nav__search__box">
        <form
          class="ekf__header__menu-bar__nav__search__form"
          @keyup.esc="openPopup"
        >
          <label class="visually_hidden" for="searchString"
            >Текст для поиска</label
          >
          <input
            id="searchString"
            ref="focus"
            name="searchString"
            type="text"
            placeholder="Введите ваш запрос..."
            autocomplete="off"
          />
          <button>Найти</button>
        </form>
      </div></transition
    >
  </section>
</template>
<script>
export default {
  data: () => ({
    popupActive: false,
  }),
  methods: {
    openPopup() {
      setTimeout(() => {
        this.$refs.focus.focus()
      }, 0)

      this.popupActive = !this.popupActive
    },
  },
}
</script>
<style lang="scss">
.ekf__header__menu-bar__nav__search__box {
  position: absolute;
  left: 0;
  top: 112px;
  width: 100%;
  background-color: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
}
.ekf__header__menu-bar__nav__search__form {
  position: relative;
  display: flex;
  padding: 0 30px;
  margin: 0 auto;
  max-width: $size_wrap;
  input {
    border: 1px solid transparent;
    border-bottom-color: #d6d6d6;
    height: 50px;
    outline: none;
    caret-color: $color_main;
    width: 100%;
    font-size: 1rem;
  }
  button {
    top: 8px;
    right: 0;
    padding: 8px 36px;
    font-size: 1rem;
    line-height: 1;
    border-radius: 0;
    border: 1px solid #b4b4b4;
    color: #000;
    background-color: #c4c4c4;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      outline: none;
      background-color: $color_main;
      color: white;
      border-color: $color_main;
    }
    &:focus {
      outline: none;
      background-color: $color_main;
      color: white;
      border-color: $color_main;
    }
    &:active {
      outline: none;
      background-color: $color_main;
      color: white;
      border-color: $color_main;
    }
  }
}
.ekf__header__menu-bar__nav__search__btn {
  border: none;
  padding: 0;
  mask-image: url('./img/search_opener.svg');
  background-color: black;
  width: 24px;
  height: 24px;
  margin: 0 0 0 $size_gup;
  cursor: pointer;
  &:hover {
    background-color: $color_main;
  }
  &:focus {
    outline: none;
    background-color: $color_main;
  }
  &:active {
    outline: none;
    background-color: $color_main;
  }
}
</style>
