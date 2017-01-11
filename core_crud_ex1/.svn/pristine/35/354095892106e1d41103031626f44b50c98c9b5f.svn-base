package com.crm.cp.sales.lead.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.lead.controller.LeadPageUtil;
import com.crm.cp.sales.lead.vo.LeadVo;

@Repository
public class LeadDaoImpl implements LeadDao{

	@Autowired
	private SqlSession sqlSession;
	
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//리드 전체 리스트 가져오기
	@Override
	public List<LeadVo> getList(Map<String, Object> map) {
		List<LeadVo> leadList = null;
		try {
			//System.out.println("검색 : " + map);
			leadList = sqlSession.selectList("leadList", map); //select id 이름
		} catch (Exception e) {
			e.printStackTrace();
		}
		return leadList;
	}
	
	//리스트 전체 개수 
	@Override
	public int getLeadListCount(Map<String, Object> map) {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("leadListTotalCount", map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return totalCount;
	}
	
	//고객명 눌렀을 때 상세정보
	@Override
	public LeadVo getLeadDetail(String cust_id){
		LeadVo leadVo = null;
		try {
			leadVo = sqlSession.selectOne("leadDetail", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return leadVo;
	}
	
	/*//리드 검색하기
	@Override
	public List<LeadVo> getLeadSearch(HashMap<String, Object> map) {
		//System.out.println(map.get("cust_nm"));
		List<LeadVo> leadList = null;
		try {
			leadList = sqlSession.selectList("leadSearch", map); //select id 이름
			
			System.out.println(leadList.get(0).getCust_nm());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return leadList;
	}*/
	
	//리드 추가하기 (개인)
	@Override
	public int getInsert(LeadVo leadVo) {
		int result = 0;  //개인
		try { 
			result += sqlSession.insert("leadInsert_personal1", leadVo);
			result += sqlSession.insert("leadInsert_personal2", leadVo);
			result += sqlSession.insert("leadInsert_personal3", leadVo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	//리드 추가하기 (기업)
	@Override
	public int getInsert1(LeadVo leadVo) {
		int result1 = 0; //기업
		try { 
			result1 += sqlSession.insert("leadInsert_personal4", leadVo);
			result1 += sqlSession.insert("leadInsert_personal5", leadVo);
			result1 += sqlSession.insert("leadInsert_personal6", leadVo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result1;
		
	}

	//리드 수정하기 (개인)
	public int getLeadUpdate(LeadVo leadVo) {
		int result = 0;
		try {
			result += sqlSession.update("leadUpdate1", leadVo);
			result += sqlSession.update("leadUpdate2", leadVo);
			result += sqlSession.update("leadUpdate3", leadVo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	//리드 수정하기 (기업)
	public int getLeadUpdate1(LeadVo leadVo) {
		int result1 = 0;
		try {
			result1 += sqlSession.update("leadUpdate4", leadVo);
			result1 += sqlSession.update("leadUpdate5", leadVo);
			result1 += sqlSession.update("leadUpdate6", leadVo);
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result1;
	}
	
	//리드 삭제
	@Override
	public int getLeadDelete(List<String> leadIDList) {
		int result = 0;
		try {
			for (int i = 0; i < leadIDList.size(); i++) {
				result += sqlSession.update("leadDelete", leadIDList.get(i));
			}
		} catch (Exception e) {
		}
		return result;
	}
	
	//리드소스 코드
	@Override
	public List<LeadVo> selectLRC() {
		List<LeadVo> LRCCodeList = null;
		try {
			LRCCodeList = sqlSession.selectList("LRC");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return LRCCodeList;
	}
	
	//리드상태 코드
	@Override
	public List<LeadVo> selectLSC() {
		List<LeadVo> LSCCodeList = null;
		try {
			LSCCodeList = sqlSession.selectList("LSC");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return LSCCodeList;
	}

	//심사적합으로 변환
	@Override
	public int getLeadSuitState(String leadList) {
		int result = 0;
		try {
			result = sqlSession.update("leadSuitState",leadList);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	//심사 부적합으로 변환
	@Override
	public int getLeadUnSuitState(String leadList) {
		int result = 0;
		try {
			result = sqlSession.update("leadUnSuitState", leadList);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	//리드변환 하기
	@Override
	public int getLeadChange_confirm(String leadList) {
		int result = 0;
		try {
			result = sqlSession.update("leadChange_confirm", leadList);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
}

	