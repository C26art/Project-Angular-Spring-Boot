package com.club;



import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.club.model.Users;
import com.club.repository.UserRepository;




@SpringBootApplication
public class ClubSkateApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClubSkateApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(UserRepository userRepository) {
		return args -> {
			userRepository.deleteAll();

			Users u = new Users();
			u.setName("Cristian");
			u.setPassword("123");

			userRepository.save(u);

		};

	}
	
	
}

