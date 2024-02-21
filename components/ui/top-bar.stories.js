import Component from './top-bar.vue';

export default {
    component: Component,
};

export const Default = {
    render: () => ({
        components: { Component },
        template: '<Component/>',
    }),
};