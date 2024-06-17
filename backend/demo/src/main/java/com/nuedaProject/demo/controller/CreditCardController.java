package com.nuedaProject.demo.controller;

import com.nuedaProject.demo.model.CreditCard;
import com.nuedaProject.demo.model.DebitCard;
import com.nuedaProject.demo.repository.CreditCardRepository;
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
@RequestMapping("/creditcard")
public class CreditCardController {
    private CreditCardRepository creditCardRepository;

    @Autowired
    public CreditCardController(CreditCardRepository creditCardRepository) {
        this.creditCardRepository = creditCardRepository;
    }

    // Get one credit card by id, params "id" is gained from http request url
    @CrossOrigin(origins = "*")
    @GetMapping("/cardId/{id}")
    public CreditCard getCreditCardById(@PathVariable Long id) {
        return creditCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Credit card not found with id: " + id));
    }

    // // Get a list of credit card by given user id, params "uid" is gained from http request url
    @CrossOrigin(origins = "*")
    @GetMapping("/userId/{uid}")
    public ResponseEntity<List<CreditCard>> getCreditCardByUserId(@PathVariable("uid") Long uid){
        List<CreditCard> creditCards = creditCardRepository.findByUid(uid);
        return new ResponseEntity<>(creditCards, HttpStatus.OK);
    }

    // // Get all credit card in the database
    @CrossOrigin(origins = "*")
    @GetMapping()
    public List<CreditCard> getCreditCards(){
        return creditCardRepository.findAll();
    }

}
