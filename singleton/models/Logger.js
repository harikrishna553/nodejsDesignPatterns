class Logger{
	
	constructor(){
		this.debugCount = 0
		this.infoCount = 0
		this.errorCount = 0
	}
	
	debug(message){
		console.debug(message)
		this.debugCount++
	}

	info(message){
		console.info(message)
		this.infoCount++
	}

	error(message){
		console.error(message)
		this.errorCount++
	}	
	
	stats(){
		console.log("\n**************************************")
		console.log("Total Debug messages %d", this.debugCount)
		console.log("Total info messages %d", this.infoCount)
		console.log("Total error messages %d", this.errorCount)
		console.log("**************************************")
	}
}

class SingletonLogger{
	
	constructor(){
		
		if(Logger.instance == null){
			Logger.instance = new Logger()
		}
		
	}
	
	getInstance(){
		return Logger.instance
	}
	
}

module.exports = SingletonLogger