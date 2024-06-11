package com.nuedaProject.demo.repository;

import com.nuedaProject.demo.model.CreditCard;
import com.nuedaProject.demo.model.DebitCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CreditCardRepository extends JpaRepository<CreditCard, Long> {
    @Query(value = "{uid:?0}")
    CreditCard findByUid(Long uid);
}
