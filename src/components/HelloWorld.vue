<template>
  <div>
    <h1 class="pt-5 pb-10 sm:py-20">{{ msg }}</h1>

    <div class="container mx-auto p-4">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/3 pb-2 sm:p-2">
          <card />
        </div>
        <div class="w-full sm:w-1/3 pb-2 sm:p-2">
          <card />
        </div>
        <div class="w-full sm:w-1/3 pb-2 sm:p-2">
          <card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from './card.vue'

export default {
  components: {
    card,
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>
