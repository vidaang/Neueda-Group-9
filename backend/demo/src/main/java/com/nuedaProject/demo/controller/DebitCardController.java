package com.nuedaProject.demo.controller;

import com.nuedaProject.demo.model.DebitCard;
import com.nuedaProject.demo.repository.DebitCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@RestController
@RequestMapping("/debitcard")

public class DebitCardController {
        private DebitCardRepository debitCardRepository;

        @Autowired
        public DebitCardController(DebitCardRepository debitCardRepository) {
            this.debitCardRepository = debitCardRepository;
        }

        // Get one debit card through given debitCardId
        @CrossOrigin(origins = "*")
        @GetMapping("/cardId/{id}")
        public DebitCard getDebitCardById(@PathVariable Long id) {
            return debitCardRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Debit card not found with id: " + id));
        }

        // Get a list of debit card of a user through params (Long uid) in the request url
        @CrossOrigin(origins = "*")
        @GetMapping("/userId/{uid}")
        public ResponseEntity<List<DebitCard>> getDebitCardByUserId(@PathVariable("uid") Long uid){
            List<DebitCard> debitCards = debitCardRepository.findByUid(uid);
            return new ResponseEntity<>(debitCards, HttpStatus.OK);
        }


        // Get all debit card in the database, no params required
        @CrossOrigin(origins = "*")
        @GetMapping()
        public List<DebitCard> getDebitCards(){
            return debitCardRepository.findAll();
        }
}
