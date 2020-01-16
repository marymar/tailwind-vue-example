<template>
  <div>
    <h1 class="pb-10">{{ msg }}</h1>
    <p class="text-red-600">Roter Text</p>
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
