package com.nuedaProject.demo.repository;

import com.nuedaProject.demo.model.CreditCard;
import com.nuedaProject.demo.model.DebitCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreditCardRepository extends JpaRepository<CreditCard, Long> {
}
