package com.revature.servlets;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.dtos.UserDTO;
import com.revature.exceptions.UserNotCreatedException;
import com.revature.exceptions.UserNotFoundException;
import com.revature.models.Role;
import com.revature.models.User;
import com.revature.services.UserService;

/*- 
 * Handles all of the requests made to /users(/...)
 */
public class UserServlet extends HttpServlet {

	UserService us = new UserService();
	// object to conver to JSON format
	ObjectMapper om = new ObjectMapper();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		System.out.println("In doGet Method (UserServlet).");

		res.addHeader("Content-Type", "application/json");

		System.out.println("Path info: " + req.getPathInfo());
		/*-
		 * String
		 * 	- "/1"
		 * 	- null
		 */

		String pathInfo = req.getPathInfo();

		// if pathInfo is null, the req should be to /users -> send back all users
		if (pathInfo == null) {

			HttpSession session = req.getSession();
			System.out.println(session.getAttribute("userRole"));

			if (session.getAttribute("userRole")!= null && session.getAttribute("userRole").equals(Role.ADMIN)) {
				// retrieving users from db using UserService
				List<User> users = us.getUsers();
				List<UserDTO> usersDTO = new ArrayList<>();

				// converting Users to UserDTOs for data transfer
				users.forEach(u -> usersDTO.add(new UserDTO(u)));

//			for(User u : users) {
//				UserDTO newUserDTO = new UserDTO(u);
//				usersDTO.add(newUserDTO);
//			}

				// retrieving print writer to write to the Response body
				PrintWriter pw = res.getWriter();
				// writing toString representation of Users to body
				pw.write(om.writeValueAsString(usersDTO));

				pw.close();
			}else {
				res.sendError(401, "Unauthorized request.");
			}
		} else {
			// /1, /11, /{some-value}
			// Have to remove "/" to get the id to be retrieved
			int id = Integer.parseInt(pathInfo.substring(1));

			try (PrintWriter pw = res.getWriter()) {
				// retrieve user by id
				User u = us.getUserById(id);
				UserDTO uDTO = new UserDTO(u);

				// convert user to JSON and write to response body
				pw.write(om.writeValueAsString(uDTO));

				res.setStatus(200);
			} catch (UserNotFoundException e) {
				// return 404, user not found
				res.setStatus(404);
				e.printStackTrace();
			}
		}
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		InputStream reqBody = req.getInputStream();

		User newUser = om.readValue(reqBody, User.class);

		try {
			us.createUser(newUser);

			res.setStatus(201); // Status: Created
		} catch (UserNotCreatedException e) {
//			res.setStatus(400);
			res.sendError(400, "Unable to create new user.");
			e.printStackTrace();
		}
	}
}
