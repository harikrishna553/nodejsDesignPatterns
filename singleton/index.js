Logger = require('./models/Logger')
Employee = require('./models/Employee')
Manager = require('./models/Manager')

logger = new Logger().getInstance()

logger.info("Starting the application")

emp1 = new Employee('Krishna', 'Gurram', 123)
manager1 = new Manager('Anand', 'Bandaru', 234, [123, 124, 187])

logger.info(emp1)
logger.info(manager1)

logger.stats()

logger.info("Application exited successfully")

