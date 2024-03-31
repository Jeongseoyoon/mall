package org.zerock.apiserver.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDate;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tbl_user")
public class User {

    // 유저아이디
    @Column
    @Id
    private String userId;
    // 비밀번호
    @Column
    private String password;
    // 이름
    @Column
    private String userNm;
    // 등록일자
    @Column
    private LocalDate regDt;

}
