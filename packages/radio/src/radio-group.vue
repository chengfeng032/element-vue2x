<template>
	<component
		:is="_elTag"
		class="el-radio-group"
		role="radiogroup"
		@keydown="handleKeyDown"
		>
			<slot></slot>
	</component>
</template>

<script>
	import Emitter from '../../../src/mixins/emitter';
	
	export default {
		name: 'ElRadioGroup',
		
		componentName: 'ElRadioGroup',
		
		inject: {
			elFormItem: {
				default: ''
			}
		},
		
		mixins: [Emitter],
		
		props: {
			
		},
		
		computed: {
			
		},
		
		created() {
			
		},
		
		mounted() {
			
		},
		
		methods: {
			// 左右上下按键 可以在radio组内切换不同选项
			handleKeyDown(e) {
				let target = e.target;
				let className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]';
				let radios = this.$el.querySelectorAll(className);
				let length = radios.length;
				let index = [].indexOf.call(radios, target);
				let roleRadios = this.$el.querySelectorAll('[role=radio]');
				
				switch(e.keyCode) {
					case keyCode.LEFT:
					case keyCode.UP:						
						if (index === 0) {
							e.stopPropagation(); // 阻止事件冒泡
							e.preventDefault(); // 阻止事件默认行为
							roleRadios[length - 1].click();
							roleRadios[length - 1].focus();
						} else {
							roleRadios[index - 1].click();
							roleRadios[index - 1].focus();
						}
						break;
					case keyCode.RIGHT:
					case keyCode.DOWN:
						if (index === (length - 1)) {
							e.stopPropagation();
							e.preventDefault();
							roleRadios[0].click();
							roleRadios[0].focus();
						} else {
							roleRadios[index + 1].click();
							roleRadios[index + 1].focus();
						}
				}
			}
		},
		
		watch: {
			
		}
	};
</script>

<style>
</style>
