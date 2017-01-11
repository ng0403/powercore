package com.crm.cp.sales.lead.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.cp.sales.lead.controller.LeadPageUtil;
import com.crm.cp.sales.lead.vo.LeadVo;
import com.crm.cp.utils.PagerVO;

public interface LeadService{

	//리드 전체 리스트 가져오기
	List<LeadVo> getList(Map<String, Object> map);
	//페이지 정보 얻어오기
	LeadPageUtil getLeadListCount(Map<String, Object> map);
	//고객명 눌렀을 때 상세정보
	LeadVo getLeadDetail(String cust_id);
	/*//리드 검색하기
	List<LeadVo> getLeadSearch(HashMap<String, Object> map);*/
	//리드 추가하기 (개인)
	String getInsert(LeadVo vo);
	//리드 추가하기 (기업)
	String getInsert1(LeadVo vo);
	//리드 수정하기 (개인)
	String getLeadUpdate(LeadVo leadVo);
	//리드 수정하기 (기업)
	String getLeadUpdate1(LeadVo leadVo);
	//리드 삭제하기
	String getLeadDelete(List<String> leadIDList);
	//리드소스 코드리스트
	List<LeadVo> selectLRC(); 
	//리드상태 코드리스트
	List<LeadVo> selectLSC(); 
	//심사적합으로 변환하기(수정)
	String getLeadSuitState(String leadList);
	//심사 부적합으로 변환하기(수정)
	String getLeadUnSuitState(String leadList);
	//리드변환하기(수정)
	String getLeadChange_confirm(String leadList);
}
