insert into tbl_board(title, content, user_id, hit, reg_dt) values('테스트1', '내용1', 'admin', 0, '2024-03-22');
insert into tbl_board(title, content, user_id, hit, reg_dt) values('테스트2', '내용2', 'admin', 0, '2024-03-22');

insert into tbl_comment(board_id, user_id, comment, reg_dt) values(1, 'admin', '댓글테스트1', '2024-03-22');
insert into tbl_comment(board_id, user_id, comment, reg_dt) values(1, 'admin', '댓글테스트2', '2024-03-22');
insert into tbl_comment(board_id, user_id, comment, reg_dt) values(1, 'admin', '댓글테스트3', '2024-03-22');

insert into tbl_user(user_id, user_nm, password, reg_dt) values('admin', '관리자', 1234, '2024-03-22');
insert into tbl_user(user_id, user_nm, password, reg_dt) values('user1', '유저1', 1234, '2024-03-22');

commit;