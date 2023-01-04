package com.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.club.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    
}
