package com.nuedaProject.demo.controller;

import com.nuedaProject.demo.model.Transaction;
import com.nuedaProject.demo.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/transaction")
public class TransactionController {
    @Autowired
    TransactionRepository transactionRepository;

    // Return a list of transaction belongs to the "creditCardId" in the path variable
    @GetMapping("/creditCard/{creditCardId}")
    public ResponseEntity<List<Transaction>> getTransactionByCreditCardId(@PathVariable("creditCardId")Long creditCardId){
        List<Transaction> trans = transactionRepository.findByCreditCardId(creditCardId);
        return new ResponseEntity<>(trans, HttpStatus.OK);
    }

    // Return a list of transaction belongs to the "debitCardId" in the path variable
    @GetMapping("/debitCard/{debitCardId}")
    public ResponseEntity<List<Transaction>> getTransactionByDebitCardId(@PathVariable("debitCardId")Long debitCardId){
        List<Transaction> trans = transactionRepository.findByDebitCardId(debitCardId);
        return new ResponseEntity<>(trans, HttpStatus.OK);
    }

    // Return optional transaction by the given "id" or transaction id
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Transaction>> getTransactionById(@PathVariable("id")Long id){
        Optional<Transaction> trans = transactionRepository.findById(id);
        return new ResponseEntity<>(trans, HttpStatus.OK);
    }

    // Return all transaction in the database
    @GetMapping("")
    public ResponseEntity<List<Transaction>> getAllTransaction(){
        List<Transaction> trans = transactionRepository.findAll();
        return new ResponseEntity<>(trans, HttpStatus.OK);
    }



}
