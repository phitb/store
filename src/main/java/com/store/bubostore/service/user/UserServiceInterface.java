package com.store.bubostore.service.user;

import com.store.bubostore.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserServiceInterface {
    // Get all users
    List<User> getAllUsers();

    // Get user by username
    User findByUsername(String name);

    // Get user by ID
    Optional<User> getByUserID(int id);

    // Update user by ID
    void updateUserByID(User user);

    // Add new user
    void addUser(User user);

    // Delete user by ID
    void deleteUserByID(int id);
}
