<template>
  <div>
    <h1 class="pt-5 pb-10 tablet:py-20">{{ msg }}</h1>

    <div class="container">
      <div class="flex flex-wrap">
        <div
          class="w-full tablet:w-1/2 desktop:w-1/3 pb-2 tablet:p-4 desktop:p-2"
        >
          <card />
        </div>
        <div
          class="w-full tablet:w-1/2 desktop:w-1/3 pb-2 tablet:p-4 desktop:p-2"
        >
          <card />
        </div>
        <div
          class="w-full tablet:w-1/2 desktop:w-1/3 pb-2 tablet:p-4 desktop:p-2"
        >
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
