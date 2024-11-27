package com.example.user_backend.models.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.user_backend.models.UserClass;

@Repository
public interface UserRepository extends JpaRepository <UserClass, Integer>{

}
