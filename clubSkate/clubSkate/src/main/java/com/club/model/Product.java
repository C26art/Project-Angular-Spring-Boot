package com.club.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("id")
    private Long id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 20, nullable = false)
    private int amountPurchase;

    @Column(length = 20, nullable = false)
    private int amountSold;

    @Column(length = 20, nullable = false)
    private int stock;

    @Column(length = 20, nullable = false)
    private int purchasePrice;

    @Column(length = 20, nullable = false)
    private int percentage;

    @Column(length = 20, nullable = false)
    private int saleValue;

    @Column(length = 200, nullable = false)
    private String supplier;

    @Column(length = 100, nullable = false)
    private String cnpj;

    @Column(length = 100, nullable = false)
    private String phone;


    
}
