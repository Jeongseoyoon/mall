package org.zerock.apiserver.board.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BoardDTO {

    // 기본키
    private Long boardId;
    // 제목
    private String title;
    // 내용
    private String content;
    // 작성자 아이디
    private String userId;
    // 작성자명
    private String userNm;
    // 조회수
    private Long hit;
    // 등록일자
    private LocalDate regDt;

//    private List<CommentDTO> comments;

}
