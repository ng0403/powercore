package com.crm.cp.sales.custcomp.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;

@Repository
public class CustCompDaoImpl implements CustCompDao {

	@Autowired
	private SqlSession sqlSession;
	
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	// 기업고객 리스트 전체 개수 조회(페이징에 사용)
	@Override
	public int getCCListCount(Map<String, Object> pMap) {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("ccListTotalCount", pMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return totalCount;
	}

	// 기업고객 리스트 가져오기
	@Override
	public List<CustCompVO> getCCList(Map<String, Object> pMap) {
		List<CustCompVO> ccListVO = null;
		try {
			ccListVO = sqlSession.selectList("custcompList", pMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccListVO;
	}

	// 기업고객 상세정보
	@Override
	public CustCompVO selectDetail(String cust_id) {
		CustCompVO ccVO = null;
		try {
			ccVO = sqlSession.selectOne("custCompDetail", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccVO;
	}

	// 기업고객 추가
	@Override
	public int insertCustComp(CustCompVO ccVO) {
		int inputResultTemp = 0;
		int inputResult = 0;
		try {
			inputResultTemp = sqlSession.insert("custInput", ccVO);
			inputResult += inputResultTemp;
			inputResultTemp = 0;
			inputResultTemp = sqlSession.insert("custCompInput", ccVO);
			inputResult += inputResultTemp;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return inputResult;
	}
	
	// 기업고개 수정
	@Override
	public int updateCustComp(CustCompVO ccVO) {
		int updateResultTemp = 0;
		int updateResult = 0;
		try {
			updateResultTemp = sqlSession.update("custUpdate", ccVO);
			updateResult += updateResultTemp;
			updateResultTemp = 0;
			updateResultTemp = sqlSession.update("custCompUpdate", ccVO);
			updateResult += updateResultTemp;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return updateResult;
	}
	
	// 기업고객 삭제
	@Override
	public int deleteCustComp(List<String> cust_idList) {
		int	deleteResultTemp = 0;
		int deleteResult = 0;
		try {
			for (int i = 0; i < cust_idList.size(); i++) {
				deleteResultTemp = sqlSession.update("custDelete", cust_idList.get(i));
				deleteResult += deleteResultTemp;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}

	// 매출규모 코드
	@Override
	public List<CustCompVO> selectSSC() {
		List<CustCompVO> ccCodeList = null;
		try {
			ccCodeList = sqlSession.selectList("getSSC");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccCodeList;
	}
	
	// 산업군 코드
	@Override
	public List<CustCompVO> selectIDC() {
		List<CustCompVO> ccCodeList = null;
		try {
			ccCodeList = sqlSession.selectList("getIDC");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccCodeList;
	}

	// 기업상태 코드
	@Override
	public List<CustCompVO> selectCCS() {
		List<CustCompVO> ccCodeList = null;
		try {
			ccCodeList = sqlSession.selectList("getCCS");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccCodeList;
	}
	
	// 키맨 리스트 가져오기
	@Override
	public List<KeymanVO> getKeymanList(String cust_id) {
		List<KeymanVO> kmVOList = null;
		try {
			kmVOList = sqlSession.selectList("keymanList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return kmVOList;
	}

	// 영업기회 리스트 가져오기
	@Override
	public List<OpptVO> getOpptList(String cust_id) {
		List<OpptVO> opptVOList = null;
		try {
			opptVOList = sqlSession.selectList("ccOpptList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return opptVOList;
	}

	// 영업활동 리스트 가져오기
	@Override
	public List<ActVO> getActList(String cust_id) {
		List<ActVO> actVOList = null;
		try {
			actVOList = sqlSession.selectList("ccActList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return actVOList;
	}

	// 견적 리스트 가져오기
	@Override
	public List<EstVO> getEstList(String cust_id) {
		List<EstVO> estVOList = null;
		try {
			estVOList = sqlSession.selectList("ccEstList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return estVOList;
	}

	// 계약 리스트 가져오기
	@Override
	public List<contrVO> getContList(String cust_id) {
		List<contrVO> contVOList = null;
		try {
			contVOList = sqlSession.selectList("ccContList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return contVOList;
	}

	// 직원검색 리스트 개수
	@Override
	public int getEmpListNum(String iuser_nm) {
		int empListNum = 0;
		try {
			empListNum = sqlSession.selectOne("empListNum", iuser_nm);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return empListNum;
	}

	// 직원 검색 리스트
	@Override
	public List<CustCompVO> getEmpList(Map<String, Object> iuserMap) {
		List<CustCompVO> empVOList = null;
		try {
			empVOList = sqlSession.selectList("empList", iuserMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return empVOList;
	}

	// 키맨 추가
	@Override
	public int insertKeyman(KeymanVO kVO) {
		int rstKm = 0;
		try {
			rstKm = sqlSession.insert("addKeyman", kVO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return rstKm;
	}

	// 키맨 삭제
	@Override
	public int deleteKeyman(List<String> keyman_idList) {
		int	deleteResultTemp = 0;
		int deleteResult = 0;
		try {
			for (int i = 0; i < keyman_idList.size(); i++) {
				deleteResultTemp = sqlSession.update("keymanDelete", keyman_idList.get(i));
				deleteResult += deleteResultTemp;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}

	// 키맨 상세정보
	@Override
	public KeymanVO keymanDetail(String kmn_id) {
		KeymanVO kmVO = null;
		try {
			kmVO = sqlSession.selectOne("kmDetail", kmn_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return kmVO;
	}

	// 키맨 수정
	@Override
	public int deleteKeyman(KeymanVO kVO) {
		int rstKm = 0;
		try {
			rstKm = sqlSession.update("mdfyKeyman", kVO);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return rstKm;
	}

	// 영업기회 고객정보 가져오기
	@Override
	public OpptVO ccOpptCustDetail(String cust_id) {
		OpptVO opptVO = null;
		try {
			opptVO = sqlSession.selectOne("ccOpptCustDetail", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return opptVO;
	}

	// 영업기회 삭제
	@Override
	public int deleteOppt(List<String> oppt_idList) {
		int	deleteResultTemp = 0;
		int deleteResult = 0;
		try {
			for (int i = 0; i < oppt_idList.size(); i++) {
				deleteResultTemp = sqlSession.update("ccOpptDelete", oppt_idList.get(i));
				deleteResult += deleteResultTemp;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}

	// 영업기회 상세정보
	@Override
	public OpptVO ccOpptDetail(String sales_oppt_id) {
		OpptVO opptVO = null;
		try {
			opptVO = sqlSession.selectOne("ccOpptDetail", sales_oppt_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return opptVO;
	}

	// 영업활동 고객정보
	@Override
	public ActVO ccActCustDetail(String cust_id) {
		ActVO ccActVO = null;
		try {
			ccActVO = sqlSession.selectOne("ccActCustDetail", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ccActVO;
	}

	// 영업활동 삭제
	@Override
	public int deleteAct(List<String> act_idList) {
		int	deleteResultTemp = 0;
		int deleteResult = 0;
		try {
			for (int i = 0; i < act_idList.size(); i++) {
				deleteResultTemp = sqlSession.update("ccActDelete", act_idList.get(i));
				deleteResult += deleteResultTemp;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}

	// 계약 기업고객 정보 가져오기
	@Override
	public contrVO getContCust(String cust_id) {
		contrVO contrVO = null;
		try {
			contrVO = sqlSession.selectOne("ccContCustDetail", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return contrVO;
	}

	// 견적 삭제
	@Override
	public int deleteEst(List<String> est_idList) {
		int deleteResult = 0;
		try {
			for (int i = 0; i < est_idList.size(); i++) {
				deleteResult += sqlSession.update("oppt.estimateDelete", est_idList.get(i));
				deleteResult += sqlSession.update("oppt.estListDelete", est_idList.get(i));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}

	// 영업기회 리스트 팝업
	@Override
	public List<OpptVO> ccOpptPopList(String cust_id) {
		List<OpptVO> opptList = null;
		try {
			opptList = sqlSession.selectList("ccOpptPopList", cust_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return opptList;
	}

}
