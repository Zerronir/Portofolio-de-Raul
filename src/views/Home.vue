<template>
  <main class="container mx-auto">
      <div id="about_me">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
  </main>
</template>

<script>
import About from "@/views/About"
import Projects from "@/views/Projects";

export default {
  name: 'Home',
  components: {
    About,
    Projects
  }
}
</script>
