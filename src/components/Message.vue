<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
      default: 'Default message'
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  text-align: left;
  color: tomato;
}
</style>
