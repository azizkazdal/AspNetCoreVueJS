import Vue from "../lib/vue/vue.esm.browser.js";

const vueApplication = new Vue({
    el: '#application',
    data: {
        applicationName: 'AspNetCore - VueJS applciation',
        footerContent : 'Customer Application Footer Content'
    }
});