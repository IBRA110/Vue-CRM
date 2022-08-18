/* eslint-disable */
<template>
  <ul class="sidenav app-sidenav">
    <li v-for="link in links" :key="link.url" :exact="link.exact">
      <router-link class="waves-effect waves-orange pointer" :to="link.url" active-class="active" >
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
