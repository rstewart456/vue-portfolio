<template>
  <div id="projects">
    <div class="text-center text-4xl py-16 text-white">Projects</div>
    <div class="flex flex-cols flex-wrap">
    <div v-for="project in getprojects" class="mx-auto p-6" :key="project.id">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          class="w-full"
          :src="project.image"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{project.name}}</div>
          <p class="text-gray-700 h-32 text-base">
            {{project.paragraph}}
          </p>
        </div>
        <div class="px-6 py-4 flex justify-between">
          <a :href="project.location"
            class="inline-block bg-gray-200 rounded-full hover:bg-black hover:text-white px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >Live</a
          >
          <a :href="project.github"
            class="inline-block bg-gray-200 rounded-full hover:bg-black hover:text-white px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >Github</a
          >
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
    computed: {
        getprojects () {
            return this.$store.getters.projects
        }
    }
}
</script>
