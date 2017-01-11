package com.crm.cp.sales.act.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.utils.PagerVO;

public interface ActDao {

	List<ActVO> actList(Map<String, Object> actMap);

	int getActListCount(Map<String, Object> actMap);
	
	List<ActVO> actTypeCdList();

	List<ActVO> actStatCdList();

	List<ActVO> actDivCdList();

	List<Object> actOpptList();
	
	List<Object> actOpptList(Map<String, Object> map);

	List<Object> custcompList();

	List<Object> custcompList(Map<String, Object> map);

	ActVO actDetail(String sales_actvy_id);

	void actInsert(ActVO actvo);

	Object actOneSelectId(String sales_actvy_id);

	void actEdit(ActVO actvo);

	/*List<ActVO> actList(Map<String, Object> actMap);

	int getActListCount(Map<String, Object> actMap);*/

	void actDelete(String sales_actvy_id);

}
