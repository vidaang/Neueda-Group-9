package com.nuedaProject.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionId;

    // TODO 3: Set foreign key relationship to the two cardID table
    private Long uid;
    private Long creditCardId;
    private Long debitCardId;
    private Float amount;
    private Date date;

    // Arg Constructor for the Transaction class
    // Notes: the date doesn't require any argument and will take the time from system.
    public Transaction(Long uid, Long creditCardId, Long debitCardId, Float amount){
        this.uid = uid;
        this.creditCardId = creditCardId;
        this.debitCardId = debitCardId;
        this.amount = amount;
        this.date = new Date();
    }
}
