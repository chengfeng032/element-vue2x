<template>
	<label
		class="el-checkbox"
		:class="[
			border && checkboxSize ? `el-chekbox-${checkboxSize}` : ''
			{
				'is-disabled': disabled,
				
			}
		]">
		<span class="el-checkbox__input">
			<span class="el-checkbox__inner"></span>
			<input v-if="trueLabel || falseLabel"/>
			<input v-else />
		</span>
		<span class="el-checkbox__label" v-if="$slots.default || label">
			<slot></slot>
			<template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script>
	
	export default {
		name: 'ElCheckbox',
		
		inject: {
			elForm: {
				default: ''
			},
			elFormItem: {
				default: ''
			}
		},
		
		props: {
			
		},
		
		data() {
			return {
				
			}
		},
		
		computed: {
			
		},
		
		methods: {
			
		},
		
		watch: {
			
		}		
	};
</script>