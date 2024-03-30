export default{
    name:'blogs',
    title:'Blogs',
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
            name:'publishedDate',
            title:'Published Date',
            type:'date',
            description: 'Enter date in this format: YYYY-MM-DD',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
            validation: rule => [
                rule.warning('Enter date in this format: YYYY-MM-DD')
            ]
        },
        {
            name:'readTime',
            title:'ReadTime',
            type:'number',
            description: 'Enter the amount of minutes needed.',
            validation: rule => [
                rule.positive().warning('Enter the amount of minutes needed.')
            ]
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
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