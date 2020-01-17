<template>
  <div class="card">
    <span class="card-badge">
      <img src="@/assets/mary.png" />
    </span>

    <h1 class="card-title">Small-Letter</h1>
    <img
      src="@/assets/thumbs-up-icon.png"
      class="mx-auto h-20 my-5 hidden sm:block"
    />
    <p class="card-hint">Hinweis....</p>
    <p class="card-text text-base">
      dieser text hat eigentlich gar keinen wirklichen inhalt. aber er hat auch
      keine relevanz, und deswegen ist das egal. er dient lediglich als
      platzhalter. um mal zu zeigen, wie diese stelle der seite aussieht, wenn
      ein paar zeilen vorhanden sind. ob sich der text dabei gut fühlt, weiß ich
      nicht. ich schätze, eher nicht, denn wer fühlt sich
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.card {
  @apply border-gray-600 border-solid border rounded-lg p-4 relative;
}

.card-badge {
  @apply rounded-full w-20 h-20 overflow-hidden inline-block absolute right-0 top-0 -mr-3 -mt-5 hidden;
}

.card-hint {
  @apply text-super-red text-xs mt-4 mb-2;
}

.card-title {
  @apply font-bold text-center text-2xl text-blue-100 bg-blue-800 -mx-4 -mt-4 py-5 rounded-t-lg;
}

.card-text {
  @apply card-text text-base text-mary-green;
}

@screen sm {
  .card-badge {
    @apply block;
  }

  .card-hint {
    @apply mt-0;
  }
}
</style>
