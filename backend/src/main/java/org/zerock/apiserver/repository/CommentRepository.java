package org.zerock.apiserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.zerock.apiserver.domain.Comment;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    /**
     * 게시글에 해당하는 댓글리스트를 가져온다.
     * @param BoardId
     * @return
     */
    public List<Comment> findByBoardId(Long BoardId);

}
