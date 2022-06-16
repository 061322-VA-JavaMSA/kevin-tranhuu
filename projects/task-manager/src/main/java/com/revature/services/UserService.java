package com.revature.services;

import com.revature.daos.UserArrayList;
import com.revature.daos.UserDAO;
import com.revature.models.User;

public class UserService {

	private UserDAO ud = new UserArrayList();
	
	public User createUser(User u) {
		//validation logic to object u being passed in...
		// business logic
		return ud.insertUser(u);
	}
	
	public User getUserById(int id) {
		return ud.getById(id);
	}	

}
