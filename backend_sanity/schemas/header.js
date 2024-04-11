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
        },
        {
            name: 'bestTools',
            title: 'BestTools',
            type:'array',
            description: 'Place images of your best tools here (Limit it to 4 for best visuals)',
            of: [
              {
                name:'imgUrl',
                title:'ImgUrl',
                type:'image',
                options: {
                    hotspot: true,
                },
              },
            ]
        },
        {
            title: 'AmeliaResume',
            name: 'ameliaResume',
            type: 'file',
            options: {
                accept: '.pdf', // Define accepted file types, e.g., PDF
              },
              validation: (Rule) => Rule.required(),
        }
    ]
}