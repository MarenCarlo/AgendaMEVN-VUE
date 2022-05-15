<template>
  <div class="home">
    <LoginComp/>
  </div>
</template>
<script>
  // @ is an alias to /src
  import LoginComp from '@/components/LoginComp.vue';

  export default {
    name: 'home',
    components: {
      LoginComp
    }
  }
</script>