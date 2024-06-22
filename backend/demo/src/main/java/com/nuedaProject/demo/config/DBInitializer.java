package com.nuedaProject.demo.config;

import com.nuedaProject.demo.model.CreditCard;
import com.nuedaProject.demo.model.DebitCard;
import com.nuedaProject.demo.model.Transaction;
import com.nuedaProject.demo.model.User;
import com.nuedaProject.demo.repository.CreditCardRepository;
import com.nuedaProject.demo.repository.DebitCardRepository;
import com.nuedaProject.demo.repository.TransactionRepository;
import com.nuedaProject.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DBInitializer {

    @Bean
    CommandLineRunner initUserDatabase(UserRepository userRepository, TransactionRepository transactionRepository, CreditCardRepository creditCardRepository, DebitCardRepository debitCardRepository) {
        return args -> {
            // Create a list of sample users
            List<User> users = List.of(
                    new User("Alice", 650),
                    new User("Bob", 700),
                    new User("Charlie", 350),
                    new User("NoCredit", -1)
            );
            // Save all users to the database
            userRepository.saveAll(users);

            // Get the all the user in the mock db
            List<User> userList = userRepository.findAll();

            // Create a list of sample users
            List<CreditCard> creditCards = List.of(
                    new CreditCard(userList.get(0).getUid(), 5000F, 1000F),
                    new CreditCard(userList.get(1).getUid(), 6000F, 2092F),
                    new CreditCard(userList.get(2).getUid(), 3000F, 1500F),
                    new CreditCard(userList.get(0).getUid(), 2500F, 1000F),
                    new CreditCard(userList.get(0).getUid(), 6500F, 0F)
                    );
            // Save all credit cards to the database
            creditCardRepository.saveAll(creditCards);

            List<DebitCard> debitCards = List.of(
                    new DebitCard(userList.get(0).getUid(), 1000F),
                    new DebitCard(userList.get(1).getUid(), 2092F),
                    new DebitCard(userList.get(2).getUid(), 3012F),
                    new DebitCard(userList.get(3).getUid(), 4028F),
                    new DebitCard(userList.get(0).getUid(), 5400F),
                    new DebitCard(userList.get(0).getUid(), 50F)
            );
            // Save all debit cards to the database
            debitCardRepository.saveAll(debitCards);

            // Get all mock data of credit card and debit card
            List<CreditCard> creditCardList = creditCardRepository.findAll();
            List<DebitCard> debitCardList = debitCardRepository.findAll();

            // Create a list of sample transaction
            List<Transaction> transactions = List.of(
                    // Transaction of User 1
                    new Transaction(userList.get(0).getUid(), creditCardList.get(0).getCreditCardId(), (long) -1, 500F),
                    new Transaction(userList.get(0).getUid(), creditCardList.get(0).getCreditCardId(), (long) -1, -500F),
                    new Transaction(userList.get(0).getUid(), (long) -1, debitCardList.get(0).getDebitCardId(), -500F),
                    new Transaction(userList.get(0).getUid(), (long) -1, debitCardList.get(0).getDebitCardId(), -250F),
                    new Transaction(userList.get(0).getUid(), (long) -1, debitCardList.get(0).getDebitCardId(), 1000F),
                    // Transaction of User 2
                    new Transaction(userList.get(1).getUid(), creditCardList.get(1).getCreditCardId(), (long) -1, 500F),
                    new Transaction(userList.get(1).getUid(), creditCardList.get(1).getCreditCardId(), (long) -1, -500F),
                    new Transaction(userList.get(1).getUid(), (long) -1, debitCardList.get(1).getDebitCardId(), -500F),
                    new Transaction(userList.get(1).getUid(), (long) -1, debitCardList.get(1).getDebitCardId(), -250F),
                    new Transaction(userList.get(1).getUid(), (long) -1, debitCardList.get(1).getDebitCardId(), 1000F),
                    // Transaction of User 3
                    new Transaction(userList.get(2).getUid(), creditCardList.get(2).getCreditCardId(), (long) -1, 500F),
                    new Transaction(userList.get(2).getUid(), creditCardList.get(2).getCreditCardId(), (long) -1, -500F),
                    new Transaction(userList.get(2).getUid(), (long) -1, debitCardList.get(2).getDebitCardId(), -500F),
                    new Transaction(userList.get(2).getUid(), (long) -1, debitCardList.get(2).getDebitCardId(), -250F),
                    new Transaction(userList.get(2).getUid(), (long) -1, debitCardList.get(2).getDebitCardId(), 1000F),
                    // Transaction of User 4 (No credit Score)
                    new Transaction(userList.get(3).getUid(), (long) -1, debitCardList.get(3).getDebitCardId(), -500F),
                    new Transaction(userList.get(3).getUid(), (long) -1, debitCardList.get(3).getDebitCardId(), -250F),
                    new Transaction(userList.get(3).getUid(), (long) -1, debitCardList.get(3).getDebitCardId(), 1000F)
            );
            // Save all transaction to the database
            transactionRepository.saveAll(transactions);
        };
    }
}
