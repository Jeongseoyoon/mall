package org.zerock.apiserver.user.dto;

import lombok.*;

import java.time.LocalDate;

@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    // 유저아이디
    private String userId;
    // 비밀번호
    private String password;
    // 이름
    private String userNm;
    // 등록일자
    private LocalDate regDt;

}
