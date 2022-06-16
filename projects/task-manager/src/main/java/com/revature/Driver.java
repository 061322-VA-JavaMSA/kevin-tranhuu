package com.revature;

import java.util.Scanner;

import com.revature.models.User;
import com.revature.services.UserService;

public class Driver {

	static Scanner sc;
	static UserService us;
	public static void main(String[] args) {
		// Scanner, menus
		us = new UserService();
		sc = new Scanner(System.in);
		System.out.println("Welcome to Task Manager!");
		System.out.println("Please select an option \n -1: Register");
		String choice = sc.nextLine();
		switch(choice) {
		case "1":
			registerMenu();
		}
		
		
		System.out.println(us.getUserById(0));

		sc.close();
	}
	
	public static void registerMenu() {
		User newUser = new User();
		System.out.println("Register:");
		System.out.println("Please enter your username:");
		newUser.setUsername(sc.nextLine());
		System.out.println("Please enter your password:");
		newUser.setPassword(sc.nextLine());
		User createdUser = us.createUser(newUser);
		System.out.println("User: " + createdUser + " has been created.");
	}
	

}
