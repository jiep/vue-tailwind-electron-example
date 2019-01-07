<template lang="pug">
nav.flex.items-center.justify-between.flex-wrap.bg-teal.p-6
  .flex.items-center.flex-no-shrink.text-white.mr-6
    img.mr-4(src='@/assets/logo.png', height='54', width='54')
    span.font-semibold.text-xl.tracking-tight Tailwind CSS
  .block(class='lg:hidden')
    button.flex.items-center.px-3.py-2.border.rounded.text-teal-lighter.border-teal-light(@click='toggle', class='hover:text-white hover:border-white')
      font-awesome-icon(:icon="['fas', 'bars']")/
  .w-full.flex-grow(:class="open ? 'block': 'hidden'", class='lg:flex lg:items-center lg:w-auto')
    .text-lg(class='lg:flex-grow')
      a.block.mt-4.text-teal-lighter.mr-4(href='#responsive-header', class='lg:inline-block lg:mt-0 hover:text-white')
        | Docs
      a.block.mt-4.text-teal-lighter.mr-4(href='#responsive-header', class='lg:inline-block lg:mt-0 hover:text-white')
        | Examples
      a.block.mt-4.text-teal-lighter(href='#responsive-header', class='lg:inline-block lg:mt-0 hover:text-white')
        | Blog
    div
      .inline-flex
        button.py-2.px-2(@click='minimize', class='hover:bg-teal-dark')
          font-awesome-icon.fill-current.text-tile-darkest(:icon="['fas', 'window-minimize']", size="lg")/
        button.py-2.px-2(@click='maximize', class='hover:bg-teal-dark')
          font-awesome-icon.fill-current.tile-darkest(:icon="['fas', 'window-maximize']", size="lg")/
        button.py-2.px-2(@click='close',class='hover:bg-teal-dark')
          font-awesome-icon.fill-current.text-red(:icon="['fas', 'window-close']", size="lg")/
</template>

<script>
import { remote } from 'electron'


export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
       this.open = !this.open
    },
    close() {
      remote.getCurrentWindow().close()
    },
    minimize() {
      remote.getCurrentWindow().minimize()
    },
    maximize() {
      const window = remote.getCurrentWindow();
      if (!window.isMaximized()) {
        window.maximize()
      } else {
        window.unmaximize()
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  nav
    -webkit-user-select: none
    -webkit-app-region: drag

  button, a
    -webkit-app-region: no-drag
</style>
