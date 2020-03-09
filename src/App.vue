<template>
  <div class="bgimage">
    <header class="bg-black fixed w-full lg:flex lg:items-center lg:justify-between">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="text-white">
          <div class="hidden font-bold text-lg sm:block">Welcome to my Portfolio Page</div>
          <div class="sm:hidden font-bold text-lg">Welcome</div>
        </div>
        <div class="text-white lg:hidden">
          <button v-if="!isOpen" @click="isOpen = !isOpen">
            <i class="text-white fas fa-bars fa-lg"></i>
          </button>
          <button v-if="isOpen" @click="isOpen = !isOpen">
            <i class="text-white fas fa-times fa-lg"></i>
          </button>
        </div>
      </div>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="lg:bg-black lg:flex lg:justify-between bg-white rounded lg:text-white lg:pr-4"
      >
        <a
          class="block font-semibold lg:hover:bg-black rounded sm:hover:text-indigo-600 px-2 py-2 sm:pr-4"
          href="#home"
          @click="isOpen = !isOpen"
          v-smooth-scroll
          >Home</a
        >
        <a
          class="block font-semibold sm:hover:bg-black rounded sm:hover:text-indigo-600 px-2 py-2 mt-1 sm:mt-0 sm:pr-4"
          href="#projects"
          @click="isOpen = !isOpen"
          v-smooth-scroll
          >Projects</a
        >
        <a
          class="block font-semibold sm:hover:bg-black rounded sm:hover:text-indigo-600 px-2 py-2 mt-1 sm:mt-0"
          href="#about"
          @click="isOpen = !isOpen"
          v-smooth-scroll
          >About</a
        >
        <a
          class="lg:hidden block font-semibold sm:hover:bg-black rounded sm:hover:text-indigo-600 px-2 py-2 mt-1 sm:mt-0"
          href="#contact"
          @click="isOpen = !isOpen"
          v-smooth-scroll
          >Contact Me</a
        >
      </div>
    </header>
    <div>
    <Home />
    <Projects />
    <About />
    <Contact class="lg:hidden" />
    </div>
  </div>
</template>
<script>
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
export default {
  components: {
    Home,
    Projects,
    About,
    Contact,
  },
  data () {
    return {
      isOpen: false
    };
  },
  created () {
    this.$store.dispatch("getprojects");
  }
};
</script>
<style scoped>
.bgimage {
  height: auto;
  font-family: "Merienda One", cursive;
  background-image: url("./assets/images/bgimage1.jpg");
  background-attachment: fixed;
}
@media screen and (min-width: 0px) and (max-width: 400px) {
  .bgimage {
    background-position: 25% 5%;
  }
}
@media screen and (min-width: 401px) and (max-width: 650px) {
  .bgimage {
    background-position: 22% 35%;
  }
}
@media screen and (min-width: 651px) and (max-width: 950px) {
  .bgimage {
    background-position: 35% 25%;
  }
}
</style>
