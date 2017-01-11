package com.crm.cp.sales.lead.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.sales.lead.controller.LeadPageUtil;
import com.crm.cp.sales.lead.dao.LeadDao;
import com.crm.cp.sales.lead.vo.LeadVo;

@Service
public class LeadServiceImpl implements LeadService{

	@Resource
	LeadDao leadDao;
	
	//리드 전체 리스트 가져오기
	public List<LeadVo> getList(Map<String, Object> map){
		List<LeadVo> leadList = leadDao.getList(map);
		return leadList;
	}
	
	//페이지 정보 가져오기
	@Override
	public LeadPageUtil getLeadListCount(Map<String, Object> map) {
	
		int leadListPageNum = Integer.parseInt(map.get("leadListPageNum").toString());
		//현재 페이지 얻어오기
		LeadPageUtil page = new LeadPageUtil(leadListPageNum, 0, 5, 5);
		//전체 글의 갯수 구하기
		int totalRowCount = leadDao.getLeadListCount(map);

		page = new LeadPageUtil(leadListPageNum, totalRowCount, 5, 5);
		
		return page;
	}
	
	//고객명 눌렀을 때 상세정보
	@Override
	public LeadVo getLeadDetail(String cust_id){
		LeadVo leadVo = leadDao.getLeadDetail(cust_id);
		
		String zip_cd = leadVo.getCust_zip_cd();
		leadVo.setCust_zip_cd1(zip_cd.substring(0, 2));
		leadVo.setCust_zip_cd2(zip_cd.substring(3, 5));
		
		return leadVo;
	}
	
	/*//리드 검색하기
	public List<LeadVo> getLeadSearch(HashMap<String, Object> map){
		List<LeadVo> leadList = leadDao.getLeadSearch(map);
		
		return leadList;
	}
	*/
	
	//리드 추가하기 (개인)
	@Override
	public String getInsert(LeadVo leadVo) {
		leadVo.setCust_zip_cd(leadVo.getCust_zip_cd1() + leadVo.getCust_zip_cd2());
		int result = leadDao.getInsert(leadVo);
		
		String resultStr = null;
		if(result == 3){  //쿼리문 3개 추가했기 때문에!
			resultStr = "개인 리드 등록이 완료 되었습니다.";
		} else {
			resultStr = "개인 리드 등록에 실패 했습니다.";
		}
		return resultStr;
	}
	
	//리드 추가하기 (기업)
	@Override
	public String getInsert1(LeadVo leadVo) {
		leadVo.setCust_zip_cd(leadVo.getCust_zip_cd1() + leadVo.getCust_zip_cd2());
		int result1 = leadDao.getInsert1(leadVo);
		
		String resultStr = null;
		if(result1 == 3){
			resultStr = "기업 리드 등록이 완료 되었습니다.";
		} else {
			resultStr = "기업 리드 등록에 실패 했습니다.";
		}
		return resultStr;
	}

	//리드 수정하기 (개인)
	@Override
	public String getLeadUpdate(LeadVo leadVo) {
		leadVo.setCust_zip_cd(leadVo.getCust_zip_cd1() + leadVo.getCust_zip_cd2());
		int result = leadDao.getLeadUpdate(leadVo);

		String resultStr = null;
		if(result == 3){
			resultStr = "기업 리드 수정이 완료 되었습니다.";
		} else {
			resultStr = "기업 리드 수정을 실패 하였습니다.";
		}
		return resultStr;
	}
	
	//리드 수정하기 (기업)
	@Override
	public String getLeadUpdate1(LeadVo leadVo) {
		leadVo.setCust_zip_cd(leadVo.getCust_zip_cd1() + leadVo.getCust_zip_cd2());
		int result1 = leadDao.getLeadUpdate1(leadVo);

		String resultStr = null;
		if(result1 == 3){
			resultStr = "기업 리드 수정이 완료 되었습니다.";
		} else {
			resultStr = "기업 리드 수정을 실패 하였습니다.";
		}
		return resultStr;
	}
	
	//리드 삭제
	@Override
	public String getLeadDelete(List<String> leadIDList) {
		int result = leadDao.getLeadDelete(leadIDList);

		String resultStr = null;
		if(result == leadIDList.size()){
			resultStr = "리드삭제가 완료 되었습니다.";
		} else {
			resultStr = "리드삭제에 실패 하였습니다.";
		}
		return resultStr;
	}
	
	//리드소스 코드
	@Override
	public List<LeadVo> selectLRC() {
		List<LeadVo> LRCCodeList = leadDao.selectLRC();
		return LRCCodeList;
	}
	
	//리드상태 코드
	@Override
	public List<LeadVo> selectLSC() {
		List<LeadVo> LSCCodeList = leadDao.selectLSC();
		return LSCCodeList;
	}
	
	//심사적합으로 변환
	@Override
	public String getLeadSuitState(String leadList){
		int result = leadDao.getLeadSuitState(leadList);
		
		String resultStr = null;
		if(result == 1){
			resultStr = "심사적합으로 변환 되었습니다.";
		} else {
			resultStr = "심사적합 변환이 실패 하였습니다.";
		}
		return resultStr;
	}
	
	//심사 부적합으로 변환
	@Override
	public String getLeadUnSuitState(String leadList){
		int result = leadDao.getLeadUnSuitState(leadList);
		
		String resultStr = null;
		if(result == 1){
			resultStr = "심사부적합으로 변환 되었습니다.";
		} else {
			resultStr = "심사적합 변환이 실패 하였습니다.";
		}
		return resultStr;
	}
	
	//리드변환 하기
	@Override
	public String getLeadChange_confirm(String leadList){
		int result = leadDao.getLeadChange_confirm(leadList);

		String resultStr = null;
		if(result == 1){
			resultStr = "리드변환이 완료 되었습니다.";
		} else {
			resultStr = "리드변환에 실패 하였습니다.";
		}
		return resultStr;
	}

}


	