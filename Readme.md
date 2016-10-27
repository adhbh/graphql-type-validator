# graphql-type-validator

### Custom validations for graphql scalars

Example:

```sh
import graphqlValidator from 'graphql-type-validator'

const GraphQLPrimitiveType = graphqlValidator({
	name: 'StringOrNumber'
	validate: function(value) {
		return typeof value === 'string' || typeof value === 'number'
	},
	error: 'Custom error message'
})
```
