const schemaValidator = async (data, schema) => {
    try {
      const validated = await schema.validateAsync(data)
      return validated
    } catch (error) {
      return error
    }
  }

  
  export {
    schemaValidator
  }