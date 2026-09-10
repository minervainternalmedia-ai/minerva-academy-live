// sanity/schemaTypes/expertFaculty.ts
export default {
  name: 'expertFaculty',
  title: 'Expert Faculty',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Faculty / Department Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role / Designation (e.g., SSB & Interview Expert)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Faculty Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
};