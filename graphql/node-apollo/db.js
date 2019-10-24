const {DataStore} = require('notarealdb')

/**
 * Step 5 : Data Access Layer
 */
const store = new DataStore('./data');

module.exports = {
	students : store.collection('students'),
	colleges : store.collection('colleges')
}