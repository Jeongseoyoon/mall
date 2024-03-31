package org.zerock.apiserver.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tbl_todo")
public class Todo {

    //엔티티 클래스는 PK가 반드시 있어야한다.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tno;

    // varchar(255)임, 조절하려면 컬럼사용
    @Column(length = 500, nullable = false)
    private String title;

    private String content;

    private boolean complete;

    private LocalDate dueDate;

}
