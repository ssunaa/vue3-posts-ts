<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
    <hr class="my-4" />
    <h2>{{ $person.name }}</h2>
    <button class="btn btn-primary" @click="person.say">click person</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { inject, ref } from 'vue'
import AppGrid from '@/components/AppGrid.vue'
import AppCard from '@/components/AppCard.vue'

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};


const items = ref(['사과', '딸기', '포도', '바나나']);

const person = inject('person');
console.log('person.name: ', person.name);
</script>

<style lang="scss" scoped></style>