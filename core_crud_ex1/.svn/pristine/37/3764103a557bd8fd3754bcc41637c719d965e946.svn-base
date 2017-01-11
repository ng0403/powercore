package com.crm.cp.sales.custpson.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.sales.custpson.vo.CustPsonVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.addr.vo.AddressVo;

public interface CustPsonDao {
	
	int getCPListCount(Map<String, Object> map);
	public List<CustPsonVO> list(String root, Map<String, Object> map);
	public List<CustPsonVO> code(String root, String stat_cd);
	public CustPsonVO custInfo(String root, String cust_id);
	public List<CustPsonVO> custSearch(String root, HashMap<String, String> map);
	public List<OpptVO> opptList(String root, String cust_id);
	public List<ActVO> actList(String string, String cust_id);
	public List<EstVO> estList(String string, String cust_id);
	public List<contrVO> contList(String string, String cust_id);
	public int getParcelPostListNum(String root, String dong_nm); // 우편번호 검색 리스트 개수
	public List<AddressVo> getParcelPostList(String root, Map<String, Object> zipMap); // 우편번호 검색 리스트
	public int insertCustPson(String root, CustPsonVO cpvo);
	public int getEmpListNum(String iuser_nm);
	public List<CustPsonVO> getEmpList(Map<String, Object> iuserMap);
	public int updateCustPson(CustPsonVO cpvo);
	public int deleteCustPson(List<String> cust_idList);

}
