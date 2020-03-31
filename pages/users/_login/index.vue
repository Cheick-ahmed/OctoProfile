<template>
	<div>
		<div class="">
			<user-info :user="user" />
			<div class="bg-gray-200 py-16">
				<div class="container">
					<h3 class="capitalize text-3xl font-semibold">Popular repositories</h3>
					<template v-if="repos">
						<div class="py-16">
							<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
								<repo v-for="repo in repos" :repo="repo" :key="repo.id"/>
							</div>
						</div>
					</template>
					<template v-else>
						<p>Nothing to see here</p>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import userInfo from '@/components/userInfo'
	import repo from '@/components/repo'
	export default {
		layout : 'user',
		head () {
			return {
				title : `${this.user.login}`
			}
		},
		data () {
			return {
				user : null
			}
		},
		components : {
			userInfo,
			repo
		},
		async asyncData({app,params, error }) {
			try {
				let user = await app.$axios.get(`https://api.github.com/users/${params.login}`)
				let repos = await app.$axios.get(`https://api.github.com/users/${params.login}/repos?per_page=100`)
				return { user : user.data, repos : repos.data }
			} catch (e) {
				if (e.response.status === 404) {
					error({ statusCode: 404, message: 'User not found' })
				} else {
					error({ statusCode: 500, message : 'Oh no! Something went wrong. Try again later!' })
				}
			}
		}
	}
</script>