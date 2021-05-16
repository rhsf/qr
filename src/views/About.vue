<template>
  <div id="about" class="w-5/6 md:w-2/3 bg-white rounded shadow-lg px-8 py-6 my-8">
    <h1 class="font-bold text-lg">QR Butter 🧈</h1>
    <p>A buttery smooth QR code generator experience.</p>
    <br />
    <hr class="w-1/4" />
    <br />
    <h1 class="font-bold text-lg">Credits</h1>
    <div v-for="cm in creditsMain" :key="cm.url" class="text-gray-700">
      <a :href=cm.url rel="noopener noreferrer" target="_blank" class="transition-colors duration-200 hover:text-gray-500">{{ cm.title }}</a>
    </div>
    <ul class="overflow-x-auto text-gray-600 font-light md:list-disc list-inside pt-4 pl-2">
      <li v-for="link in credits" :key="link" class="leading-5 pb-2">
        <a :href=link rel="noopener noreferrer" target="_blank" class="transition-colors duration-200 hover:text-gray-400">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      creditsMain: [
        { title: "Built using Vue (v3, Router, PWA, Store)", url: "https://vuejs.org" },
        { title: "Built using Tailwind CSS", url: "https://tailwindcss.com/" },
        { title: "Hosted on GitHub Pages", url: "https://pages.github.com/" },
        { title: "Icons designed by Freepik from Flaticon", url: "https://www.flaticon.com/free-icon/butter_817313" },
      ],
      credits: [
        "https://github.com/gerardreches/vue-qrcode-component",
        "https://www.gradientmagic.com/",
        "https://learnvue.co/2021/01/4-awesome-examples-of-vue-router-transitions/",
      ],
    }
  }
}
</script>
