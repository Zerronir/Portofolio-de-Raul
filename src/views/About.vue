<template>
  <div class="container mx-auto md:mx-0 lg:w-auto md:flex md:flex-col sm:w-auto sm:p-auto sm:flex sm:grid sm:text-center">
    <div class="text-center">
      <h2 class="text-4xl font-semibold">
        <span class="text-blue-600 dark:text-white-900">&lt;</span> Raúl García-Verdugo Cardador <span class="text-blue-600 dark:text-white-900">/&gt;</span>
      </h2>
      <div class="text-sm text-center pt-5">
        <p>
          <q>{{ $t('aboutPage.msg') }} </q> -- Rich Cook
        </p>
        <div class="mt-10 flex justify-center">
          <ul class="flex">
            <li class="pr-5"><a href="https://github.com/Zerronir" target="_blank" class="text-5xl text-indigo-900"><BIconGithub /></a></li>
            <li class="pl-5"><a href="https://www.linkedin.com/in/rmcwebdesign/" target="_blank" class="text-5xl text-blue-800"><BIconLinkedin /></a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container pt-10 sm:text-center sm:w-1/2 md:w-auto md:text-justify lg:w-auto lg:text-justify">
      <div>
        <p class="text-lg font-semibold pb-4 sm:px-3 lg:px-0 md:px-0">{{ $t('aboutPage.shortText') }}</p>
        <p class="text-lg font-semibold pb-4">{{ $t('aboutPage.experience') }}</p>
        <p class="text-lg font-semibold">{{ $t('aboutPage.secondExp') }}</p>
      </div>
    </div>

    <div class="container pt-10">
      <h2 class="font-semibold text-3xl text-center"><span class="text-blue-600 dark:text-white-900">&lt;</span> {{$t('aboutPage.companies')}} <span class="text-blue-600 dark:text-white-900">/&gt;</span></h2>
      <div class="grid sm:grid lg:grid-cols-3 mt-5 md:grid-cols-1">
        <ExperienceCard v-for="(comp, i) in companies" :role="comp.role" :from="comp.from" :to="comp.to" :subTechs="comp.subTechs" :key="`${comp.companyName}${i}`" :companyName="comp.companyName" :mainTech="comp.mainTech" />
      </div>
    </div>

  </div>
</template>

<script>
import { BIconLinkedin, BIconGithub } from 'bootstrap-icons-vue'; 
import ExperienceCard from "@/components/ExperienceCard";
import techs from "@/helpers/techs"

console.log(techs.js.toString())

export default {
  name: 'About',
  components: {
    BIconLinkedin,
    BIconGithub,
    ExperienceCard
  },
  data() {
    return [
      this.companies = [
        {
          companyName: 'Nautic Advisor',
          mainTech: techs.python,
          role: 'Web developer and analyst',
          from: 2017,
          to: 2018,
          subTechs: {
              js: techs.js,
              css: techs.css,
              php: techs.php,
              wordpress: techs.wordpress,
              django: techs.django
          }
        },
        {
          companyName: 'Smart Baby SLU',
          role: 'CTO and Software Engineer',
          mainTech: techs.php,
          from: 2018,
          to: 2020,
          subTechs: {
              js: techs.js,
              react: techs.react,
              css: techs.css,
              laravel: techs.laravel,
              wordpress: techs.wordpress,
              django: techs.django
            }
        },
        {
          companyName: 'Yoogroop SL',
          role: 'Web developer and analyst',
          mainTech: techs.php,
          from: 2018,
          to: 2020,
          subTechs: {
              js: techs.js,
              css: techs.css,
              laravel: techs.laravel,
              django: techs.django,
              python: techs.python,
              wordpress: techs.wordpress,
              jq: techs.jq,
          }
        },
        {
          companyName: 'Millerlandy Consult',
          mainTech: techs.php,
          role: 'CTO and Software Engineer',
          from: 2021,
          to: 'now',
          subTechs: {
              js: techs.js,
              react: techs.react,
              jq: techs.jq,
              css: techs.css,
              laravel: techs.laravel,
              flask: techs.flask,
              python: techs.python
          }
        },
        
      ]
    ]
  }
}
</script>
