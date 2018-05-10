import Vue from 'vue';
import Vuex from 'vuex';
import lawyer from './modules/lawyer';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules:{ lawyer }
})