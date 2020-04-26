<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://rsms.me/inter/inter.css'
      }
    ]
  }
}
</script>



<style>
body {
  font-family: 'Inter var', sans-serif;
}

body {
  @apply subpixel-antialiased;
}
</style>
