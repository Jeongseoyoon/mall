package org.zerock.apiserver.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.apiserver.user.dto.UserDTO;
import org.zerock.apiserver.user.service.UserService;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;

    /**
     * 유저를 생성한다.
     * @param params
     * @return
     */
    @PostMapping("/api/user")
    public ResponseEntity<Integer> createUser(@RequestBody UserDTO params) {

        int result = userService.createUser(params);

        return ResponseEntity.ok()
                .body(result);
    }

}
