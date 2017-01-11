package com.crm.cp.sales.lead.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.cp.sales.lead.controller.LeadPageUtil;
import com.crm.cp.sales.lead.vo.LeadVo;

public interface LeadDao{

	//리드 전체 리스트 가져오기
	List<LeadVo> getList(Map<String, Object> map);
	//리드 전체리스트 개수 가져오기
	int getLeadListCount(Map<String, Object> map);
	//고객명 눌렀을 때 상세정보
	LeadVo getLeadDetail(String cust_id);
	/*//리드 검색하기
	List<LeadVo> getLeadSearch(HashMap<String, Object> map);*/
	//리드 추가하기 (개인)
	int getInsert(LeadVo leadVo);
	//리드 추가하기 (기업)
	int getInsert1(LeadVo leadVo);
	//리드 수정하기
	int getLeadUpdate(LeadVo leadVo);
	//리드 수정하기 (기업)
	int getLeadUpdate1(LeadVo leadVo);
	//리드 삭제하기
	int getLeadDelete(List<String> leadIDList);
	//리드소스 코드 가져오기
	List<LeadVo> selectLRC(); 
	//리드상태 코드 가져오기
	List<LeadVo> selectLSC();
	//심사적합으로 변환하기(수정)
	int getLeadSuitState(String leadList);
	//심사 부적합으로 변환하기(수정)
	int getLeadUnSuitState(String leadList);
	//리드 변환하기(수정)
	int getLeadChange_confirm(String leadList);
	
}

