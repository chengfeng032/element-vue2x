import ElAside from './src/main';

ElAside.install = function(Vue) {
	Vue.component(ElAside.name, ElAside);
}

export default ElAside;