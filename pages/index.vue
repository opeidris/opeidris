<template>
  <div
    class="relative overflow-hidden h-screen homescreen"
    :class="light_bg? 'bg-indigo-100': 'bg-darkest'"
  >
    <div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
      <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 lg:mt-36">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div
              class="text-sm font-semibold uppercase tracking-wide sm:text-base lg:text-sm xl:text-base"
              :class="light_bg? 'text-gray-800': 'text-gray-200'"
            >Hey, I'm:</div>
            <h2
              class="mt-1 text-4xl tracking-tight leading-10 font-extrabold sm:leading-none sm:text-6xl lg:text-5xl xl:text-5xl"
              :class="light_bg? 'text-darkest': 'text-gray-50'"
            >
              Opeyemi
              <span class="text-light">David</span>
              Idris
            </h2>
            <p
              class="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
              :class="light_bg? 'text-gray-600': 'text-gray-200'"
            >
              Welcome to my humble abode. I help shopify store owners increase their revenue with the same amount of traffic. Does that sound good? If so you can reach out to work with me
              <nuxt-link to="/contact" class="text-light underline">here.</nuxt-link>
            </p>
            <div class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <p class="text-base font-medium" :class="light_bg? 'text-gray-700': 'text-lightest'">
                I also have a
                <a href="https://nobodyknows.substack.com/" class="text-light underline">newsletter</a>. Sign up to experience my occasional ramblings.
              </p>
            </div>

            <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
            <span
              role="checkbox"
              tabindex="0"
              aria-checked="false"
              class="relative inline-block flex-shrink-0 h-6 w-11 mt-2 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
              :class="light_bg? 'bg-indigo-600': 'bg-gray-200'"
              @click="light_bg=!light_bg"
            >
              <!-- On: "translate-x-5", Off: "translate-x-0" -->
              <span
                aria-hidden="true"
                class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
                :class="light_bg? 'translate-x-5': 'translate-x-0'"
              ></span>
            </span>
            <p
              class="text-lg inline-block text-lightest align-bottom align-text-bottom"
              v-if="!light_bg"
            >Let there be light???</p>
            <p
              class="text-lg inline-block text-gray-700 align-bottom align-text-bottom"
              v-else
            >Nah man, bring the dark back.</p>
          </div>
          <div
            class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div class="relative mx-auto w-full lg:max-w-md">
              <div class="relative block w-full rounded-lg overflow-hidden focus:outline-none">
                <svg
                  class="w-full"
                  viewBox="0 0 923 748"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="star_gazing">
                    <g id="star_gazing_2">
                      <g id="sky">
                        <path
                          id="bg"
                          d="M282.004 237.246C279.404 335 413.633 440.856 581.281 440.856C748.929 440.856 1015.91 242.219 889.111 237.246C644.786 227.662 561.059 126.475 585.557 54.7457C629.432 -73.716 287.281 38.8562 282.004 237.246Z"
                          fill="#393E46"
                        />
                        <g id="stars_3">
                          <path
                            id="Vector"
                            d="M505.004 157.445L502.96 156.144L504.261 154.1L503.703 153.746L502.403 155.79L500.359 154.489L500.004 155.046L502.048 156.347L500.747 158.391L501.305 158.746L502.605 156.702L504.649 158.002L505.004 157.445Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_2"
                            d="M657.004 305.445L654.96 304.144L656.261 302.1L655.703 301.746L654.403 303.79L652.359 302.489L652.004 303.046L654.048 304.347L652.747 306.391L653.305 306.746L654.605 304.702L656.649 306.002L657.004 305.445Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_3"
                            d="M411.004 287.445L408.96 286.144L410.261 284.1L409.703 283.746L408.403 285.79L406.359 284.489L406.004 285.046L408.048 286.347L406.747 288.391L407.305 288.746L408.605 286.702L410.649 288.002L411.004 287.445Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_4"
                            d="M595.004 383.445L592.96 382.144L594.261 380.1L593.703 379.746L592.403 381.79L590.359 380.489L590.004 381.046L592.048 382.347L590.747 384.391L591.305 384.746L592.605 382.702L594.649 384.002L595.004 383.445Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_5"
                            d="M424.004 346.445L421.96 345.144L423.261 343.1L422.703 342.746L421.403 344.79L419.359 343.489L419.004 344.046L421.048 345.347L419.747 347.391L420.305 347.746L421.605 345.702L423.649 347.002L424.004 346.445Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_6"
                            d="M836.004 297.445L833.96 296.144L835.261 294.1L834.703 293.746L833.403 295.79L831.359 294.489L831.004 295.046L833.048 296.347L831.747 298.391L832.305 298.746L833.605 296.702L835.649 298.002L836.004 297.445Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_7"
                            d="M382.004 176.445L379.96 175.144L381.261 173.1L380.703 172.746L379.403 174.79L377.359 173.489L377.004 174.046L379.048 175.347L377.747 177.391L378.305 177.746L379.605 175.702L381.649 177.002L382.004 176.445Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_8"
                            d="M553.004 198.924L550.142 197.104L551.963 194.242L551.183 193.746L549.362 196.607L546.501 194.786L546.004 195.567L548.866 197.387L547.045 200.249L547.825 200.746L549.646 197.884L552.507 199.705L553.004 198.924Z"
                            fill="white"
                          />
                        </g>
                        <g id="stars_2">
                          <path
                            id="Vector_9"
                            d="M450.004 236.746C451.661 236.746 453.004 235.402 453.004 233.746C453.004 232.089 451.661 230.746 450.004 230.746C448.347 230.746 447.004 232.089 447.004 233.746C447.004 235.402 448.347 236.746 450.004 236.746Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_10"
                            d="M333.004 236.746C334.661 236.746 336.004 235.402 336.004 233.746C336.004 232.089 334.661 230.746 333.004 230.746C331.347 230.746 330.004 232.089 330.004 233.746C330.004 235.402 331.347 236.746 333.004 236.746Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_11"
                            d="M537.004 126.746C538.661 126.746 540.004 125.402 540.004 123.746C540.004 122.089 538.661 120.746 537.004 120.746C535.347 120.746 534.004 122.089 534.004 123.746C534.004 125.402 535.347 126.746 537.004 126.746Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_12"
                            d="M509.004 309.746C510.661 309.746 512.004 308.402 512.004 306.746C512.004 305.089 510.661 303.746 509.004 303.746C507.347 303.746 506.004 305.089 506.004 306.746C506.004 308.402 507.347 309.746 509.004 309.746Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_13"
                            d="M507.004 245.746C508.109 245.746 509.004 244.85 509.004 243.746C509.004 242.641 508.109 241.746 507.004 241.746C505.899 241.746 505.004 242.641 505.004 243.746C505.004 244.85 505.899 245.746 507.004 245.746Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_14"
                            d="M712.004 333.746C713.109 333.746 714.004 332.85 714.004 331.746C714.004 330.641 713.109 329.746 712.004 329.746C710.899 329.746 710.004 330.641 710.004 331.746C710.004 332.85 710.899 333.746 712.004 333.746Z"
                            fill="#FF6584"
                          />
                          <path
                            id="Vector_15"
                            d="M406.004 224.746C407.109 224.746 408.004 223.85 408.004 222.746C408.004 221.641 407.109 220.746 406.004 220.746C404.899 220.746 404.004 221.641 404.004 222.746C404.004 223.85 404.899 224.746 406.004 224.746Z"
                            fill="#FF6584"
                          />
                        </g>
                        <g id="stars_1">
                          <path
                            id="Vector_16"
                            d="M531.004 62.7456C532.109 62.7456 533.004 61.8501 533.004 60.7456C533.004 59.641 532.109 58.7456 531.004 58.7456C529.899 58.7456 529.004 59.641 529.004 60.7456C529.004 61.8501 529.899 62.7456 531.004 62.7456Z"
                            fill="#FF6584"
                          />
                          <path
                            id="Vector_17"
                            d="M449.004 155.746C450.109 155.746 451.004 154.85 451.004 153.746C451.004 152.641 450.109 151.746 449.004 151.746C447.899 151.746 447.004 152.641 447.004 153.746C447.004 154.85 447.899 155.746 449.004 155.746Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_18"
                            d="M474.004 88.7456C475.109 88.7456 476.004 87.8501 476.004 86.7456C476.004 85.641 475.109 84.7456 474.004 84.7456C472.899 84.7456 472.004 85.641 472.004 86.7456C472.004 87.8501 472.899 88.7456 474.004 88.7456Z"
                            fill="white"
                          />
                          <path
                            id="Vector_19"
                            d="M773.004 269.746C774.661 269.746 776.004 268.402 776.004 266.746C776.004 265.089 774.661 263.746 773.004 263.746C771.347 263.746 770.004 265.089 770.004 266.746C770.004 268.402 771.347 269.746 773.004 269.746Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_20"
                            d="M574.004 280.746C575.661 280.746 577.004 279.402 577.004 277.746C577.004 276.089 575.661 274.746 574.004 274.746C572.347 274.746 571.004 276.089 571.004 277.746C571.004 279.402 572.347 280.746 574.004 280.746Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_21"
                            d="M523.004 358.746C528.527 358.746 533.004 354.268 533.004 348.746C533.004 343.223 528.527 338.746 523.004 338.746C517.481 338.746 513.004 343.223 513.004 348.746C513.004 354.268 517.481 358.746 523.004 358.746Z"
                            fill="#00ADB5"
                          />
                          <path
                            id="Vector_22"
                            d="M644.004 242.746C645.661 242.746 647.004 241.402 647.004 239.746C647.004 238.089 645.661 236.746 644.004 236.746C642.347 236.746 641.004 238.089 641.004 239.746C641.004 241.402 642.347 242.746 644.004 242.746Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <g id="man">
                        <path
                          id="Vector_23"
                          d="M91.9285 720.614C91.9285 720.614 86.3315 744.02 91.4197 745.037C96.5079 746.055 121.44 745.727 127.546 746.744C133.651 747.762 146.372 746.055 146.372 741.476C146.372 736.897 133.143 733.844 133.143 733.844C133.143 733.844 114.316 723.667 113.808 723.158C113.299 722.65 91.9285 720.614 91.9285 720.614Z"
                          fill="#2F2E41"
                        />
                        <path
                          id="Vector_24"
                          d="M97.9211 553.492C97.9211 553.492 99.7461 574.175 99.7461 576C99.7461 577.825 88.7959 673.944 91.2292 693.411C93.6626 712.878 91.004 719.095 91.004 722.746C91.004 726.396 110.696 725.045 110.696 725.045L131.988 590.601L121.038 550.45L97.9211 553.492Z"
                          fill="black"
                        />
                        <path
                          id="Vector_25"
                          d="M99.0519 725.738C99.0519 725.738 93.9638 744.055 99.0519 745.073C104.14 746.09 129.072 743.907 135.178 744.925C141.284 745.942 154.004 746.09 154.004 741.511C154.004 736.932 140.775 733.879 140.775 733.879C140.775 733.879 121.949 723.703 121.44 723.194C120.931 722.685 99.0519 725.738 99.0519 725.738Z"
                          fill="#2F2E41"
                        />
                        <path
                          id="Vector_26"
                          d="M92.446 529.158C92.446 529.158 85.1458 546.8 93.6627 555.925C102.179 565.05 111.913 583.301 111.913 584.517C111.913 585.734 94.8794 706.795 97.3128 714.703C99.7461 722.612 99.1377 727.478 98.5294 728.695C97.9211 729.912 104.613 736.604 111.913 736.604C119.213 736.604 130.163 731.129 131.38 726.262C132.597 721.395 129.555 679.419 130.163 671.511C130.772 663.602 155.106 537.066 152.064 534.025C149.022 530.983 92.446 529.158 92.446 529.158Z"
                          fill="black"
                        />
                        <path
                          id="Vector_27"
                          d="M138.68 389.238C150.104 389.238 159.364 379.978 159.364 368.554C159.364 357.131 150.104 347.871 138.68 347.871C127.257 347.871 117.996 357.131 117.996 368.554C117.996 379.978 127.257 389.238 138.68 389.238Z"
                          fill="#9F616A"
                        />
                        <path
                          id="Vector_28"
                          d="M125.905 378.896C125.905 378.896 130.163 401.405 127.122 403.839C124.08 406.272 150.239 409.922 150.239 409.922C150.239 409.922 153.281 380.113 153.889 377.071C154.497 374.03 125.905 378.896 125.905 378.896Z"
                          fill="#9F616A"
                        />
                        <path
                          id="Vector_29"
                          d="M153.889 408.097C153.889 408.097 157.813 386.662 128.004 392.746C128.004 392.746 100.787 415.062 102.004 435.746C103.221 456.429 92.446 516.382 93.6627 520.641C94.8794 524.899 86.3626 530.374 90.0126 532.199C93.6627 534.025 159.364 544.975 161.189 532.199C163.014 519.424 160.581 487.182 161.797 481.098C163.014 475.015 161.797 423.914 158.147 417.831C154.497 411.747 153.889 408.097 153.889 408.097Z"
                          fill="#00ADB5"
                        />
                        <path
                          id="Vector_30"
                          d="M141.114 556.533C141.114 556.533 131.988 591.209 143.547 591.209C155.106 591.209 154.497 555.317 154.497 555.317L141.114 556.533Z"
                          fill="#9F616A"
                        />
                        <path
                          id="Vector_31"
                          d="M147.107 372.006C146.843 373.751 144.15 374.475 140.196 374.136L140.19 374.135C138.515 373.978 136.855 373.694 135.224 373.285C132.756 372.678 131.366 374.873 130.469 377.912C128.997 382.926 128.886 390.249 127.591 391.204C118.551 396.2 91.8406 362.7 105.528 354.027C110.403 350.937 126.813 339.404 138.151 341.734C149.488 344.064 144.899 358.136 144.899 358.136C144.899 358.136 145.314 359.983 145.786 362.356C146.458 365.345 146.912 368.379 147.145 371.434C147.145 371.625 147.132 371.816 147.107 372.006Z"
                          fill="black"
                        />
                        <path
                          id="Vector_32"
                          d="M148.414 414.18C148.414 414.18 127.73 412.964 125.905 443.381C124.08 473.798 124.688 502.391 124.688 502.999C124.688 503.607 133.205 561.4 141.114 561.4C149.022 561.4 155.106 560.183 156.931 557.142C158.756 554.1 152.064 510.299 152.064 510.299C152.064 510.299 149.022 464.065 153.889 449.464C158.756 434.864 159.364 416.005 148.414 414.18Z"
                          fill="#00ADB5"
                        />
                        <path
                          id="Vector_33"
                          opacity="0.1"
                          d="M125.004 451.746L119.004 516.746L139.004 561.746L126.004 515.746L125.004 450.746"
                          fill="black"
                        />
                        <path
                          id="Vector_34"
                          opacity="0.1"
                          d="M154.004 458.746L155.532 535.375L150.004 493.746L154.004 458.746Z"
                          fill="black"
                        />
                        <path
                          id="Vector_35"
                          d="M257.738 747.357H0V745.251H258.12L257.738 747.357Z"
                          fill="black"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubscriberForm from '../components/SubscriberForm'
export default {
  components: {
    SubscriberForm
  },
  methods: {},
  mounted() {},
  data() {
    return {
      light_bg: false
    }
  }
}
</script>

<style>
#bg {
  animation: grow-large 5s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}

#stars_1 {
  animation: grow 1s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}

#stars_2 {
  animation: grow 2s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}

#stars_3 {
  animation: grow-large 4s linear infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}

#man {
  animation: shrink 4s linear infinite alternate;
  transform-origin: bottom;
  transform-box: fill-box;
}

@keyframes grow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

@keyframes grow-large {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}

@keyframes shrink {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(20deg);
  }
}
</style>
