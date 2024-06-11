package com.nuedaProject.demo.repository;

import com.nuedaProject.demo.model.DebitCard;
import com.nuedaProject.demo.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
