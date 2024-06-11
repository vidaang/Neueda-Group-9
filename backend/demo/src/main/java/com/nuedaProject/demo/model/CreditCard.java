package com.nuedaProject.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class CreditCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long creditCardId;

    // TODO 1: Set foreign key relationship to User table
    private Long uid;
    private Float limit;
    private Float balance;

    public CreditCard(Long uid, Float limit, Float balance){
        this.uid = uid;
        this.limit = limit;
        this.balance = balance;
    }

}

