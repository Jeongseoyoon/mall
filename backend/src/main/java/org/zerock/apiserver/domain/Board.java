package org.zerock.apiserver.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "tbl_board")
public class Board {

    // 기본키
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;
    // 제목
    @Column(length = 255)
    private String title;
    // 내용
    @Column
    private String content;
    // 작성자 아이디
    @Column
    private String userId;
    // 조회수
    @Column
    private Long hit;
    // 등록일자
    @Column
    private LocalDate regDt;

    @ManyToOne
    private User user;


}
