<template>
  <!-- TabLayout Component -->
  <div class="w-11/12 max-w-3xl inset-0 mx-auto">
    <input class="sr-only flag-1" type="radio" id="tab-1" name="tabLayout" checked />
    <input class="sr-only flag-2" type="radio" id="tab-2" name="tabLayout" />
    <input class="sr-only flag-3" type="radio" id="tab-3" name="tabLayout" />

    <!-- TabLayout -->
    <div class="w-full">
      <!-- Tabs -->
      <div class="w-full flex text-sm -space-x-px -mb-px">
        <label class="block px-4 py-2 ring-gray-300 ring-[1px] rounded-t-md bg-gray-200 flag-1-checked:bg-white transition-all cursor-pointer select-none" for="tab-1">
          Tailwind CSS
        </label>
        <label class="block px-4 py-2 ring-gray-300 ring-[1px] rounded-t-md bg-gray-200 flag-2-checked:bg-white transition-all cursor-pointer select-none" for="tab-2">
          vitawind
        </label>
        <label class="block px-4 py-2 ring-gray-300 ring-[1px] rounded-t-md bg-gray-200 flag-3-checked:bg-white transition-all cursor-pointer select-none" for="tab-3">
          New Page
        </label>
        <label class="flex items-center px-3 p-2 hover:bg-gray-200 rounded-full scale-90 font-black transition-all cursor-pointer select-none">
          ＋
        </label>
      </div>
      
      <!-- Windows -->
      <div class="w-full h-40 ring-[1px] ring-gray-300">
        <div class="w-full h-full hidden flag-1-checked:block border-0 p-5 text-xl font-bold">
          Tailwind CSS !
        </div>
        <div class="w-full h-full hidden flag-2-checked:block border-0 p-5 text-xl font-bold">
          Vitawind !
        </div>
        <div class="w-full h-full hidden flag-3-checked:block border-0 p-5 text-xl font-bold">
          This is a new page.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Bowser",
  }
</script>