Logger = require('./Logger')

logger =  new Logger().getInstance()

class Employee{
	
	constructor(firstName, lastName, id){
		logger.debug("Creating Employee object")
		this.firstName = firstName
		this.lastName = lastName
		this.id = id
	}
	
}

module.exports = Employee