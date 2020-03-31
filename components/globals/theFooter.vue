<template>
	<div class="flex items-center justify-center py-8 text-gray-500 font-montserrat tracking-wider">
		Built with
		<ul class="lg:ml-3 flex items-center">
			<li v-for="lang in languages" :key="lang.id" class="mr-2">{{ lang.title }}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				languages : [
				{ id : 1, title : 'Nuxt.js'},
				{ id : 2, title : 'Github Api'},
				{ id : 3, title : 'Tailwind Css'},
				]
			}
		}
	}
</script>