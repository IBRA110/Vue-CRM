/* eslint-disable */
<template>
  <ul class="sidenav app-sidenav">
    <li v-for="link in links" :key="link.url" :exact="link.exact" active-class="active">
      <router-link class="" :to="link.url">
        {{ link.title }}
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data: () => ({
    links: [
      { title: "Счет", url: "/", exact: true },
      { title: "История", url: "/history" },
      { title: "Планирование", url: "/planning" },
      { title: "Новая запись", url: "/record" },
      { title: "Категории", url: "/categories" }
    ]
  })
}
</script>
