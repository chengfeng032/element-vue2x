import ElHeader from './src/main';

ElHeader.install = function(Vue) {
	Vue.component(ElHeader.name, ElHeader);
}

export default ElHeader;