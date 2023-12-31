const payload = require('payload')

/** @type {import('payload/types').CollectionConfig} */

const Logs = {
    slug: 'Logs',
    admin: {
        useAsTitle: 'name'
    },
access: {
    read: () => true,
    update: () => true,
    delete: () => true,
},

fields: [
    {
        name: 'name',
        label: 'Title',
        type: 'text',
    },
    {
        name: 'log',
        type: 'text',
    },
    {
        name: "timestamp",
        type: "date",
        required: true
    },
    {
        name: "action",
        type: "text",
        required: true
    }
  ],
};

export default Logs