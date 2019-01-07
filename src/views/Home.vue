<template lang="pug">
  .p-4.h-full
    h1 This is a home page
    .flex.content-center.flex-wrap.flex-grow.bg-grey-lighter
      .p-2(class='w-full')
        .text-grey-darker.text-center.bg-grey-light.p-2
          router-link(:to="{ name: 'about' }") About
</template>

<script>
export default {
  name: 'home'
}
</script>
