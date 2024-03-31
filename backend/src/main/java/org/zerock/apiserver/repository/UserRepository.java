package org.zerock.apiserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.apiserver.domain.User;

public interface UserRepository extends JpaRepository<User, String> {

}
