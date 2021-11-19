function broadcast(componentName, eventName, params) {
	this.$children.forEach(child => {
		var name = child.$options.componentName;

		if (name === componentName) {
			child.$emit.applay(child, [eventName].concat(params));
		} else {
			broadcast.apply(child, [componentName, eventName].concat([params]));
		}
	});
}

export default {
	methods: {
		// 事件派发
		dispatch(componentName, eventName, params) {
			let parent = this.$parent || this.$root;
			let name = parent.$options.componentName;

			while (parent && (!name || name !== componentName)) {
				parent = parent.$parent;

				if (parent) {
					name = parent.$options.componentName;
				}
			}

			if (parent) {
				parent.$emit.apply(parent, [eventName].concat(params));
			}
		},

		// 事件广播
		broadcast(componentName, eventName, params) {
			broadcast.call(this, componentName, eventName, params));
		}
	}
};
