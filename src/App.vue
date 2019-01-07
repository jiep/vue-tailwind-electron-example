<template lang="pug">
  .font-sans.antialiased.h-screen.flex.flex-col(id="app")
    Bar.flex-shrink/
    .flex-1.bg-grey-lighter.flex-auto
      router-view/
</template>

<script>
import Bar from '@/components/Bar'
export default {
  name: 'app',
  components: {
    Bar
  }
}
</script>
