<template>
  <div>
    <h1 class="pt-5 pb-10 sm:py-20">{{ msg }}</h1>

    <div class="container mx-auto">
      <div class="border-gray-600 border-solid border rounded-lg p-4">
        <img
          src="@/assets/thumbs-up-icon.png"
          class="mx-auto h-20 mb-5 hidden sm:block"
        />
        <h1 class="text-center text-2xl text-blue-700">Small-Letter</h1>
        <p class="text-red-600 text-xs">Hinweis....</p>
        <p class="card-text text-base">
          dieser text hat eigentlich gar keinen wirklichen inhalt. aber er hat
          auch keine relevanz, und deswegen ist das egal. er dient lediglich als
          platzhalter. um mal zu zeigen, wie diese stelle der seite aussieht,
          wenn ein paar zeilen vorhanden sind. ob sich der text dabei gut fühlt,
          weiß ich nicht. ich schätze, eher nicht, denn wer fühlt sich
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>
