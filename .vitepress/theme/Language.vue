<script setup lang="ts">
import { inBrowser } from 'vitepress'
import { useData } from 'vitepress'
import { watchEffect } from 'vue'
const { lang } = useData()
watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})
</script>
