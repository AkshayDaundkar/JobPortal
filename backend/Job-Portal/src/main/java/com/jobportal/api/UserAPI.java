package com.jobportal.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.dto.UserDTO;
import com.jobportal.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserAPI {
	@Autowired
	private UserService userService;
	
	@PostMapping(value="/register")
	public ResponseEntity<UserDTO>registerUser(@RequestBody UserDTO userDTO){
		userDTO = userService.registerUser(userDTO);
		return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
	}
	
	
}