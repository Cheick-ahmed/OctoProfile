<template>
	<a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="p-6 shadow-lg bg-white rounded font-montserrat font-medium flex flex-col justify-between">
		<div>
			<div class="flex items-center">
				<svg class="h-4 w-4 mr-2 fill-current text-gray-800" viewBox="0 0 12 16" aria-hidden="true">
					<path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/>
				</svg>
				{{ repo.name }}
			</div>
			<p v-if="repo.description" class="mt-3 leading-6 tracking-wider text-sm">
				{{ repo.description }}
			</p>
		</div>
		<div class="mt-3 flex items-center justify-between text-sm font-light">
			<div class="flex items-center mt-3">
				<div v-if="repo.language" class=" mr-4">{{ repo.language }}</div>
				<div class="flex items-center">
					<svg aria-hidden="true" class="h-4 w-4 mr-2 fill-current text-gray-800" viewBox="0 0 10 16">
						<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z">
						</path>
					</svg>
					{{ repo.forks_count }}
				</div>
			</div>
			<div> {{ repo.size }} KB </div>
		</div>
	</a>
</template>
<script>
	export default {
		props : {
			repo : {
				required : true,
				type : Object
			}
		}
	}
</script>