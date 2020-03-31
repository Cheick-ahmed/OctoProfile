<template>
	<div>
		<nuxt />
		<the-footer />
	</div>
</template>
<script>
	import theFooter from '@/components/globals/theFooter'
	export default {
		components : {
			theFooter
		}
	}
</script>