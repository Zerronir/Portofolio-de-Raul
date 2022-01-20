<template>
  <header class="lg:flex lg:justify-between lg:pt-5 lg:pb-5 md:pb-5 md:flex md:flex-col md:pt-4 md:text-center sm:flex sm:flex-col sm:text-center">
    <nav class="lg:pt-2 lg:flex lg:flex-row lg:justify-around md:flex md:justify-center md:flex-col sm:flex sm: flex-col sm:justify-center">

      <ul>
        <li>
          <a href="/" class="lg:text-2xl md:text-3xl md:text-center sm:text-center">
            <pre class="md:m-0 md:p-0 md:pr-48 lg:pr-0">
              <span class="text-blue-600 dark:text-yellow-400">{</span> <span class="text-black dark:text-red-500">name</span> : <span class="text-green-600 dark:text-green-500">'Raúl GVC'</span> <span class="text-blue-600 dark:text-yellow-400">}</span>
            </pre>
          </a>
        </li>
      </ul>

      <ul class="lg:flex lg:justify-between lg:flex-row lg:mr-10 lg:pt-1 lg:pl-10 md:m-0 md:p-0 md:flex-col md:m-0 md:pt-0 md:flex md:justify-center sm:flex sm:flex-col sm:justify-center">
        <li class="lg:pr-10 md:p-0 md:pb-10"><a href="#projects" class="hover:underline hover:text-blue-500">{{ $t('header.projects') }}</a></li>
        <li class="lg:gap-x-1 md:gap-x-0 md:pb-5"><a href="#contact" class="hover:underline hover:text-blue-500">{{ $t('header.contactMe') }}</a></li>
        <li>
          <div class="lg:m-0 md:m-0 md:flex md:justify-center md:mt-5 md:mb-5">
            <LanguageDrop />
          </div>
        </li>
      </ul>


      

    </nav>

  </header>
</template>

<script>
import LanguageDrop from "@/components/LanguageDrop"


export default {
  name: 'Header',
  components: {
    LanguageDrop
  }
  
}
</script>
