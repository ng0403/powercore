package com.crm.cp.sales.call.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.call.vo.CallVO;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.custpson.vo.CustPsonVO;
import com.crm.cp.sales.lead.vo.LeadVo;
import com.crm.cp.utils.PagerVO;

public interface CallService {
	public List<CallVO> callAllList(Map<String,Object> callMap);
	public List<CallVO> callSearchAll(Map<String,Object> callMap);
	public PagerVO CallListCount(Map<String, Object> callMap);
	public List<CustPsonVO> compStatList();
	public List<Object> compList();
	public CallVO callDetail(String call_id);
	public String callAddKeyman(KeymanVO kVO);
	public String callAddCust(LeadVo leadVo);
	public String CallKeymanMdfy(KeymanVO kVO);
	public String editCallCustPson(CustPsonVO cpvo);
	public String deleteCall(List<String> call_idList);

}
