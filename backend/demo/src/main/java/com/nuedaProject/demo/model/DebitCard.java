package com.nuedaProject.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class DebitCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long debitCardId;

    // TODO 2: Set foreign key relationship to User table
    private Long uid;
    private Float balance;

    public DebitCard(Long uid, Float balance){
        this.uid = uid;
        this.balance = balance;
    }

}
