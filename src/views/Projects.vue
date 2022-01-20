<template>
    <div>
        <div class="text-center">
            <h2 class="text-3xl font-semibold">
                <span class="text-blue-600 dark:text-white-900">&lt;</span> {{ $t('projects.header') }} <span class="text-blue-600 dark:text-white-900">/&gt;</span>
            </h2>
        </div>
        <div class="pt-10 pb-10 font-semibold">
            <p>{{ $t('projects.leadingPage') }}</p>
        </div>
        <div class="grid sm:grid lg:grid-cols-3 mt-5 md:grid-cols-1">
            <ProjectCard v-for="(pr, i) in projects" :shortDescription="pr.shortDescription" :src="pr.src" :key="i" :mainTech="pr.mainTech" :projectName="pr.projectName" />
        </div>
    </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard"
import techs from "@/helpers/techs";

export default {
    name: 'Projects',
    components: {
        ProjectCard
    },
    data() {
        return [
            this.projects = [
                {
                    projectName: 'projectList.names.matrix',
                    mainTech: techs.java,
                    shortDescription: 'projectList.shortDescription.matrix',
                    src: 'https://github.com/Zerronir/Matrix'
                },
                {
                    projectName: 'projectList.names.theVoidWithin',
                    mainTech: techs.cs,
                    shortDescription: 'projectList.shortDescription.theVoidWithin',
                    src: 'https://github.com/Zerronir/the-void-within'
                },
                {
                    projectName: 'projectList.names.goServer',
                    mainTech: techs.golang,
                    shortDescription: 'projectList.shortDescription.goServer',
                    src: 'https://github.com/Zerronir/goServer'
                },
                {
                    projectName: 'projectList.names.cifrado',
                    mainTech: techs.java,
                    shortDescription: 'projectList.shortDescription.cifrado',
                    src: 'https://github.com/Zerronir/pracitcaxifrat' 
                },
                {
                    projectName: 'projectList.names.goAPI',
                    mainTech: techs.golang,
                    shortDescription: 'projectList.shortDescription.goAPI',
                    src: 'https://github.com/Zerronir/goAPI' 
                },
                {
                    projectName: 'projectList.names.notas',
                    mainTech: techs.java,
                    shortDescription: 'projectList.shortDescription.notas',
                    src: 'https://github.com/Zerronir/notes' 
                },
                {
                    projectName: 'projectList.names.Objetos',
                    mainTech: techs.java,
                    shortDescription: 'projectList.shortDescription.Objetos',
                    src: 'https://github.com/Zerronir/practicaOO' 
                },
                {
                    projectName: 'projectList.names.YTDownloader',
                    mainTech: techs.python,
                    shortDescription: 'projectList.shortDescription.YTDownloader',
                    src: 'https://github.com/Zerronir/youtubedownloader' 
                },
                {
                    projectName: 'projectList.names.covidTrackerReact',
                    mainTech: techs.react,
                    shortDescription: 'projectList.shortDescription.covidTrackerReact',
                    src: 'https://github.com/Zerronir/covid19tracker' 
                },
                {
                    projectName: 'projectList.names.bigNumber',
                    mainTech: techs.java,
                    shortDescription: 'projectList.shortDescription.bigNumber',
                    src: 'https://github.com/Zerronir/bignumber' 
                },
                {
                    projectName: 'projectList.names.bender',
                    mainTech: techs.java,
                    shortDescription: 'projectList.shortDescription.bender',
                    src: 'https://github.com/Zerronir/bender' 
                },
                {
                    projectName: 'projectList.names.vueCovid',
                    mainTech: techs.vueJS,
                    shortDescription: 'projectList.shortDescription.vueCovid',
                    src: 'https://github.com/Zerronir/vue-covid' 
                },
                {
                    projectName: 'projectList.names.numberGuessing',
                    mainTech: techs.cs,
                    shortDescription: 'projectList.shortDescription.numberGuessing',
                    src: 'https://github.com/Zerronir/number-guessing-game' 
                },
                {
                    projectName: 'projectList.names.clockApp',
                    mainTech: techs.js,
                    shortDescription: 'projectList.shortDescription.clockApp',
                    src: 'https://github.com/Zerronir/ClockApp' 
                },
                {
                    projectName: 'projectList.names.pwdGenerator',
                    mainTech: techs.java,
                    shortDescription: 'projectList.shortDescription.pwdGenerator',
                    src: 'https://github.com/Zerronir/passwordGenerator' 
                },
                {
                    projectName: 'projectList.names.blogHibernate',
                    mainTech: techs.java,
                    shortDescription: 'projectList.shortDescription.blogHibernate',
                    src: 'https://github.com/Zerronir/blogHibernate' 
                },
                {
                    projectName: 'projectList.names.springNotes',
                    mainTech: techs.java,
                    shortDescription: 'projectList.shortDescription.springNotes',
                    src: 'https://github.com/Zerronir/notesSpring' 
                },
                {
                    projectName: 'projectList.names.tinderCloneFront',
                    mainTech: techs.react,
                    shortDescription: 'projectList.shortDescription.tinderCloneFront',
                    src: 'https://github.com/Zerronir/tinderclone' 
                },
                {
                    projectName: 'projectList.names.tinderCloneBack',
                    mainTech: techs.node,
                    shortDescription: 'projectList.shortDescription.tinderCloneBack',
                    src: 'https://github.com/Zerronir/tindercloneback' 
                }
            ]
        ]
    }
}
</script>