<script setup lang="ts">
const cursorX = ref(0);
const cursorY = ref(0);

useSeoMeta({
  title: 'Jelson Matheus',
  ogTitle: 'Jelson Matheus',
  description: 'Jelson Matheus: Desenvolvedor Full Stack com expertise em backend e frontend, especializado em projetos de desenvolvimento web.',
  ogDescription: 'Jelson Matheus: Desenvolvedor Full Stack com expertise em backend e frontend, especializado em projetos de desenvolvimento web.'
})
useHead({
  htmlAttrs: {
    lang: 'pt-br'
  }
})
const trackMouse = (event: MouseEvent) => {
  cursorX.value = event.pageX;
  cursorY.value = event.pageY;
};
</script>

<template>
  <div class="relative" @mousemove="trackMouse">
    <div class="pointer-events-none inset-0 z-30 fixed lg:absolute"
    :style="{background: `radial-gradient(600px at ${cursorX}px ${cursorY}px, rgba(29, 78, 216, 0.15), transparent 80%)`}">
    </div>
    
    <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div class="lg:flex lg:justify-between lg:gap-4">

        <PageHeader class="lg:sticky top-0 max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"/>
        
        <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
          <About class="mb-16 lg:mb-36 scroll-mt-24"/>
          <Career class="lg:mb-36 lg:scroll-mt-24"/>
          <PageFooter class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"/>
        </main>

      </div>
    </div>
  </div>
</template>