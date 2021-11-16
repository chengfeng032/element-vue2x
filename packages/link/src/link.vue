<template>
	<a class="e-link">
		<slot></slot>
	</a>
</template>

<script>
	export default {
		name: 'ElLink',
		
		props: {
			type: {
				type: String,
				default: 'default'
			},
			underline: {
				type: Boolean,
				default: true
			},
			disabled: {
				type: Boolean,
				default: false
			},
			href: String,
			icon: String
		}
	}
</script>