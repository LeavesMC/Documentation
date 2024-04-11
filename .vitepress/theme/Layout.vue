<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { watchEffect } from 'vue'
import { inBrowser } from 'vitepress'

const { Layout } = DefaultTheme
const { lang } = useData()

watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})
</script>

<template>
  <Layout>
    <template #aside-ads-before>
      <div class="NetfilyAds">
        <a href="https://www.netlify.com/">
          <img src="/Netfily.svg" alt="This site is powered by Netlify" />
        </a>
      </div>
    </template>
  </Layout>
</template>
