var assertErr = require('assert-err')
var GraphQLScalarType = require('graphql').GraphQLScalarType
var GraphQLError = require('graphql/error').GraphQLError
var Kind = require('graphql/language').Kind

var parser = function (ast, validate) {
  if (!validate) {
    return ast.value
  }
  if(!options.validate(ast.value)) {
    throw new GraphQLError(options.error, [ast]);
  }
  return ast.value;
}

module.exports = function (options) {
  return new GraphQLScalarType({
    name: options.name,
    description: options.description,
    serialize: function (value) {
      return value
    },
    parseValue: function (value) {
      var ast = {
        kind: Kind.STRING,
        value: value
      }
      return parser(ast, options)
    },
    parseLiteral: function (ast) {
      return parser(ast, options)
    }
  }) 
}