package com.revature.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {

	private static Logger log = LoggerFactory.getLogger(LoggingAspect.class);
	
	@Before("within(com.revature.exceptions.GlobalExceptionHandler)")
	public void logExceptions(JoinPoint jp) {
		log.error(jp.getTarget() + " was invoked " + jp.getSignature());
	}
	
}
