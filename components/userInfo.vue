<template>
	<div class="container py-16 min-h-screen">
		<div class="flex items-center justify-center flex-col font-montserrat font-semibold mb-12">
			<div class="overflow-hidden rounded-full border-4 border-white mx-auto w-48 h-full mb-6">
				<img :src="user.avatar_url" :alt="user.login" class="object-cover object-center h-full w-full">
			</div>
			<a :href="user.html_url" target="_blank" rel="noopener noreferrer" class="text-xl text-blue-500 tracking-wider mb-6">
				@{{user.login}}
			</a>
			<div class="lg:flex items-center justify-between">
				<div class="hover:text-blue-500 transtion-all duration-500 text-gray-500 flex justify-center lg:justify-start items-center font-medium lg:mr-6 mb-3 lg:mb-0" v-if="user.blog">
					<svg aria-hidden="true" viewBox="0 0 12 16" class="mr-2 h-5 w-5 fill-current text-gray-500">
						<path d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>
					</svg>
					{{ user.location }}
				</div>
				<div class="text-gray-500 flex items-center font-medium">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="mr-2 h-5 w-5 fill-current text-gray-500">
						<path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"/>
					</svg> 
					Joined {{ joined_at }}
				</div>
			</div>
		</div>
		<div class="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="p-4 text-gray-500 text-center bg-gray-800 rounded shadow">
				<span class="text-3xl font-semibold"> {{ user.public_repos }} </span>
				<div class="mt-3 uppercase text-sm font-medium">Repositories</div>
			</div>
			<div class="p-4 text-gray-500 text-center bg-gray-800 rounded shadow">
				<span class="text-3xl font-semibold"> {{ user.followers }} </span>
				<div class="mt-3 uppercase text-sm font-medium">Followers</div>
			</div>
			<div class="hidden lg:block p-4 text-gray-500 text-center bg-gray-800 rounded shadow">
				<span class="text-3xl font-semibold"> {{ user.following }} </span>
				<div class="mt-3 uppercase text-sm font-medium">Following</div>
			</div>
		</div>
	</div>
</template>
<script>
	import moment from 'moment'
	export default {
		props : {
			user : {
				required : true,
				type : Object
			}
		},
		computed : {
			joined_at () {
				return moment(this.user.created_at).format('LL') 
			}
		}
	}
</script>