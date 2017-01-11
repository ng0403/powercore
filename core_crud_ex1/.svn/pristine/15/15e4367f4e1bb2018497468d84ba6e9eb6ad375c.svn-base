package com.crm.cp.sales.call.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.call.vo.CallVO;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.custpson.vo.CustPsonVO;
import com.crm.cp.sales.lead.vo.LeadVo;

@Repository
public class CallDaoImpl implements CallDao{
	@Autowired
	private SqlSession sqlSession;
	
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//전체리스트 
	@Override
	public List<CallVO> callAllList(Map<String, Object> callMap) {
		List<CallVO> obj = sqlSession.selectList("call.selectAll",callMap);
		return obj;
	}
	
	//초성검색
	@Override
	public List<CallVO> callSearchAll(Map<String, Object> callMap) {
		List<CallVO> obj = sqlSession.selectList("call.selectAll",callMap);
		return obj;
	}

	//전체리스트 개수
	@Override
	public int callListCount(Map<String, Object> callMap) {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("call.selectTotalCount",callMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return totalCount;
	}

	//상태리스트
	@Override
	public List<CustPsonVO> compStatList() {
		List<CustPsonVO> obj = sqlSession.selectList("call.CallcompStatCd");
		return obj;
	}

	// 회사명리스트
	@Override
	public List<Object> compList() {
		List<Object> obj = sqlSession.selectList("call.custcompPopList");
		return obj;
	}

	//연락처 상세정보
	@Override
	public CallVO callDetail(String call_id) {
		CallVO callVO=null;
		callVO =sqlSession.selectOne("call.callOneDetail", call_id);
		return callVO;
	}

	//연락처 키맨추가
	@Override
	public int callAddtKeyman(KeymanVO kVO) {
		int rstKm = 0;
		try {
			rstKm = sqlSession.insert("call.CallKeyman", kVO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return rstKm;
	}
	
	//연락처 개인고객 추가
	@Override
	public int callAddCust(LeadVo leadVo) {
		int result = 0;  //개인
		try { 
			result += sqlSession.insert("call.callAdd_personal1", leadVo);
			result += sqlSession.insert("call.callAdd_personal2", leadVo);
			result += sqlSession.insert("call.callAdd_personal3", leadVo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	//연락처 키맨 수정
	@Override
	public int editCallKeyman(KeymanVO kVO) {
		int rstKm = 0;
		try {
			rstKm = sqlSession.update("call.callKeymanMdfy", kVO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return rstKm;
	}
	

	//연락처 개인추가 수정
	@Override
	public int editCallCustPson(CustPsonVO cpvo) {
		int editResultTemp = 0;
		int updateResult = 0;
		try {
			editResultTemp = sqlSession.update("call.callCustUpdate1", cpvo);
			updateResult += editResultTemp;
			editResultTemp = 0;
			editResultTemp = sqlSession.update("call.callCustUpdate2", cpvo);
			updateResult += editResultTemp;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return updateResult;
	}

	//연락처 키맨삭제
	@Override
	public int keymanDelete(String ke) {
		int delResult = 0;
		try {
			delResult = sqlSession.update("call.callKeymanDelete", ke);
	
		} catch (Exception e) {
			e.printStackTrace();
		}
		return delResult;
	}

	//연락처 개인고객 삭제
	@Override
	public int CustDelete(String cu) {
		int delResult = 0;
		try {
			delResult = sqlSession.update("call.callCustDelete", cu);
	
		} catch (Exception e) {
			e.printStackTrace();
		}
		return delResult;
	}

}
