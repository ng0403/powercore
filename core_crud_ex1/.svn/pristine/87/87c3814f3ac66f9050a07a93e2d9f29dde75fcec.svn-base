package com.crm.cp.sales.custpson.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.sales.custpson.vo.CustPsonVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.addr.vo.AddressVo;

@Repository
public class CustPsonDaoImpl implements CustPsonDao {

	@Autowired
	private SqlSession sqlSession;

	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public int getCPListCount(Map<String, Object> map) {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("cpListTotalCount", map);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return totalCount;
	}

	@Override
	public List<CustPsonVO> list(String root, Map<String, Object> map) {
		List<CustPsonVO> cpvo = null;
		try {
			cpvo = sqlSession.selectList(root, map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return cpvo;
	}

	@Override
	public List<CustPsonVO> code(String root, String stat_cd) {

		List<CustPsonVO> code = sqlSession.selectList(root, stat_cd);
		return code;
	}

	@Override
	public CustPsonVO custInfo(String root, String cust_id) {

		CustPsonVO cpvo = sqlSession.selectOne(root, cust_id);
		return cpvo;
	}

	@Override
	public List<CustPsonVO> custSearch(String root, HashMap<String, String> map) {

		List<CustPsonVO> cpList = sqlSession.selectList(root, map);
		return cpList;
	}

	@Override
	public List<OpptVO> opptList(String root, String cust_id) {

		List<OpptVO> opptList = sqlSession.selectList(root, cust_id);
		return opptList;
	}

	@Override
	public List<ActVO> actList(String root, String cust_id) {

		List<ActVO> actList = sqlSession.selectList(root, cust_id);
		return actList;
	}

	@Override
	public List<EstVO> estList(String root, String cust_id) {

		List<EstVO> estList = sqlSession.selectList(root, cust_id);
		return estList;
	}

	@Override
	public List<contrVO> contList(String root, String cust_id) {

		List<contrVO> contList = sqlSession.selectList(root, cust_id);
		return contList;
	}

	// 직원검색 리스트 개수
	@Override
	public int getEmpListNum(String iuser_nm) {
		int empListNum = 0;
		try {
			empListNum = sqlSession.selectOne("empListNum1", iuser_nm);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return empListNum;
	}

	// 직원 검색 리스트
	@Override
	public List<CustPsonVO> getEmpList(Map<String, Object> iuserMap) {
		List<CustPsonVO> empVOList = null;
		try {
			empVOList = sqlSession.selectList("empList1", iuserMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return empVOList;
	}

	// 우편번호 리스트 개수
	@Override
	public int getParcelPostListNum(String root, String dong_nm) {
		int ppListNum = 0;
		try {
			ppListNum = sqlSession.selectOne(root, dong_nm);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ppListNum;
	}

	// 우편번호 리스트
	@Override
	public List<AddressVo> getParcelPostList(String root,
			Map<String, Object> zipMap) {
		List<AddressVo> ppVOList = null;
		try {
			ppVOList = sqlSession.selectList(root, zipMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ppVOList;
	}

	// 개인고객 추가
	@Override
	public int insertCustPson(String root, CustPsonVO cpvo) {
		int temp = 0;
		int result = 0;
		temp = sqlSession.insert(root, cpvo);
		result += temp;
		temp = 0;
		temp = sqlSession.insert("insertCustPson", cpvo);
		result += temp;
		return result;
	}

	// 개인고객 수정
	@Override
	public int updateCustPson(CustPsonVO cpvo) {
		int updateResultTemp = 0;
		int updateResult = 0;
		try {
			updateResultTemp = sqlSession.update("custUpdate1", cpvo);
			updateResult += updateResultTemp;
			updateResultTemp = 0;
			updateResultTemp = sqlSession.update("custPsonUpdate", cpvo);
			updateResult += updateResultTemp;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return updateResult;
	}

	// 개인고객 삭제
	@Override
	public int deleteCustPson(List<String> cust_idList) {
		int deleteResultTemp = 0;
		int deleteResult = 0;
		try {
			for (int i = 0; i < cust_idList.size(); i++) {
				deleteResultTemp = sqlSession.update("custDelete1",
						cust_idList.get(i));
				deleteResult += deleteResultTemp;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return deleteResult;
	}

}
