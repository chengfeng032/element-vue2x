<template>
	<div class="el-container" :class="{'is-vertical': isVertical}">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'ElContainer',
		
		componentName: 'ElContainer',
		
		props: {
			direction: String,
		},
		
		computed: {
			isVertical() {
				if (this.direction === 'vertical') {
					return true;
				} else if ( this.direction === 'horizontal') {
					return false;
				}
				return this.$slots && this.$slots.default
				 ? this.$slots.default.some(vnode => {
					let tag = vnode.componentOptions && vnode.componentOptions.tag;
					return tag === 'el-header' || tag === 'el-footer';
				})
				: false;				 	
			}
		}
	};
</script> 
