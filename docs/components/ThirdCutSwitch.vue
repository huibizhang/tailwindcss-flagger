<template>
  <div class="h-10 p-2 bg-gray-600 dark:bg-blue-700 inline-block rounded-full">
    <div class="relative w-full h-full flex gap-1">
      <input class="appearance-none m-0 flex-none w-6 h-6 rounded-full transition-all cursor-pointer hover:bg-gray-400 flag-1" type="radio" :id="`${name}-input-1`" :name="`${name}-3-cut-switch`" checked />
      <input class="appearance-none m-0 flex-none w-6 h-6 rounded-full transition-all cursor-pointer hover:bg-gray-400 flag-2" type="radio" :id="`${name}-input-2`" :name="`${name}-3-cut-switch`" />
      <input class="appearance-none m-0 flex-none w-6 h-6 rounded-full transition-all cursor-pointer hover:bg-gray-400 flag-3" type="radio" :id="`${name}-input-3`" :name="`${name}-3-cut-switch`" />
      
      <div class="absolute top-0 w-full h-full pointer-events-none flex items-center">
        <div class="w-6 h-6 bg-gray-100 rounded-full transition-all cursor-pointer 
          flex justify-center items-center font-bold
          flag-1-checked:translate-x-0
          flag-2-checked:translate-x-[calc(100%+0.25rem)]
          flag-3-checked:translate-x-[calc((100%+0.25rem)*2)]
        ">
          <div v-if="label==='in'">
            <span class="hidden flag-1-checked:block">1</span>
            <span class="hidden flag-2-checked:block">2</span>
            <span class="hidden flag-3-checked:block">3</span>
          </div>
        </div>
      </div>

      <div v-if="label==='out'" class="absolute -top-full -mt-1.5 w-full flex text-center justify-between text-gray-300 font-bold" >
        <span class="block w-6 flag-1-checked:text-blue-500 transition-all">1</span>
        <span class="block w-6 flag-2-checked:text-blue-500 transition-all">2</span>
        <span class="block w-6 flag-3-checked:text-blue-500 transition-all">3</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdCutSwitch",
  props: ["name","label"]
}
</script>

<style>

</style>