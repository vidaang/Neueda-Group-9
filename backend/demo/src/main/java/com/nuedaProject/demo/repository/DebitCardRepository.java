package com.nuedaProject.demo.repository;

import com.nuedaProject.demo.model.CreditCard;
import com.nuedaProject.demo.model.DebitCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DebitCardRepository extends JpaRepository<DebitCard, Long>{
    @Query(value = "{uid:?0}")
    DebitCard findByUid(Long uid);
}
