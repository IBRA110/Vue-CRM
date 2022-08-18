/* eslint-disable */
<template>
  <div class="app-main-layout">
    <NavBarComponent @click="isOpen = !isOpen"/>
    <SideBarComponent :class="{open: isOpen}"/>
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
				<router-view/>
			</div>
		</main>
		<div class="fixed-action-btn">
			<a class="btn-floating btn-large blue" href="#">
				<i class="large material-icons">add</i>
			</a>
		</div>
	</div>
</template>

<script>
import NavBarComponent from '@/components/app/NavBarComponent.vue'
import SideBarComponent from '@/components/app/SideBarComponent.vue'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
    NavBarComponent,
    SideBarComponent
  }
}
</script>
