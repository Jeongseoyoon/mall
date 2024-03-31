package org.zerock.apiserver.board.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.zerock.apiserver.board.dto.BoardDTO;
import org.zerock.apiserver.board.dto.CommentDTO;
import org.zerock.apiserver.domain.Board;
import org.zerock.apiserver.domain.Comment;
import org.zerock.apiserver.domain.User;
import org.zerock.apiserver.repository.BoardRepository;
import org.zerock.apiserver.repository.CommentRepository;
import org.zerock.apiserver.repository.UserRepository;

import java.time.LocalDate;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class BoardService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    private final CommentRepository commentRepository;

    /**
     * 게시글 생성
     * @param params 
     * @return
     */
    public int createBoard(BoardDTO params) {

        Board board = new Board();
        board.setTitle(params.getTitle());
        board.setContent(params.getContent());
        board.setUserId(params.getUserId());
        board.setHit(0L);
        board.setRegDt(LocalDate.now());

        boardRepository.save(board);

        return 1;
    }

    /**
     * 게시글 수정
     * @param params
     * @return
     */
    public int updateBoard(BoardDTO params) {

        Board board = boardRepository.findById(params.getBoardId()).get();
        board.setTitle(params.getTitle());
        board.setContent(params.getContent());

        boardRepository.save(board);

        return 1;
    }

    /**
     * 게시글 삭제
     * @param boardId
     * @return
     */
    public int deleteBoard(Long boardId) {

        Board board = boardRepository.findById(boardId).get();

        boardRepository.delete(board);

        return 1;
    }

    /**
     * 게시글을 조회한다.
     * @return
     */
    public List<BoardDTO> selectBoardList() {

        List<Board> boardList = boardRepository.findAll();
        List<User> userList = userRepository.findAll();
        Map<String, String> userMap = userList.stream().collect(Collectors.toMap(User::getUserId, User::getUserNm));

        List<BoardDTO> result = new ArrayList<>();
        for (Board board : boardList) {
            BoardDTO dto = BoardDTO.builder()
                    .boardId(board.getBoardId())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .userNm(userMap.get(board.getUserId()))
                    .hit(board.getHit())
                    .regDt(board.getRegDt())
                    .build();
            result.add(dto);
        }

        return result;
    }

    /**
     * 게시글 상세정보를 조회한다.
     * @param boardId
     * @return
     */
    public BoardDTO selectBoard(Long boardId) {

        Optional<Board> boardOptional = boardRepository.findById(boardId);
        if(boardOptional.isEmpty()) {
            throw new IllegalArgumentException("게시물을 찾을 수 없습니다.");
        }

        Board board = boardOptional.get();
        String userId = board.getUserId();
        User user = userRepository.findById(userId).get();


//        List<Comment> comments = commentRepository.findByBoardId(boardId);
//        // CommentDTO 리스트 생성
//        List<CommentDTO> commentDTO = comments.stream()
//                .map(comment -> CommentDTO.builder()
//                .commentId(comment.getCommentId())
//                // 다른 필드들도 필요에 따라 추가
//                .build())
//                .collect(Collectors.toList());

        return BoardDTO.builder()
                .boardId(board.getBoardId())
                .title(board.getTitle())
                .content(board.getContent())
                .userNm(user.getUserNm())
                .hit(board.getHit())
                .regDt(board.getRegDt())
                .userId(board.getUserId())
//                .comments(commentDTO)
                .build();
    }

    /**
     * 댓글 생성
     * @param params
     * @return
     */
    public int createComment(CommentDTO params) {

        Comment comment = new Comment();
        comment.setBoardId(params.getBoardId());
        comment.setUserId(params.getUserId());
        comment.setComment(params.getComment());
        comment.setRegDt(LocalDate.now());

        commentRepository.save(comment);

        return 1;
    }

    /**
     * 댓글 수정
     * @param params
     * @return
     */
    public int updateComment(CommentDTO params) {

        Comment comment = commentRepository.findById(params.getCommentId()).get();
        comment.setComment(params.getComment());

        commentRepository.save(comment);

        return 1;
    }

    /**
     * 댓글 삭제
     * @param commentId
     * @return
     */
    public int deleteComment(Long commentId) {

        Comment comment = commentRepository.findById(commentId).get();

        commentRepository.delete(comment);

        return 1;
    }

    /**
     * 댓글을 조회한다.
     * @return
     */
    public List<CommentDTO> selectCommentList(Long boardId) {

        Map<String, String> userMap = userRepository.findAll().stream().collect(Collectors.toMap(User::getUserId, User::getUserNm));

        List<CommentDTO> result = new ArrayList<>();
        // 댓글 목록
        List<Comment> commentList = commentRepository.findByBoardId(boardId);
        for (Comment comment : commentList) {
            CommentDTO commentDTO = CommentDTO.builder()
                    .commentId(comment.getCommentId())
                    .boardId(comment.getBoardId())
                    .userId(comment.getUserId())
                    .userNm(userMap.get(comment.getUserId()))
                    .comment(comment.getComment())
                    .regDt(comment.getRegDt())
                    .build();
            result.add(commentDTO);
        }

        return result;
    }

}
