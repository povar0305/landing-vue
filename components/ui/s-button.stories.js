import Button from './s-button.vue';

export default {
    component: Button,
};

export const Secondary = {
    render: () => ({
        components: { Button },
        template: '<Button>text button</Button>',
    }),
};
export const Primary = {
    render: () => ({
        components: { Button },
        template: '<Button type="primary">text button</Button>',
    }),
};