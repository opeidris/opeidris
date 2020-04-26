<template>
  <div class="relative bg-darkest overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-darkest sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden xl:block absolute right-0 inset-y-0 h-full w-48 text-darkest transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

        <div
          class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-2"
        >
          <div class="sm:text-center lg:text-left">
            <h2
              class="text-3xl text-indigo-600 leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
            >Let's work together</h2>
            <p
              class="mt-4 text-lg leading-7 text-lightest sm:mt-3"
            >We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear from you! Send us a message using the form opposite, or email us.</p>
          </div>
          <form action="#" method="POST" class="grid grid-cols-1 row-gap-6">
            <div>
              <label for="full_name" class="sr-only">Full name</label>
              <div class="relative rounded-md shadow-sm">
                <input
                  id="full_name"
                  class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                  placeholder="Full name"
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
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full hidden lg:block lg:object-fill sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="../../static/data_extraction (1).svg"
        alt
      />
      <img
        class="h-56 w-full object-contain lg:hidden lg:object-fill sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="../../static/data_extraction.svg"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>