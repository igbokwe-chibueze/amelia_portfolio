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
      description: 'Link to the project design file (E.g Figma, Behance).',
      type: 'url',
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      description: 'Link to the live project. If not live leave blank.',
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
      description: 'Link to a case study for the project. If no case study exist, leave blank.',
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