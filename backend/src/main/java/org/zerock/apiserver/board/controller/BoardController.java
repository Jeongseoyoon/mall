package org.zerock.apiserver.board.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.zerock.apiserver.board.dto.BoardDTO;
import org.zerock.apiserver.board.dto.CommentDTO;
import org.zerock.apiserver.board.service.BoardService;
import org.zerock.apiserver.domain.Board;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
public class BoardController {

    private final BoardService boardService;

    /**
     * 게시글을 생성한다.
     * @param params
     * @return
     */
    @PostMapping("/api/board")
    public ResponseEntity<Integer> createBoard(@RequestBody BoardDTO params) {

        int result = boardService.createBoard(params);

        return ResponseEntity.ok()
                .body(result);
    }

    /**
     * 게시글을 수정한다.
     * @param params
     * @return
     */
    @PutMapping("/api/board")
    public ResponseEntity<Integer> updateBoard(@RequestBody BoardDTO params) {

        int result = boardService.updateBoard(params);

        return ResponseEntity.ok()
                .body(result);
    }

    /**
     * 게시글을 삭제한다.
     * @param boardId
     * @return
     */
    @DeleteMapping("/api/board/{boardId}")
    public ResponseEntity<Integer> deleteBoard(@PathVariable("boardId") Long boardId) {

        int result = boardService.deleteBoard(boardId);

        return ResponseEntity.ok()
                .body(result);
    }

    /**
     * 게시글 리스트를 조회한다.
     * @return
     */
    @GetMapping("/api/boardList")
    public ResponseEntity<List<BoardDTO>> selectBoardList() {

        List<BoardDTO> result = boardService.selectBoardList();

        return ResponseEntity.ok()
                .body(result);
    }

    /**
     * 게시글을 조회한다.
     * @param boardId
     * @return
     */
    @GetMapping("/api/board/{boardId}")
//    public ResponseEntity<BoardDTO> selectBoard(@RequestParam(name = "boardId", required = false) Long boardId) {
    public ResponseEntity<BoardDTO> selectBoard(@PathVariable("boardId") Long boardId) {

        BoardDTO result = boardService.selectBoard(boardId);

        return ResponseEntity.ok()
                .body(result);
    }

    /**
     * 댓글을 생성한다.
     * @param params
     * @return
     */
    @PostMapping("/api/comment")
    public ResponseEntity<Integer> createComment(@RequestBody CommentDTO params) {

        int result = boardService.createComment(params);

        return ResponseEntity.ok()
                .body(result);
    }

    /**
     * 댓글을 수정한다.
     * @param params
     * @return
     */
    @PutMapping("/api/comment")
    public ResponseEntity<Integer> updateComment(@RequestBody CommentDTO params) {
        int result = boardService.updateComment(params);
        return ResponseEntity.ok().body(result);
    }

    /**
     * 댓글을 삭제한다.
     * @param commentId
     * @return
     */
    @DeleteMapping("/api/comment/{commentId}")
    public ResponseEntity<Integer> deleteComment(@PathVariable("commentId") Long commentId) {

        int result = boardService.deleteComment(commentId);

        return ResponseEntity.ok()
                .body(result);
    }

    /**
     * 게시글 아이디에 해당하는 댓글 리스트를 조회한다.
     * @param boardId
     * @return
     */
    @GetMapping("/api/commentList")
    public ResponseEntity<List<CommentDTO>> selectCommentList(@RequestParam(name = "boardId") Long boardId) {

        List<CommentDTO> result = boardService.selectCommentList(boardId);

        return ResponseEntity.ok()
                .body(result);
    }

}
