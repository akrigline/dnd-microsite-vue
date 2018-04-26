---
to: src/components/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name) %>.vue
---
<template src="./<%= h.inflection.camelize(name, true) %>.html"></template>

<script src="./<%= h.inflection.camelize(name, true) %>.js"></script>

<style lang="sass" scoped>
@import "./<%= h.inflection.camelize(name, true) %>.scss"
</style>
