<template>
  <transition name="fade" mode="out-in">
    <section v-if="active" role="dialog" class="ekf__popup">
      <div class="content">
        <button
          v-if="closeBtn"
          class="ekf__popup__close__button"
          @click="onClick"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1"
            viewBox="0 0 24 24"
          >
            <path
              d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"
            ></path>
          </svg>
        </button>
        <h2>{{ popupTitle }}</h2>
        <slot></slot>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'EkfPopup',

  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    closeBtn: {
      type: Boolean,
      required: false,
      default: true,
    },
    popupTitle: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('update:active')
    },
  },
}
</script>

<style lang="scss">
.ekf__popup {
  position: absolute;
  z-index: 999;
  top: $size_gup;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  touch-action: manipulation;
  transform: translateZ(0);
  z-index: 99992;
  .content {
    background-color: #fff;
    width: auto;
    position: relative;
    padding: 15px 6px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    h2 {
      font-size: 0.8125rem;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
      width: max-content;
      margin: 0 $size_gup 0 0;
    }
    .ekf__popup__close__button {
      position: absolute;
      right: 0;
      top: 0;
      padding: 10px;
      background: none;
      border: none;
      width: 1.5rem;
      cursor: pointer;
      & svg {
        display: block;
        fill: $color_text;
        height: 100%;
        overflow: visible;
        position: relative;
        width: 100%;
      }
      &:hover {
        outline: none;
        & svg {
          fill: $color_main;
        }
      }
      &:focus {
        outline: none;
        & svg {
          fill: $color_main;
        }
      }
      &:active {
        outline: none;
        & svg {
          fill: $color_main;
        }
      }
    }
  }
}
</style>
