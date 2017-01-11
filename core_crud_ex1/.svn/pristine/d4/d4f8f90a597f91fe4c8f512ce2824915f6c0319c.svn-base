package com.crm.cp.sales.call.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.call.vo.CallVO;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.custpson.vo.CustPsonVO;
import com.crm.cp.sales.lead.vo.LeadVo;

public interface CallDao {
	public List<CallVO> callAllList(Map<String, Object> actMap);
	public List<CallVO> callSearchAll(Map<String, Object> actMap);
	public int callListCount(Map<String, Object> callMap);
	public List<CustPsonVO> compStatList();
	public List<Object> compList();
	public CallVO callDetail(String call_id);
	public int callAddtKeyman(KeymanVO kVO);
	public int callAddCust(LeadVo leadVo);
	public int editCallKeyman(KeymanVO kVO);
	public int editCallCustPson(CustPsonVO cpvo);
	public int keymanDelete(String ke);
	public int CustDelete(String cu);
}
