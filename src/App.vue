<template>
  <div id="app" class="flex flex-col bg-[#f0e14a]">
<!--    <Header :title="'Dimension C-137'"></Header>-->
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
    <Loading v-if="$store.state.loading" />
  </div>
</template>

<script>
// import Header from '@/layout/Header';
import Navbar from '@/layout/Navbar';
import Footer from "./layout/Footer";
import Loading from "./components/Loading";

export default {
  name: 'App',
  components: {
    Loading,
    // Header,
    Footer,
    Navbar
  }
};
</script>
