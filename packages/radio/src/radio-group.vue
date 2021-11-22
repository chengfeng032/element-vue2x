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
	
	const keyCode = Object.freeze({
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	});
	
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
			value: {},
			size: String,
			fill: String,
			textColor: String,
			disabled: Boolean			
		},
		
		computed: {
			_elFormItemSize() {
				return (this.elFormItem || {}).elFormItemSize;
			},
			_elTag() {
				let tag = (this.$vnode.data || {}).tag;
				if (!tag || tag === 'component') tag = 'div';
				return tag;
			},
			radioGroupSize() {
				return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
			}
		},
		
		created() {
			this.$on('handleChange', value => {
				this.$emit('change', value)
			});
		},
		
		mounted() {
			// 当radioGroup没有默认选项时，第一个可以选中Tab导航
			const radios = this.$el.querySelectorAll('[type=radio]');
			const firstLabel = this.$el.querySelectorAll('[role=radio]')[0];
			if (![].some.call(radios, radio => radio.checked) && firstLabel) {
				firstLabel.tabIndex = 0;
			}			
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
			value(value) {
				 this.dispatch('ElFormItem', 'el.form.change', [this.value]);
			}
		}
	};
</script>