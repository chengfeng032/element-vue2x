import ElLink from './src/link';

ElLink.install = function(Vue) {
	Vue.component(ElLink.name, ElLink);
}

export default ElLink;