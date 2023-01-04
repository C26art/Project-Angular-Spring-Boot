package com.club.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.club.model.Product;
import com.club.repository.ProductRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/products")
@AllArgsConstructor
public class ProductController {

    private final ProductRepository productRepository;

    
    @GetMapping
    public List<Product> list() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable Long id) {
        return productRepository.findById(id)
        .map(recordFound -> ResponseEntity.ok().body(recordFound))
        .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Product create(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product product) {
        return productRepository.findById(id)
                .map(recordFound -> {
                recordFound.setName(product.getName());
                recordFound.setAmountPurchase(product.getAmountPurchase());
                recordFound.setAmountSold(product.getAmountSold());
                recordFound.setStock(product.getStock());
                recordFound.setPurchasePrice(product.getPurchasePrice());
                recordFound.setPercentage(product.getPercentage());
                recordFound.setSaleValue(product.getSaleValue());
                recordFound.setPhone(product.getPhone());
                recordFound.setSupplier(product.getSupplier());
                recordFound.setCnpj(product.getCnpj());                
                Product updated = productRepository.save(recordFound);
                return ResponseEntity.ok().body(updated);
        })

        .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return productRepository.findById(id)
        .map(recordFound -> {
            productRepository.deleteById(id);
            return ResponseEntity.noContent().<Void>build();
        })
        .orElse(ResponseEntity.notFound().build());

    }
    
}
