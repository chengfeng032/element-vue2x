<template>
	<a 
	:class="[
		'el-link',
		type ? `el-link--${type}` : '',
		disabled && 'is-disabled',
		underline && !disabled && 'is-underline',
	]"
	v-bind="$attrs"
	:href="disabled ? 'null' : href"
	@click="handleClick"
	>
		<i :class="icon" v-if="icon"></i>
		
		<span v-if="$slots.default" class="el-icon--inner">
			<slot></slot>
		</span>
		
		<template v-if="$slots.icon"><slot v-if="$slots.icon" name="icon"></slot></template>
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
		},
		
		methods: {
			handleClick(evt) {
				if (!this.disabled) {
					if (!this.href) {
						this.$emit('click', evt);
					}
				}				
			}
		}
	};
</script>