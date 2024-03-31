package org.zerock.apiserver.board.dto;

import lombok.*;

import java.time.LocalDate;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CommentDTO {

    // 댓글아이디
    private Long commentId;
    // 게시글아이디
    private Long boardId;
    // 유저아이디
    private String userId;
    // 유저명
    private String userNm;
    // 댓글내용
    private String comment;
    // 작성일자
    private LocalDate regDt;

}
