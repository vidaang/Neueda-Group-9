package com.nuedaProject.demo.repository;

import com.nuedaProject.demo.model.CreditCard;
import com.nuedaProject.demo.model.DebitCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DebitCardRepository extends JpaRepository<DebitCard, Long>{
    @Query(value = "SELECT d FROM DebitCard d WHERE d.uid = :uid")
    List<DebitCard> findByUid(Long uid);
}
