package com.nuedaProject.demo.repository;

import com.nuedaProject.demo.model.CreditCard;
import com.nuedaProject.demo.model.DebitCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CreditCardRepository extends JpaRepository<CreditCard, Long> {
    @Query(value = "SELECT c FROM CreditCard c WHERE c.uid = :uid")
    List<CreditCard> findByUid(Long uid);
}
