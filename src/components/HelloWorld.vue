<template>
  <div>
    <h1 class="pt-5 pb-10 sm:py-20">{{ msg }}</h1>

    <div class="container mx-auto p-4">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/3 pb-2 sm:p-2">
          <div
            class="border-gray-600 border-solid border rounded-lg p-4 relative"
          >
            <span
              class="rounded-full w-20 h-20 overflow-hidden inline-block absolute right-0 top-0 -mr-3 -mt-5 hidden sm:block"
            >
              <img src="@/assets/mary.png" />
            </span>

            <h1
              class="text-center text-2xl text-blue-100 bg-blue-800 -mx-4 -mt-4 py-5 rounded-t-lg"
            >
              Small-Letter
            </h1>
            <img
              src="@/assets/thumbs-up-icon.png"
              class="mx-auto h-20 my-5 hidden sm:block"
            />
            <p class="text-red-600 text-xs mt-4 mb-2 sm:mt-0">Hinweis....</p>
            <p class="card-text text-base">
              dieser text hat eigentlich gar keinen wirklichen inhalt. aber er
              hat auch keine relevanz, und deswegen ist das egal. er dient
              lediglich als platzhalter. um mal zu zeigen, wie diese stelle der
              seite aussieht, wenn ein paar zeilen vorhanden sind. ob sich der
              text dabei gut fühlt, weiß ich nicht. ich schätze, eher nicht,
              denn wer fühlt sich
            </p>
          </div>
        </div>
        <div class="w-full sm:w-1/3 pb-2 sm:p-2">
          <div
            class="border-gray-600 border-solid border rounded-lg p-4 relative"
          >
            <span
              class="rounded-full w-20 h-20 overflow-hidden inline-block absolute right-0 top-0 -mr-3 -mt-5 hidden sm:block"
            >
              <img src="@/assets/mary.png" />
            </span>

            <h1
              class="text-center text-2xl text-blue-100 bg-blue-800 -mx-4 -mt-4 py-5 rounded-t-lg"
            >
              Small-Letter
            </h1>
            <img
              src="@/assets/thumbs-up-icon.png"
              class="mx-auto h-20 my-5 hidden sm:block"
            />
            <p class="text-red-600 text-xs mt-4 mb-2 sm:mt-0">Hinweis....</p>
            <p class="card-text text-base">
              dieser text hat eigentlich gar keinen wirklichen inhalt. aber er
              hat auch keine relevanz, und deswegen ist das egal. er dient
              lediglich als platzhalter. um mal zu zeigen, wie diese stelle der
              seite aussieht, wenn ein paar zeilen vorhanden sind. ob sich der
              text dabei gut fühlt, weiß ich nicht. ich schätze, eher nicht,
              denn wer fühlt sich
            </p>
          </div>
        </div>
        <div class="w-full sm:w-1/3 pb-2 sm:p-2">
          <div
            class="border-gray-600 border-solid border rounded-lg p-4 relative"
          >
            <span
              class="rounded-full w-20 h-20 overflow-hidden inline-block absolute right-0 top-0 -mr-3 -mt-5 hidden sm:block"
            >
              <img src="@/assets/mary.png" />
            </span>

            <h1
              class="text-center text-2xl text-blue-100 bg-blue-800 -mx-4 -mt-4 py-5 rounded-t-lg"
            >
              Small-Letter
            </h1>
            <img
              src="@/assets/thumbs-up-icon.png"
              class="mx-auto h-20 my-5 hidden sm:block"
            />
            <p class="text-red-600 text-xs mt-4 mb-2 sm:mt-0">Hinweis....</p>
            <p class="card-text text-base">
              dieser text hat eigentlich gar keinen wirklichen inhalt. aber er
              hat auch keine relevanz, und deswegen ist das egal. er dient
              lediglich als platzhalter. um mal zu zeigen, wie diese stelle der
              seite aussieht, wenn ein paar zeilen vorhanden sind. ob sich der
              text dabei gut fühlt, weiß ich nicht. ich schätze, eher nicht,
              denn wer fühlt sich
            </p>
          </div>
        </div>
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
