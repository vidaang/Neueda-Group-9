package com.nuedaProject.demo.controller;

import com.nuedaProject.demo.model.DebitCard;
import com.nuedaProject.demo.repository.DebitCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/deditcard")

public class DebitCardController {
        private DebitCardRepository debitCardRepository;

        @Autowired
        public DebitCardController(DebitCardRepository debitCardRepository) {
            this.debitCardRepository = debitCardRepository;
        }

        @GetMapping("/{id}")
        public DebitCard getDebitCardById(@PathVariable Long id) {
            return debitCardRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Debit card not found with id: " + id));
        }

        @GetMapping("/{uid}")
        public DebitCard getDebitCard(@PathVariable Long uid) {
            return debitCardRepository.findByUid(uid);
            //.orElseThrow(() -> new RuntimeException("Credit card not found with uid: " + uid));
        }

        @GetMapping()
        public List<DebitCard> getDebitCards(){
            return debitCardRepository.findAll();
        }
}
