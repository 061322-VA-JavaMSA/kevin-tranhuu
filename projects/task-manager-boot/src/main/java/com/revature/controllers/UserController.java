package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.revature.services.UserService;

@Controller
public class UserController {

	private UserService us;

	public UserController() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Autowired
	public UserController(UserService us) {
		super();
		this.us = us;
	}
	
	
}
