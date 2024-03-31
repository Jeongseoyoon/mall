package org.zerock.apiserver.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.zerock.apiserver.domain.User;
import org.zerock.apiserver.repository.UserRepository;
import org.zerock.apiserver.user.dto.UserDTO;

import java.time.LocalDate;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    /**
     * 유저를 조회한다.
     * @param userId
     * @return
     */
    public UserDTO selectUser(String userId) {

        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isEmpty()) {
            throw new IllegalArgumentException("유저를 찾을 수 없습니다.");
        }

        User user = userOptional.get();

        return UserDTO.builder()
                .userId(user.getUserId())
                .userNm(user.getUserNm())
                .password(user.getPassword())
                .regDt(user.getRegDt())
                .build();
    }

    /**
     * 유저를 생성한다.
     * @param params
     * @return
     */
    public int createUser(UserDTO params) {

        Optional<User> userOptional = userRepository.findById(params.getUserId());
        if(userOptional.isPresent()) {
            throw new IllegalArgumentException("이미 생성된 아이디입니다.");
        }

        User user = User.builder()
                .userId(params.getUserId())
                .password(params.getPassword())
                .userNm(params.getUserNm())
                .regDt(LocalDate.now())
                .build();

        userRepository.save(user);

        return 1;
    }

}
