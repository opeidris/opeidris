<template>
  <div>
    <form
      method="post"
      action="https://sendfox.com/form/1gj6e2/3l6pd0"
      class="sendfox-form mt-3 sm:flex"
      id="3l6pd0"
      data-async="true"
      data-recaptcha="true"
      @submit="wasSubmitted"
      v-if="!subscribed"
    >
      <input
        type="email"
        placeholder="KoolKid@email.com"
        name="email"
        id="email"
        class="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1"
        :class="light_bg? 'placeholder-gray-200': 'placeholder-dark'"
        required
      />
      <!-- no botz please -->
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input type="text" name="a_password" tabindex="-1" value autocomplete="off" />
      </div>
      <button
        type="submit"
        class="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-light shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-lightest transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
      >I'm game</button>
    </form>

    <div v-else class="rounded-md bg-light p-4">
      <div class="flex">
        <p
          class="text-sm leading-5 text-gray-50 text-center"
        >Thank you so much, you will be hearing from me shortly. Stay cool 😎</p>
      </div>
    </div>
    <div class="rounded-md bg-red-50 p-4 mt-2" v-if="error">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm leading-5 font-medium text-red-800">Sorry that email wasn't valid 😢</h3>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: ['light_bg'],
  data() {
    return {
      subscribed: false,
      error: false
    }
  },
  head() {
    return {
      script: [
        {
          src: 'https://sendfox.com/js/form.js'
        }
      ]
    }
  },
  methods: {
    validateEmail(input) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(input.value)
    },
    wasSubmitted() {
      const data = { email: document.getElementById('email').value }
      if (this.validateEmail(email)) {
        this.subscribed = !this.subscribed
        this.error = false
      } else {
        this.error = true
        email.value = ''
      }
    }
  }
}
</script>

<style>
</style>