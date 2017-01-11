package com.crm.cp.standard.login.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDaoImpl implements LoginDAO {

	@Autowired
	private SqlSession sqlSession;

	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public int selectOne(String root, Object obj) {
		try{
			int result = sqlSession.selectOne(root, obj);
			return result;
		}catch (Exception e) {
			System.out.println(e.getMessage());
			return -1;
		}
	}
}
