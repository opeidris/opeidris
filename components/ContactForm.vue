<template>
  <div>
    <div v-if="submitted" class="rounded-md bg-green-200 p-4 mb-2">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <h3
            class="text-sm leading-5 font-medium text-green-800"
          >Email recieved! I should get back to you within the next 24hrs</h3>
        </div>
      </div>
    </div>
    <form
      @submit="formSubmit"
      class="grid grid-cols-1 row-gap-6"
      name="contactus"
      method="post"
      netlify
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contactus" />
      <div>
        <label for="full_name" class="sr-only">Full name</label>
        <div class="relative rounded-md shadow-sm">
          <input
            id="full_name"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Full name"
            name="full_name"
            required
          />
        </div>
      </div>
      <div>
        <label for="email" class="sr-only">Email</label>
        <div class="relative rounded-md shadow-sm">
          <input
            id="email"
            type="email"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Email"
            name="reply_to"
            required
          />
        </div>
      </div>
      <div>
        <label for="phone" class="sr-only">Phone</label>
        <div class="relative rounded-md shadow-sm">
          <input
            id="phone"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Phone"
            name="p_number"
            required
          />
        </div>
      </div>
      <div>
        <label for="message" class="sr-only">Message</label>
        <div class="relative rounded-md shadow-sm">
          <textarea
            id="message"
            rows="4"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Message"
            name="message"
            required
          ></textarea>
        </div>
      </div>
      <div class>
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="submit"
            class="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >Submit</button>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    formSubmit() {
      this.submitted = true
    }
  },
  data() {
    return {
      submitted: false
    }
  }
}
</script>

<style>
</style>