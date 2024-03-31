package org.zerock.apiserver.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tbl_comment")
public class Comment {

    // 댓글아이디
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;
    // 게시글아이디
    @Column
    private Long boardId;
    // 유저아이디
    @Column
    private String userId;
    // 댓글내용
    @Column
    private String comment;
    // 작성일자
    @Column
    private LocalDate regDt;

}
