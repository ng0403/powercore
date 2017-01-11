package com.crm.cp.sales.teamgoal.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.sales.teamgoal.dao.TeamGoalDao;
import com.crm.cp.sales.teamgoal.vo.TeamExcelViewVo;
import com.crm.cp.sales.teamgoal.vo.TeamGoalSumVo;
import com.crm.cp.sales.teamgoal.vo.TeamGoalVo;

/**
 * 작성자 : 이재현 
 * 작성일시 : 2015/03/09 
 * 내용 :  팀별목표 ServiceImpl
 * 
 */
@Service
public class TeamGoalServiceImpl implements TeamGoalService {
	
	@Autowired
	private TeamGoalDao teamGoaldao;
	
	@Override
	public List<TeamGoalSumVo> getSumTeamGoal(Map<String, String> map) {
		return this.teamGoaldao.getSumTeamGoal(map);
	}

	@Override
	public int AvailableTeamGoal(Map map) {
		return this.teamGoaldao.AvailableTeamGoal(map);
	}

	@Override
	public int ModiTeamGoal(Map map) {
		return this.teamGoaldao.ModiTeamGoal(map);
	}

	@Override
	public int InsertTeamGoal(Map map) {
		return this.teamGoaldao.InsertTeamGoal(map);
	}

	@Override
	public int UpdateTeamGoal(TeamGoalVo teamGoalVo) {
		return this.teamGoaldao.UpdateTeamGoal(teamGoalVo);
	}

	@Override
	public TeamGoalVo getOrg_id(String user) {
		return this.teamGoaldao.getOrg_id(user);
	}

}
