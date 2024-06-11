package com.nuedaProject.demo.repository;

import com.nuedaProject.demo.model.DebitCard;
import com.nuedaProject.demo.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    @Query("SELECT t FROM Transaction t WHERE t.creditCardId = :creditCardId")
    List<Transaction> findByCreditCardId(Long creditCardId);

    @Query("SELECT t FROM Transaction t WHERE t.debitCardId = :debitCardId")
    List<Transaction> findByDebitCardId(Long debitCardId);
}
