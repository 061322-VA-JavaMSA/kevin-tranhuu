package com.revature.daos;

import com.revature.models.User;

public interface UserDAO {
	public abstract User insertUser(User u);
	public abstract User getById(int id);
}
