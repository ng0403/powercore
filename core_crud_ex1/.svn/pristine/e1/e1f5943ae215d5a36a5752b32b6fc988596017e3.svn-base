package com.crm.cp.sales.staffgoal.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.sales.staffgoal.dao.StaffGoalDao;
import com.crm.cp.sales.staffgoal.vo.StaffGoalSumVo;
import com.crm.cp.sales.staffgoal.vo.StaffGoalVo;

@Service
public class StaffGoalServiceImpl implements StaffGoalService {

	@Autowired
	private StaffGoalDao staffGoaldao;
	
	@Override
	public List<StaffGoalSumVo> getSumStaffGoal(Map map) {
		return this.staffGoaldao.getSumStaffGoal(map);
	}

	@Override
	public int AvailiableStaffGoal(Map map) {
		return this.staffGoaldao.AvailiableStaffGoal(map);
	}

	@Override
	public int ModiStaffGoal(Map map) {
		return this.staffGoaldao.ModiStaffGoal(map);
	}

	@Override
	public int InsertStaffGoal(Map map) {
		return this.staffGoaldao.InsertStaffGoal(map);
	}

	@Override
	public int UpdateStaffGoal(StaffGoalVo staffGoalVo) {
		return this.staffGoaldao.UpdateStaffGoal(staffGoalVo);
	}

	@Override
	public List<StaffGoalSumVo> QueryOrg(String Act_Yn) {
		return this.staffGoaldao.QueryOrg(Act_Yn);
	}

	@Override
	public StaffGoalVo getOrg_id(String user) {
		return this.staffGoaldao.getOrg_id(user);
	}

	@Override
	public List<StaffGoalSumVo> getSumStaffGoalSch(HashMap<String, Object> map) {
		return this.staffGoaldao.getSumStaffGoalSch(map);
	}

}
