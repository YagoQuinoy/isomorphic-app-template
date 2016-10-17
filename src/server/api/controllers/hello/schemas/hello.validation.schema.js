export default {
  type: 'object',
  strict: true,
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 40
    }
  }
};
