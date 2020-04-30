<template>
  <form @submit.prevent="formSubmit" class="grid grid-cols-1 row-gap-6">
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
</template>

<script>
export default {
  methods: {
    formSubmit() {
      const form = document.querySelector('form')
      const data = {}
      const formElements = Array.from(form)
      formElements.map(input => (data[input.name] = input.value))
      const sendContactForm = this.$fireFunc.httpsCallable('sendContactForm')
      sendContactForm(data)
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>
</style>