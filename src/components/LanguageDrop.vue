<template>
  <div>
    <div class="relative">
        <!-- Dropdown toggle button -->
        <select @click="show = !show" v-model="$i18n.locale"
            class="flex items-center lg:ml-10 lg:pr-1 lg:pl-1 text-black border-2 rounded-md">

            <option
                    v-for="(lang, i) in langs"
                    :key="`${lang.ISO}${i}`"
                    :value="lang.ISO"
                class="block px-4 py-0 text-sm text-black hover:bg-gray-500 hover:text-white-100"
                >
                <img :src="lang.flag" :alt="lang.ISO">    {{ lang.name }}
            </option>
        </select>
    </div>
  </div>
</template>

<script>
import es from "@/assets/flags/es.png";
export default {
  name: "LanguageDrop",
  data() {
    return {
      langs: [
        {
          ISO: "es",
          name: "Español",
          flag: es,
        },
        {
          ISO: "en",
          name: "English",
          flag: es,
        },
        {
          ISO: "cat",
          name: "Català",
          flag: es,
        },
      ],
      show: false,
    };
  },
};
</script>