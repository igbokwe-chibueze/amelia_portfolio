export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'url',
    },
    {
      name: 'caseStudy',
      title: 'case study',
      type: 'url',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags(Ensure the "all" tag is always present)',
      type:'array',
      of: [
        {
          name: 'tags',
          title: 'Tags(Ensure the "all" tag is always present)',
          type:'string',
          options: {
            list: [
              { 
                title: 'All', 
                value: 'all'
              },
              { 
                title: 'Web Designs', 
                value: 'webdesigns'
              },
              { 
                title: 'Mobile Designs', 
                value: 'mobiledesigns'
              },
              { 
                title: 'Landing Pages', 
                value: 'landingpages'
              },
              { 
                title: 'Game Designs', 
                value: 'gamedesigns'
              },
            ],
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
  ],
};