export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'id',
            title:'ID',
            type:'string'
        },
        {
            name:'date',
            title:'Date',
            type:'string'
        },
        {   name:'name',
            title:'name',
            type:'string'
        },
        {
            name:'organisation',
            title:'Organisation',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
            hotspot: true,
            },
        },
        {
            name:'iconBg',
            title:'IconBg',
            type:'string'
        },
        {
            name:'cardBg',
            title:'CardBg',
            type:'string'
        },
        {
            name:'textColor',
            title:'TextColor',
            type:'string'
        },
        { 
            name:'desc',
            title:'Desc',
            type:'array',
            of: [{ type: 'string' }],
        }

        // {
        //     name:'works',
        //     title:'Works',
        //     type:'array',
        //     of:[{ type:'workExperience'}]
        // },
    ]
}