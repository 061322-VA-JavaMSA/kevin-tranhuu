package com.revature;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import com.revature.models.Role;
import com.revature.models.User;
import com.revature.services.UserService;

@SpringBootApplication
public class TaskManagerBootApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(TaskManagerBootApplication.class, args);
	}

}

@Component
class AppStartupRunner implements ApplicationRunner {

	@Autowired
	private UserService us;
	
    @Override
    public void run(ApplicationArguments args) throws Exception {
    	User a = new User();
    	a.setUsername("a");
    	a.setPassword("a pass");
    	a.setRole(Role.ADMIN);
    	
    	User b = new User();
    	b.setUsername("b");
    	b.setPassword("b pass");
    	b.setRole(Role.BASIC_USER);
    	
    	us.addUser(a);
    	us.addUser(b);
    	
    	List<User> users = us.getByRole(Role.BASIC_USER);
    	users.forEach((user) -> System.out.println(user));
    }
}