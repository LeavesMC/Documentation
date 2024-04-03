<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
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
