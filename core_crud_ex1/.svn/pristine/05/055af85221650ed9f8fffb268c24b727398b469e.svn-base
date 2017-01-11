package com.crm.cp.sales.teamgoal.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.teamgoal.vo.TeamExcelViewVo;
import com.crm.cp.sales.teamgoal.vo.TeamGoalSumVo;
import com.crm.cp.sales.teamgoal.vo.TeamGoalVo;

/**
 * 작성자 : 이재현 
 * 작성일시 : 2015/03/09 
 * 내용 :  팀별목표 DAO Interface
 * 
 */

public interface TeamGoalDao {
	// 팀별목표 목표금액 조회
	List<TeamGoalSumVo> getSumTeamGoal(Map<String, String> map);

	// 팀별목표 엑셀 Download시 입력내용 조회
//	List<TeamExcelViewVo> getTeamExcelView();

	// 팀별목표 등록 가능 여부 조회
	int AvailableTeamGoal(Map map);

	// 팀별목표 update
	int ModiTeamGoal(Map map);

	// 팀별목표 insert
	int InsertTeamGoal(Map map);
	
	//팀별목표 편집 업데이트
	int UpdateTeamGoal(TeamGoalVo teamGoalVo);

	TeamGoalVo getOrg_id(String user);
}
