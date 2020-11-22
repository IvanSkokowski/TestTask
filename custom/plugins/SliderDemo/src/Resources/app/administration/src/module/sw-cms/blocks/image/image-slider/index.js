import './component';
import './prview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'image-slider-demo',
    label: 'sw-cms.blocks.image.imageSliderDemo.label',
    category: 'image',
    component: 'sw-cms-block-image-slider-demo',
    previewComponent: 'sw-cms-preview-image-slider-demo',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        imageSlider: 'image-slider-demo'
    }
});
