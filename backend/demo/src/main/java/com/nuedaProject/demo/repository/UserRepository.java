package com.nuedaProject.demo.repository;

import com.nuedaProject.demo.model.DebitCard;
import com.nuedaProject.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
