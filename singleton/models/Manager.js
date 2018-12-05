Logger = require('./Logger')

logger = new Logger().getInstance()

class Manager{
	
	constructor(firstName, lastName, id, reporteeIds){
		logger.info('Creating Manager object')
		this.firstName = firstName
		this.lastName = lastName
		this.id = id
		this.reporteeIds = reporteeIds
	}
}

module.exports = Manager