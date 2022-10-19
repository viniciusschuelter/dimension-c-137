<template>
  <div id="app" class="p-10">
    <Header :title="'Dimension C-137'"></Header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>
