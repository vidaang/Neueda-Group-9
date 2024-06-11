package com.nuedaProject.demo.controller;

import com.nuedaProject.demo.model.CreditCard;
import com.nuedaProject.demo.repository.CreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/creditcard")
public class CreditCardController {
    private CreditCardRepository creditCardRepository;

    @Autowired
    public CreditCardController(CreditCardRepository creditCardRepository) {
        this.creditCardRepository = creditCardRepository;
    }

    @GetMapping("/{id}")
    public CreditCard getCreditCardById(@PathVariable Long id) {
        return creditCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Credit card not found with id: " + id));
    }

    @GetMapping("/{uid}")
        public CreditCard getCreditCardByUid(@PathVariable Long uid) {
            return creditCardRepository.findByUid(uid);
                    //.orElseThrow(() -> new RuntimeException("Credit card not found with uid: " + uid));
    }


    @GetMapping()
    public List<CreditCard> getCreditCards(){
        return creditCardRepository.findAll();
    }

}
