package com.crm.cp.sales.staffgoal.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.cp.sales.staffgoal.vo.StaffGoalSumVo;
import com.crm.cp.sales.staffgoal.vo.StaffGoalVo;

/**
 * 작성자 : 이재현 
 * 작성일시 : 2015/03/16 
 * 내용 :  담당자별 목표 DAO Interface
 * 
 */
public interface StaffGoalDao {
	// 담당자별 목표금액 조회 
	List<StaffGoalSumVo> getSumStaffGoal(Map map);
	
	// 담당자별 목표 가능 여부 조회	
	int AvailiableStaffGoal(Map map);
	// 담당자별 목표 update 	
	int ModiStaffGoal(Map map);
	// 담당자별 목표 insert
	int InsertStaffGoal(Map map);
	// 담당자별 목표 편집 업데이트
	int UpdateStaffGoal(StaffGoalVo staffGoalVo);
	
	List<StaffGoalSumVo> QueryOrg(String Act_Yn);

	StaffGoalVo getOrg_id(String user);

	List<StaffGoalSumVo> getSumStaffGoalSch(HashMap<String, Object> map);
}
