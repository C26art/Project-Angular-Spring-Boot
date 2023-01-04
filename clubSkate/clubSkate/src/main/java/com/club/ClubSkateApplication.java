package com.club;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.club.model.Product;
import com.club.repository.ProductRepository;

@SpringBootApplication
public class ClubSkateApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClubSkateApplication.class, args);
	}
	@Bean
	CommandLineRunner initDataBase(ProductRepository productRepository) {
		return args -> {
			productRepository.deleteAll();
			Product p = new Product();
			p.setName("orange");
			p.setAmountPurchase(8);
			p.setAmountSold(5);
			p.setStock(4);
			p.setPurchasePrice(6);
			p.setPercentage(2);
			p.setSaleValue(3);
			p.setPhone("99532053");
			p.setSupplier("mundial");
			p.setCnpj("234556");			

			productRepository.save(p);
		};
	}

}

