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
      type: 'string',
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
          name:'tag',
          title:'Tag',
          type:'string',
          description: 'Enter tag in lowercase',
          validation: Rule => Rule.lowercase().error('Tags must be in lowercase')
        },
      ]
    },
  ],
};