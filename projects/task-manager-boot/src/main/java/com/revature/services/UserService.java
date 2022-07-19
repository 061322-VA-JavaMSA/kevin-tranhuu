package com.revature.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.revature.exceptions.UserNotFoundException;
import com.revature.models.Role;
import com.revature.models.User;
import com.revature.repositories.UserRepository;

@Service
public class UserService {

	private UserRepository ur;
	
	// @Autowired implicitely constructor injection if only one constructor is present and no other @Autowired was defined
	public UserService(UserRepository ur) {
		super();
		this.ur = ur;
	}
	
	/*-
	 * 		/users
	 * 			- GET - returns all users
	 * 				- ?role={value} - returns all user for a role
	 * 			- POST - creates a user in the db
	 * 
	 * 				
	 * 		/users/{id}
	 * 			- GET - return a user by an id
	 * 					- throw UserNotFoundException if not found
	 * 			- PUT - update a user by id if the user exists
	 * 					- throw UserNotFoundException if not found
	 * 			- DELETE - delete a user by id if exists
	 * 					- throw UserNotFoundException if not found
	 */
	
	public List<User> getUsers(){
		return ur.findAll();
	}
	
	public List<User> getByRole(Role role){
		return ur.findUserByRole(role);
	}
	
	@Transactional
	public User getUserById(int id) throws UserNotFoundException {
		// optional, way to avoid null pointer by defining what happens if not found
		User user = ur.findById(id).orElseThrow(() -> new UserNotFoundException());
		return user;
	}
	
	@Transactional
	public User addUser(User user) {
		return ur.save(user);
	}
}
