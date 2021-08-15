---
navbar: false
sidebar: false
---

<script>
  import Header from './components/Header.vue'
  import ThirdCutSwitch from './components/ThirdCutSwitch.vue'
  import Bowser from './components/Bowser.vue'
  import ExampleCode from './components/ExampleCode.vue'

  export default {
    components: {
      Bowser, Header, ThirdCutSwitch,ExampleCode
    }
  }
</script>

<Header />

# Overview
Flagger is a tailwindcss plugin, just like a named `peer` variant. But instead of `peer`, flagger have name, so they can paired each my name.

## Peer
As tailwindcss comes to v2.2, have a new convinent variant can we use, called `peer`.

What is `peer` ? `peer` is mean ***peer to peer***, by this varient, thay can paired together, for example:

<ExampleCode>
<template v-slot:example>
  <div class="flex justify-between items-center">
    <div class="bg-green-400 hover:bg-green-300 p-3 rounded-md peer transition-all">
      I have <code>peer</code><br>
      hover me !
    </div>
    <div class="p-3 peer-hover:bg-blue-300 rounded-md transition-all">
      I have <code>peer-hover:</code>
    </div>
  </div>
</template>
<template v-slot:code>

```html
<div class="peer ...">
  I have `peer`<br>
  hover me !
</div>

<!-- 
  behind `peer`,if they are borthers,
  they can pair
-->
<div class="peer-hover:bg-blue-300 ...">
  I have `peer-hover:`
</div>
```
</template>
</ExampleCode>

But, if `peer-{action}` variant and `peer` not borther or not behind the `peer`, will not have effact.

<ExampleCode>
<template v-slot:example>
  <div class="flex justify-between items-center">
    <div class="p-3">
      I have<br><code>peer-hover:</code>
    </div>
    <div class="bg-green-400 hover:bg-green-300 p-3 rounded-md peer transition-all">
      I have <code>peer</code><br>
      hover me !
    </div>
    <div>
      <div class="p-3 peer-hover:bg-blue-300 rounded-md transition-all">
        I have<br><code>peer-hover:</code><br>
        too
      </div>
    </div>
  </div>
</template>
<template v-slot:code>

```html
<!-- no effact, because not behind `peer` -->
<div class="peer-hover:bg-red-300 ...">
  I have `peer-hover:`
</div>

<div class="peer ...">
  I have `peer`<br>
  hover me !
</div>

<div>
  <!-- behind `peer`, but not borther -->
  <div class="peer-hover:bg-blue-300 ...">
    I have `peer-hover:` too
  </div>
</div>
```
</template>
</ExampleCode>

<div class="w-full text-center mt-8 py-10 bg-gray-300 rounded-t-xl">
  <ThirdCutSwitch 
    name="example1"
  />
</div>


<br>

<Bowser />

<footer class="mt-20 p-4 pt-0 text-gray-500 text-sm text-center">
  <hr class="block mb-8" />
  MIT Licensed | Copyright © 2021-present huibizhang Rabbit
</footer>