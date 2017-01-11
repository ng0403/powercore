package com.crm.cp.standard.category.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CategoryDaoImpl implements CategoryDao {

	@Autowired
	private SqlSession sqlSession;

	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public List<Object> selectAll(String root) {

		List<Object> obj = sqlSession.selectList(root);
		return obj;

	}
	
	@Override
	public List<Object> selectAll(String root, Object arg) {
		List<Object> obj = sqlSession.selectList(root, arg);
		return obj;
	}
	
	@Override
	public Object selectOne(String root) {
		Object obj = sqlSession.selectOne(root);
		return obj;
	}

	@Override
	public Object selectOne(String root, Object arg) {
		Object obj = sqlSession.selectOne(root, arg);
		return obj;
	}
	
	@Override
	public int insert(String root, Object obj) {
		
		int result = sqlSession.insert(root, obj);
		return result;
	}

	@Override
	public int update(String root, Object obj) {

		int result = sqlSession.update(root, obj);
		return result;
	}

	@Override
	public int delete(String root, Object obj) {

		int result = sqlSession.delete(root, obj);
		return result;
	}

	
}
