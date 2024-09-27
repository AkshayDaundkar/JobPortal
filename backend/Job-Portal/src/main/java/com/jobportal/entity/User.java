package com.jobportal.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.jobportal.dto.AccountType;
import com.jobportal.dto.UserDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="users")
public class User {
	@Id
	private Long id;
	private String name;
	@Indexed(unique=true)
	private String email;
	private String password;
	private AccountType accountType;
	public UserDTO toDTO() {
		return new UserDTO(this.id, this.name, this.email, this.password,this.accountType);
	}
}
