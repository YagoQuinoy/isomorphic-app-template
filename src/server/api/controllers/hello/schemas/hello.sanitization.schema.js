export default {
  type: 'object',
  strict: true,
  properties: {
    name: {
      type: 'string',
      rules: ['trim']
    }
  }
};
