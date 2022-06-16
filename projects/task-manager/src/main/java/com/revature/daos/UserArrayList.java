package com.revature.daos;

import java.util.ArrayList;
import java.util.List;

import com.revature.models.User;

public class UserArrayList implements UserDAO{

	private List<User> userDb = new ArrayList<>();
	
	@Override
	public User getById(int id) {
		return 	userDb.get(id);
	}

	@Override
	public User insertUser(User u) {
		u.setId(userDb.size());
		userDb.add(u);
		return u;
	}

}
