package com.crm.cp.sales.custcomp.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.sales.custcomp.dao.CustCompDao;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.utils.PagerVO;

@Service
public class CustCompServiceImpl implements CustCompService {

	@Resource
	CustCompDao ccDao;

	// 기업고객 리스트 전체 개수 조회(페이징에 사용)
	@Override
	public PagerVO getCCListCount(Map<String, Object> pMap) {
		int ccPageNum = (Integer) pMap.get("ccPageNum");
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(ccPageNum, 0, 5, 5);
		// 전체 글의 갯수 구하기
		int totalRowCount = ccDao.getCCListCount(pMap);
		page = new PagerVO(ccPageNum, totalRowCount, 5, 5);

		return page;
	}

	// 기업고객 리스트
	@Override
	public List<CustCompVO> getCCList(Map<String, Object> pMap) {
		List<CustCompVO> ccVOList = ccDao.getCCList(pMap);
		return ccVOList;
	}

	// 기업고객 상세정보+코드
	@Override
	public CustCompVO getCCDetail(String cust_id) {
		// 상세정보
		CustCompVO ccVO = ccDao.selectDetail(cust_id);
		String zip_cd = ccVO.getCust_zip_cd();
		ccVO.setCust_zip_cd1(zip_cd.substring(0, 2));
		ccVO.setCust_zip_cd2(zip_cd.substring(3, 5));

		return ccVO;
	}

	// 기업고객 추가
	@Override
	public String insertCustComp(CustCompVO ccVO) {
		ccVO.setCust_zip_cd(ccVO.getCust_zip_cd1()+ccVO.getCust_zip_cd2());
		int inputResult = ccDao.insertCustComp(ccVO);
		
		String resultStr = null;
		if(inputResult == 2){
			resultStr = "새로운 기업고객 등록이 완료 되었습니다.";
		} else {
			resultStr = "기업고객 등록에 실패 했습니다.";
		}
		return resultStr;
	}
	
	// 기업고객 수정
	@Override
	public String updateCustComp(CustCompVO ccVO) {
		ccVO.setCust_zip_cd(ccVO.getCust_zip_cd1()+ccVO.getCust_zip_cd2());
		
		int updateResult = ccDao.updateCustComp(ccVO);
		
		String resultStr = null;
		if(updateResult == 2){
			resultStr = "기업고객 수정이 완료 되었습니다.";
		} else {
			resultStr = "기업고객 수정에 실패 했습니다.";
		}
		return resultStr;
	}
	
	// 기업고객 삭제
	@Override
	public String deleteCustComp(List<String> cust_idList) {
		int deleteResult = ccDao.deleteCustComp(cust_idList);
		String resultStr = null;
		if(deleteResult == cust_idList.size()){
			resultStr = "기업고객 삭제가 완료 되었습니다.";
		} else {
			resultStr = "기업고객 삭제에 실패 했습니다.";
		}
		return resultStr;
	}
	
	// 매출규모 코드
	@Override
	public List<CustCompVO> selectSSC() {
		List<CustCompVO> SSCCodeList = ccDao.selectSSC();
		return SSCCodeList;
	}

	// 산업군 코드
	@Override
	public List<CustCompVO> selectIDC() {
		List<CustCompVO> IDCCodeList = ccDao.selectIDC();
		return IDCCodeList;
	}

	// 기업 상태 코드
	@Override
	public List<CustCompVO> selectCCS() {
		List<CustCompVO> CCSCodeList = ccDao.selectCCS();
		return CCSCodeList;
	}

	// 키맨 리스트
	@Override
	public List<KeymanVO> getKeymanList(String cust_id) {
		List<KeymanVO> kmVOList = ccDao.getKeymanList(cust_id);
		return kmVOList;
	}

	// 영업기회 리스트
	@Override
	public List<OpptVO> getOpptList(String cust_id) {
		List<OpptVO> opptVOList = ccDao.getOpptList(cust_id);
		return opptVOList;
	}

	// 영업활동 리스트
	@Override
	public List<ActVO> getActList(String cust_id) {
		List<ActVO> actVOList = ccDao.getActList(cust_id);
		return actVOList;
	}

	// 견적 리스트
	@Override
	public List<EstVO> getEstList(String cust_id) {
		List<EstVO> estVOList = ccDao.getEstList(cust_id);
		return estVOList;
	}

	// 계약 리스트
	@Override
	public List<contrVO> getContList(String cust_id) {
		List<contrVO> contVOList = ccDao.getContList(cust_id);

		return contVOList;
	}

