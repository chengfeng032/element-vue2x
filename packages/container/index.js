import ElContainer from './src/main';

ElContainer.install = function(Vue) {
	Vue.component(ElContainer.name, ElContainer);
}

export default ElContainer;