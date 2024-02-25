export default {
    name:'contact',
    title:'Contact',
    type:'document',
    fields:[
       {
            name:'name',
            title:'Name',
            type:'string'
        },
       {
            name:'email',
            title:'Email',
            type:'string'
        },
       {
            name:'phone',
            title:'Phone',
            type: 'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
    ]
}