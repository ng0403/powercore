package com.crm.cp.sales.custpson.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.cont.vo.contrVO;
import com.crm.cp.sales.custpson.vo.CustPsonVO;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.addr.vo.AddressVo;
import com.crm.cp.utils.PagerVO;

public interface CustPsonService {
	
	public List<CustPsonVO> list(Map<String, Object> map); // 개인고객 리스트
	public List<CustPsonVO> code(String stat_cd); // 코드
	public CustPsonVO custInfo(String cust_id);
	public PagerVO getCPListCount(Map<String, Object> map); 
	public List<CustPsonVO> getCustMap(HashMap<String, String> map);
	public List<OpptVO> opptList(String cust_id);
	public List<ActVO> actList(String cust_id);
	public List<EstVO> estList(String cust_id);
	public List<contrVO> contList(String cust_id);
	public PagerVO getParcelPostListNum(int zipPageNum, String dong_nm); // 우편번호 리스트 개수
	public List<AddressVo> getParcelPostList(Map<String, Object> zipMap, PagerVO page);// 우편번호 리스트
	public String insertCustPson(CustPsonVO cpvo);
	public PagerVO getEmpListNum(int iuserPageNum, String iuser_nm);
	public List<CustPsonVO> getEmpList(Map<String, Object> iuserMap, PagerVO page);
	public String updateCustPson(CustPsonVO cpvo);
	public String deleteCustPson(List<String> cust_idList);

}
