<template>
  <div class="relative bg-darkest overflow-hidden h-screen homescreen">
    <div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
      <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 lg:mt-36">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div
              class="text-sm font-semibold uppercase tracking-wide text-gray-200 sm:text-base lg:text-sm xl:text-base"
            >Coming soon</div>
            <h2
              class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-50 sm:leading-none sm:text-6xl lg:text-5xl xl:text-5xl"
            >
              Opeyemi
              <span class="text-light">David</span>
              Idris
            </h2>
            <p class="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Wow I am surprised you found this site. Welcome to my humble abode. As you can see this site is a work in progress and there isn't much to see here. That said if you want to contact me you can reach me
              <nuxt-link to="/contact" class="text-light underline">here.</nuxt-link>
            </p>
            <div class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <p
                class="text-base font-medium text-lightest"
              >I also have a newsletter. Sign up to experience my occasional ramblings.</p>
              <form action="#" method="POST" class="mt-3 sm:flex">
                <input
                  aria-label="Email"
                  class="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-dark shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1"
                  placeholder="KoolKid@email.com"
                />
                <button
                  type="submit"
                  class="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-light shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-lightest transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >I'm game</button>
              </form>
            </div>
          </div>
          <div
            class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div class="relative mx-auto w-full lg:max-w-md">
              <div class="relative block w-full rounded-lg overflow-hidden focus:outline-none">
                <img class="w-full" src="../static/counting_stars_edited2.svg" alt="Counting stars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {},
  mounted() {}
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
