<template>
    <div>
        <div class="md:w-auto lg:w-auto sm:w-1/8 px-3">
          <div class="pt-10 pb-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md  hover:shadow-lg  mb-8">
            <h4 class="font-semibold text-2xl text-dark mb-3">
                {{ $t(projectName) }} 
            </h4>

            <a :href="src" class="hover:text-blue-600" target="_blank">Link</a>

            <p class="text-body-color pb-3 pt-3 flex justify-center">
                <img :src="mainTech" class="w-16 h-16" :alt="mainTechAlt">
            </p>

            <p>
                {{ $t(shortDescription) }}
            </p>

            <div class="flex justify-between pt-3 align-center">
                <img v-for="(sub, i) in subTechs" class="w-8" :key="`${i}`" :src="sub" />
            </div>

          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['projectName', 'shortDescription', 'mainTech', 'src'],
}
</script>