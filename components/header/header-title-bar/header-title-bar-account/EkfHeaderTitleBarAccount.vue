<template>
  <div class="ekf__header__title-bar__account">
    <button class="ekf__header__title-bar__account__button" @click="openPopup">
      Войти
    </button>
    <EkfPopup :popup-title="'ВХОД В ЛИЧНЫЙ КАБИНЕТ'" :active.sync="popupActive">
      <form
        class="ekf__header__title-bar__account__form"
        @keyup.esc="openPopup"
      >
        <div class="ekf__form-group">
          <label for="ekf__header__title-bar__account__form__username"
            >Электронная почта / пользователь</label
          >
          <input
            id="ekf__header__title-bar__account__form__username"
            ref="focus"
            name="username"
            required
            type="text"
          />
        </div>
        <div class="ekf__form-group">
          <label for="ekf__header__title-bar__account__form__password"
            >Пароль</label
          >
          <input
            id="ekf__header__title-bar__account__form__password"
            name="password"
            required
            type="password"
          />
        </div>
        <button class="ekf__button_submit right" type="submit">Войти</button>
      </form>
    </EkfPopup>
  </div>
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
.ekf__header__title-bar__account {
  position: relative;
  .ekf__header__title-bar__account__button {
    background: none;
    border: none;
    padding: 0;
    color: white;
    font-size: 0.875rem;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    &:focus {
      outline: none;
      cursor: pointer;
      text-decoration: underline;
    }
    &:active {
      outline: none;
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
.ekf__header__title-bar__account__form {
  width: 280px;
  margin: 30px 0 0;
}
</style>
