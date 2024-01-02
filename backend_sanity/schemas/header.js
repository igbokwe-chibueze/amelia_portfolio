export default {
    name:'header',
    title:'Header',
    type: 'document',
    fields:[
        { 
            name:'salutation',
            title:'Salutation',
            type: 'string'
        },
        {
            name:'name',
            title:'Name',
            type:'string'
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