	// 직원검색 리스트 개수
	@Override
	public PagerVO getEmpListNum(int iuserPageNum, String iuser_nm) {
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(iuserPageNum, 0, 15, 10);
		// 전체 글의 갯수 구하기
		int empListNum = ccDao.getEmpListNum(iuser_nm);
		
		page = new PagerVO(iuserPageNum, empListNum, 15, 10);
		page.setTotalCount(empListNum);
				
		return page;
	}

	// 직원검색 리스트
	@Override
	public List<CustCompVO> getEmpList(Map<String, Object> iuserMap, PagerVO page) {
		
		iuserMap.put("startRow", page.getStartRow());
		iuserMap.put("endRow", page.getEndRow());
		List<CustCompVO> empVOList = ccDao.getEmpList(iuserMap);

		return empVOList;
	}

	// 키맨 추가
	@Override
	public String insertKeyman(KeymanVO kVO) {
		int kmRst = ccDao.insertKeyman(kVO);
		
		String kmRstStr = null;
		if(kmRst == 1){
			kmRstStr = "새로운 키맨 등록이 완료되었습니다.";
		}else {
			kmRstStr = "키맨 등록에 실패했습니다.";
		}
		return kmRstStr;
	}

	// 키맨 삭제
	@Override
	public String deleteKeyman(List<String> keyman_idList) {
		int deleteResult = ccDao.deleteKeyman(keyman_idList);
		String resultStr = null;
		if(deleteResult == keyman_idList.size()){
			resultStr = "키맨 삭제가 완료 되었습니다.";
		} else {
			resultStr = "키맨 삭제에 실패 했습니다.";
		}
		return resultStr;
	}

	// 키맨 상세정보
	@Override
	public KeymanVO keymanDetail(String kmn_id) {
		KeymanVO kmVO = ccDao.keymanDetail(kmn_id);
		return kmVO;
	}
	
	// 키맨 수정
	@Override
	public String mdfyKeyman(KeymanVO kVO) {
		int mdfyResult = ccDao.deleteKeyman(kVO);
		String resultStr = null;
		if(mdfyResult == 1){
			resultStr = "키맨 수정이 완료 되었습니다.";
		} else {
			resultStr = "키맨 수정에 실패 했습니다.";
		}
		return resultStr;
	}

	// 영업기회 팝업 고객정보 가져오기
	@Override
	public OpptVO ccOpptCustDetail(String cust_id) {
		OpptVO opptVO = ccDao.ccOpptCustDetail(cust_id);
		return opptVO;
	}

	// 영업기회 삭제
	@Override
	public String deleteOppt(List<String> oppt_idList) {
		int deleteResult = ccDao.deleteOppt(oppt_idList);
		String resultStr = null;
		if(deleteResult == oppt_idList.size()){
			resultStr = "영업기회 삭제가 완료 되었습니다.";
		} else {
			resultStr = "영업기회 삭제에 실패 했습니다.";
		}
		return resultStr;
	}

	// 영업기회 상세정보
	@Override
	public OpptVO ccOpptDetail(String sales_oppt_id) {
		OpptVO opptVO = ccDao.ccOpptDetail(sales_oppt_id);
		return opptVO;
	}

	// 영업활동 고객 정보
	@Override
	public ActVO ccActCustDetail(String cust_id) {
		ActVO ccActVO = ccDao.ccActCustDetail(cust_id);
		return ccActVO;
	}

	// 영업활동 삭제
	@Override
	public String deleteAct(List<String> act_idList) {
		int deleteResult = ccDao.deleteAct(act_idList);
		String resultStr = null;
		if(deleteResult == act_idList.size()){
			resultStr = "영업활동 삭제가 완료 되었습니다.";
		} else {
			resultStr = "영업활동 삭제에 실패 했습니다.";
		}
		return resultStr;
	}

	// 계약 기업고객 정보 가져오기
	@Override
	public contrVO getContCust(String cust_id) {
		contrVO contVO = ccDao.getContCust(cust_id);
		return contVO;
	}

	// 견적 삭제
	@Override
	public String deleteEst(List<String> est_idList) {
		int deleteResult = ccDao.deleteEst(est_idList);
		String resultStr = null;
		if(deleteResult > 0){
			resultStr = "견적 삭제가 완료 되었습니다.";
		} else {
			resultStr = "견적 삭제에 실패 했습니다.";
		}
		return resultStr;
	}

	// 영업기회 리스트 팝업
	@Override
	public List<OpptVO> ccOpptPopList(String cust_id) {
		List<OpptVO> opptList = ccDao.ccOpptPopList(cust_id);
		return opptList;
	}

}
