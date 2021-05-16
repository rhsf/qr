<template>
  <div class="w-5/6 bg-white rounded shadow-lg p-6 my-8">

    <!-- <label for="qrTextInput">Text or URL:</label>
    <input class="w-full border border-gray-400 rounded px-2 py-1" id="qrTextInput" name="QR Text Input" minlength="2" v-model.lazy="qrText"> -->

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="mx-auto">
        <!-- If qrText is empty, show placeholder content -->
        <!-- Don't automatically insert sample qrText, to make pasting content easier -->
        <qr-code 
          v-if=qrText
          :text=qrText
          :size=200
          color="#000"
          bg-color="#fff">
        </qr-code>
        <!-- Else use qrText -->
        <qr-code 
          v-else
          text="https://youtube.com/watch?v=dQw4w9WgXcQ"
          :size=200
          color="#000"
          bg-color="#fff">
        </qr-code>
      </div>
      <textarea class="border border-gray-300 rounded px-4 py-3 md:col-span-2" v-model.lazy="qrText" placeholder="Text or URL"></textarea>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      qrText: "",
    }
  },
  // computed: {
  //   qrSize: function () {
  //     return Math.min(window.innerWidth-40, 200)
  //   }
  // }
}
</script>
