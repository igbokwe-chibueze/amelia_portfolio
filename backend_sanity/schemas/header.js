export default {
    name:'header',
    title:'Header',
    type: 'document',
    fields:[
        {
            name:'parallaxText',
            title:'ParallaxText',
            type:'string'
        },
        { 
            name:'salutations',
            title:'Salutations',
            type:'array',
            of: [{ type: 'string' }],
        },
        {
            name:'professions',
            title:'Professions',
            type:'array',
            of: [{ type: 'string' }],
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'remark',
            title:'Remark',
            type:'string'
        }
    ]
}