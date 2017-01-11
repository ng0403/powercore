package com.crm.cp.sales.teamgoal.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.teamgoal.vo.TeamGoalSumVo;
import com.crm.cp.sales.teamgoal.vo.TeamGoalVo;

/**
 * 작성자 : 이재현 
 * 작성일시 : 2015/03/09 
 * 내용 :  팀별목표 DAO Impl
 * 
 */
@Repository
public class TeamGoalDaoImpl implements TeamGoalDao {

	@Autowired
	private SqlSession sqlSession;
	
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public List<TeamGoalSumVo> getSumTeamGoal(Map<String, String> map) {
		return sqlSession.selectList("teamgoal.getSumTeamGoal", map);
	}

	@Override
	public int AvailableTeamGoal(Map map) {
		return sqlSession.selectOne("teamgoal.AvailableTeamGoal", map);
	}

	@Override
	public int ModiTeamGoal(Map map) {
		int res = -1; 
		res = sqlSession.update("teamgoal.ModiTeamGoal", map);
		
		return res;
	}

	@Override
	public int InsertTeamGoal(Map map) {
		int res = -1; 
		res = sqlSession.update("teamgoal.InsertTeamGoal", map);
		
		return res;
	}
	@Override
	public int UpdateTeamGoal(TeamGoalVo teamGoalVo) {
		int res = -1;
		res = sqlSession.update("teamgoal.UpdateTeamGoal", teamGoalVo);
		return res;
	}

	@Override
	public TeamGoalVo getOrg_id(String user) {
		TeamGoalVo org_id = sqlSession.selectOne("getOrgId", user);
		return org_id;
	}

}
