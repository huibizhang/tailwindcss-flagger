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
<!-- Flagger is a tailwindcss plugin, just like a named `peer` variant. But instead of `peer`, flagger have name, so they can paired each my name. -->
**Flagger** is a new Tailwind plugin, provides more flexibility to input type check and radio. Unlike the new `peer` variant that **behaves as “group”**, Flagger **generates key-value pairs** to be able to control each element.


## Peer
As TailwindCSS comes to v2.2, have a **new convinent variant** we can use, called `peer`.

### What is `peer` ?
`peer` is mean ***peer to peer***, by this varient, thay can paired together, for example:

<ExampleCode id="peer-example1">
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

<ExampleCode id="peer-example2">
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

So, Flagger resolved this problem. Let we see the examples.


# Flagger
Flagger have 3 default variants for you to use, and it support to pair item that is a child of border, not only the elements behind itself.

The situation of [example2 in `peer` section](#peer-example2), change to use `flag` it would works,  for example:

<ExampleCode id="flagger-example1">
<template v-slot:example>
  <div class="flex justify-between items-center">
    <div class="pair-1-hover:bg-red-300 p-3">
      I have<br><code>peer-hover:</code>
    </div>
    <div class="bg-green-400 hover:bg-green-300 p-3 rounded-md pair-1 transition-all">
      I have <code>peer</code><br>
      hover me !
    </div>
    <div>
      <div class="p-3 pair-1-hover:bg-blue-300 rounded-md transition-all">
        I have<br><code>peer-hover:</code><br>
        too
      </div>
    </div>
  </div>
</template>
<template v-slot:code>

```html
<!-- no effact, because not behind `peer` -->
<div class="pair-1-hover:bg-red-300 ...">
  I have `peer-hover:`
</div>

<div class="pair-1 ...">
  I have `peer`<br>
  hover me !
</div>

<div>
  <!-- behind `peer`, but not borther -->
  <div class="pair-1-hover:bg-blue-300 ...">
    I have `peer-hover:` too
  </div>
</div>
```
</template>
</ExampleCode>

and there 3 default variants are not all, you also can add your new flag, see [costumizing](#costumzing).

## Installation

```bash
# with npm
npm install -D tailwind-flagger

# with yarn
yarn add -D tailwind-flagger
```

after installed, import to your `tailwind.config.js`:

```diff{1,10}
+ const flagger = require('tailwindcss-flagger')

  module.exports = {
    purge: [],
    theme: {
      extend: {},
    },
    plugins: [
      ...
+     flagger
      ...
    ],
  }
```

## Usage
WIP


## Costumizing
WIP

<!-- <div class="w-full text-center mt-8 py-10 bg-gray-100 rounded-t-xl flex justify-center gap-3">
  <ThirdCutSwitch 
    name="example1"
    label="in"
  />

  <ThirdCutSwitch 
    name="example2"
    label="out"
  />
</div>


<br>

<Bowser />

<footer class="mt-20 p-4 pt-0 text-gray-500 text-sm text-center">
  <hr class="block mb-8" />
  MIT Licensed | Copyright © 2021-present huibizhang Rabbit
</footer> -->