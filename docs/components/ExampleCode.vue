<template>
  <div class="w-full bg-gray-300 rounded-md overflow-hidden">
    <div class="w-full text-center p-10">
      <slot name="example" />
    </div>
    <div class="-my-4">
      <slot name="code" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ExampleCode"
}
</script>

<style>

</style>