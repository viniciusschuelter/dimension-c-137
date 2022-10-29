<template>
  <div id="app" class="flex flex-col bg-[#f0e14a]">
<!--    <Header :title="'Dimension C-137'"></Header>-->
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
// import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import Navbar from '@/layout/Navbar';

export default {
  name: 'App',
  components: {
    // Header,
    Footer,
    Navbar
  }
};
</script>
