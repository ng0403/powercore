package com.crm.cp.sales.act.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.utils.PagerVO;

@Repository
public class ActDaoImpl implements ActDao{
	
	@Autowired
    SqlSession sqlSession;

	public List<ActVO> actList(Map<String, Object> actMap) {
		
		return sqlSession.selectList("act.actList",actMap);
	}

	@Override
	public int getActListCount(Map<String, Object> actMap) {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("actListTotalCount",actMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return totalCount;
	}

	@Override
	public List<ActVO> actTypeCdList() {
		return sqlSession.selectList("act.actTypeCdList");
	}

	@Override
	public List<ActVO> actStatCdList() {
		return sqlSession.selectList("act.actStatCdList");
	}

	@Override
	public List<ActVO> actDivCdList() {
		return sqlSession.selectList("act.actDivCdList");
	}

	@Override
	public List<Object> actOpptList() {
		return sqlSession.selectList("act.actOpptList");
	}
	
	@Override
	public List<Object> actOpptList(Map<String, Object> map) {
		return sqlSession.selectList("act.actOpptList",map);
	}

	@Override
	public List<Object> custcompList() {
		return sqlSession.selectList("act.customerList");
	}

	@Override
	public List<Object> custcompList(Map<String, Object> map) {
		return sqlSession.selectList("act.customerList",map);
	}

	@Override
	public ActVO actDetail(String sales_actvy_id) {
		ActVO actVO=null;
		actVO =sqlSession.selectOne("act.actDetail", sales_actvy_id);
		return actVO;
	}

	@Override
	public void actInsert(ActVO actvo) {
		sqlSession.insert("act.actInsert", actvo);
	}

	@Override
	public Object actOneSelectId(String sales_actvy_id) {
		Object obj = sqlSession.selectOne("act.actOneSelectId", sales_actvy_id);
		return obj;
	}

	@Override
	public void actEdit(ActVO actvo) {
		sqlSession.update("act.actEdit", actvo);
	}

/*	@Override
	public List<ActVO> actList(Map<String, Object> actMap) {
		return sqlSession.selectList("act.actList",actMap);
	}

	@Override
	public int getActListCount(Map<String, Object> actMap) {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("act.actListTotalCount",actMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return totalCount;
	}*/

	@Override
	public void actDelete(String sales_actvy_id) {
		sqlSession.update("act.actDelete", sales_actvy_id);
		
	}

}
