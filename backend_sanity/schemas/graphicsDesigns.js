export default{
    name:'graphicsDesigns',
    title:'GraphicsDesigns',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'text'
        },
        {
            name:'mainImage',
            title:'MainImage',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'images',
            title: 'Images',
            type:'array',
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
            name:'favourite',
            title:'Display as favourite',
            type: 'boolean',
            description: 'If true, this would be displayed in the front page',
            initialValue: false
        },
    ]
}