<template>
  <div>
    <SliderBanner :images="images" /> <!-- Sửa lại tên prop từ src thành images -->
  </div>
  <div class="bg-red-600">
    <div class="py-7">
      <form class=" flex justify-center items-center" action="">
        <input
          class="py-3 px-6 focus:border-primary rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary mr-1"
          type="text" placeholder="Search Products...">
        <button class="py-3 px-6 bg-red-500 rounded text-white">
          SEARCH
        </button>
      </form>
    </div>
  </div>
  <div style="background-color: #f9f9f9;">
    <div class="container px-4 lg: lg:max-w-screen-xl mx-auto pt-20">
      <div class="bg-white shadow p-8">
        <h1 class="lg:text-4xl text-3xl font-bold py-2 text-center">SELCO USA, INC., Providing the Offshore Community
          Technical
          Solutions</h1>
        <div class="flex justify-center items-center">
          <NuxtImg class="py-3" width="400" height="40" src="/images/SELCO-USA-LOGO-500x51.png" />
        </div>
        <p class="my-6 text-colorContent font-light">
          We at Selco USA, Inc. have extensive knowledge of the marine industry. Our product lines, which originated
          in
          Europe in 1961, are now shipped to more than 85 nations each year. Whether you need a Ground Fault Monitor
          and
          Detector for early detection of immediate and trending ground faults, Arc Protection Relay for unparalleled
          switchgear protection, or any other protective device, we can help!
        </p>
        <p class="my-6 text-colorContent font-light">
          Backed by more than 60 years of experience, our knowledge and capabilities allow us to provide custom
          turnkey
          solutions to all of our clients in a short amount of time. We have long represented the following
          businesses:
        </p>
        <p class="my-6 text-colorContent font-light uppercase">
          <NuxtLink class="text-red-500 underline hover:no-underline" to="">HK INSTRUMENTS</NuxtLink to=""> - USER
          FRIENDLY MEASURING DEVICES
          <NuxtLink class="text-red-500 underline hover:no-underline" to="">MEGACON </NuxtLink to=""> – INNOVATION
          BEYOND TRADITION <br>
          <NuxtLink class="text-red-500 underline hover:no-underline" to="">SACI</NuxtLink to=""> –
          INSTRUMENTATION <br>
          <NuxtLink class="text-red-500 underline hover:no-underline" to="">SELCO</NuxtLink to=""> – GENERATOR
          CONTROL AND PROTECTION <br>
          <NuxtLink class="text-red-500 underline hover:no-underline" to="">NORTHERN DESIGN</NuxtLink to=""> DESIGN –
          LEADERS THROUGH INNOVATION <br>
          <NuxtLink class="text-red-500 underline hover:no-underline" to="">LITTELFUSE</NuxtLink to=""> -EXPERIENCE
          APPLIED, ANSWERS DELIVERED
        </p>
        <p class="my-6 text-colorContent font-light">
          Our commitment to the finest design and unmatched workmanship can be seen in every product we design; be it a
          flexgen, synchroscope, or alarm panel. We can help you choose the right product for your maritime needs &
          ensure your operations run smoothly. With a comprehensive product range, including insulation detection
          devices, motorized potentiometer, and ground fault monitor solutions, together with our team’s extensive
          knowledge, we are confident to bring a real difference to your business.
        </p>
        <p class="my-6 text-colorContent font-light">
          We provide phone and email support at no charge, but for field service worldwide, we charge a minimal fee.
        </p>
      </div>
      <div style="">

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const images = [
  {
    image: '/images/1.jpg' // Đường dẫn hình ảnh đúng
  },
  {
    image: '/images/2.jpg'
  },
  {
    image: '/images/3.jpg'
  },
  {
    image: '/images/4.jpg'
  },

];
</script>

<style></style>
