package com.crm.cp.sales.custpson.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.sales.custpson.dao.CustPsonDao;
import com.crm.cp.sales.custpson.vo.CustPsonVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.addr.vo.AddressVo;
import com.crm.cp.utils.PagerVO;

@Service
public class CustPsonServiceImpl implements CustPsonService {

	@Autowired
	CustPsonDao dao;

	@Override
	public PagerVO getCPListCount(Map<String, Object> map) {
		int cpPageNum = (Integer) map.get("cpPageNum");
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(cpPageNum, 0, 5, 5);
		// 전체 글의 갯수 구하기
		int totalRowCount = dao.getCPListCount(map);

		page = new PagerVO(cpPageNum, totalRowCount, 5, 5);

		return page;
	}

	@Override
	public List<CustPsonVO> list(Map<String, Object> cpsMap) {
		List<CustPsonVO> cpvo = dao.list("custpson.list", cpsMap);
		return cpvo;
	}

	public List<CustPsonVO> code(String stat_cd) {
		List<CustPsonVO> code = dao.code("custpson.code", stat_cd);
		return code;
	}

	// 상세보기
	@Override
	public CustPsonVO custInfo(String cust_id) {
		CustPsonVO cpvo = dao.custInfo("custpson.custInfo", cust_id);
		return cpvo;
	}

	@Override
	public List<CustPsonVO> getCustMap(HashMap<String, String> map) {
		List<CustPsonVO> cpList = dao.custSearch("custpson.custSearch", map);
		return cpList;
	}

	@Override
	public List<OpptVO> opptList(String cust_id) {
		List<OpptVO> opptList = dao.opptList("custpson.opptList", cust_id);
		return opptList;
	}

	@Override
	public List<ActVO> actList(String cust_id) {
		List<ActVO> actList = dao.actList("custpson.actList", cust_id);
		return actList;
	}

	@Override
	public List<EstVO> estList(String cust_id) {
		List<EstVO> estList = dao.estList("custpson.estList", cust_id);
		return estList;
	}

	@Override
	public List<contrVO> contList(String cust_id) {
		List<contrVO> contList = dao.contList("custpson.contList", cust_id);
		return contList;
	}

	// 직원검색 리스트 개수
	@Override
	public PagerVO getEmpListNum(int iuserPageNum, String iuser_nm) {
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(iuserPageNum, 0, 15, 10);
		// 전체 글의 갯수 구하기
		int empListNum = dao.getEmpListNum(iuser_nm);

		page = new PagerVO(iuserPageNum, empListNum, 15, 10);
		page.setTotalCount(empListNum);

		return page;
	}

	// 직원검색 리스트
	@Override
	public List<CustPsonVO> getEmpList(Map<String, Object> iuserMap,
			PagerVO page) {

		iuserMap.put("startRow", page.getStartRow());
		iuserMap.put("endRow", page.getEndRow());
		List<CustPsonVO> empVOList = dao.getEmpList(iuserMap);

		return empVOList;
	}

	// 우편번호 검색 리스트 개수
	@Override
	public PagerVO getParcelPostListNum(int zipPageNum, String dong_nm) {
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(zipPageNum, 0, 15, 10);
		// 전체 글의 갯수 구하기
		int ppListNum = dao.getParcelPostListNum("zipListNum1", dong_nm);

		page = new PagerVO(zipPageNum, ppListNum, 15, 10);
		page.setTotalCount(ppListNum);

		return page;
	}

	// 우편번호 검색 리스트
	@Override
	public List<AddressVo> getParcelPostList(Map<String, Object> zipMap,
			PagerVO page) {
		zipMap.put("startRow", page.getStartRow());
		zipMap.put("endRow", page.getEndRow());
		List<AddressVo> ppVOList = dao.getParcelPostList("zipList1", zipMap);

		return ppVOList;
	}

	// 개인고객 추가
	@Override
	public String insertCustPson(CustPsonVO cpvo) {
		cpvo.setCust_zip_cd(cpvo.getCust_zip_cd1() + cpvo.getCust_zip_cd2());

		int inputResult = dao.insertCustPson("insertCust", cpvo);

		String resultStr = null;
		if (inputResult == 2) {
			resultStr = "개인고객 추가가 완료 되었습니다.";
		} else {
			resultStr = "개인고객 추가에 실패 했습니다.";
		}
		return resultStr;
	}
	
	// 개인고객 수정
		@Override
		public String updateCustPson(CustPsonVO cpvo) {
			cpvo.setCust_zip_cd(cpvo.getCust_zip_cd1()+cpvo.getCust_zip_cd2());
			
			int updateResult = dao.updateCustPson(cpvo);
			
			String resultStr = null;
			if(updateResult == 2){
				resultStr = "개인고객 수정이 완료 되었습니다.";
			} else {
				resultStr = "개인고객 수정에 실패 했습니다.";
			}
			return resultStr;
		}

		// 개인고객 삭제
		@Override
		public String deleteCustPson(List<String> cust_idList) {
			int deleteResult = dao.deleteCustPson(cust_idList);
			String resultStr = null;
			if(deleteResult == cust_idList.size()){
				resultStr = "개인고객 삭제가 완료 되었습니다.";
			} else {
				resultStr = "개인고객 삭제에 실패 했습니다.";
			}
			return resultStr;
		}

}
