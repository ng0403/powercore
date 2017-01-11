package com.crm.cp.sales.staffgoal.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.staffgoal.vo.StaffGoalSumVo;
import com.crm.cp.sales.staffgoal.vo.StaffGoalVo;

/**
 * 작성자 : 이재현 
 * 작성일시 : 2015/03/06
 * 내용 :  담당자별 목표 DAO Impl
 * 
 */
@Repository
public class StaffGoalDaoImpl implements StaffGoalDao {

	@Autowired
	private SqlSession sqlSession;
	
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public List<StaffGoalSumVo> getSumStaffGoal(Map map) {
		return sqlSession.selectList("staffgoal.getSumStaffGoal", map);
	}

	@Override
	public int AvailiableStaffGoal(Map map) {
		return sqlSession.selectOne("staffgoal.AvailableStaffGoal", map);
	}

	@Override
	public int ModiStaffGoal(Map map) {
		int res = -1;
		res = sqlSession.update("staffgoal.ModiStaffGoal", map);
		return res;
	}

	@Override
	public int InsertStaffGoal(Map map) {
		int res = -1;
		res = sqlSession.update("staffgoal.InsertStaffGoal", map);
		return res;
	}

	@Override
	public int UpdateStaffGoal(StaffGoalVo staffGoalVo) {
		int res = -1;
		res = sqlSession.update("staffgoal.UpdateStaffGoal", staffGoalVo);
		return res;
	}

	@Override
	public List<StaffGoalSumVo> QueryOrg(String Act_Yn) {
		return sqlSession.selectList("staffgoal.QueryOrg",Act_Yn);
	}

	@Override
	public StaffGoalVo getOrg_id(String user) {
		return sqlSession.selectOne("getOrgID", user);
	}

	@Override
	public List<StaffGoalSumVo> getSumStaffGoalSch(HashMap<String, Object> map) {
		return sqlSession.selectList("staffgoal.getSumStaffGoalSch", map);
	}

}
