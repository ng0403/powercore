package com.crm.cp.sales.call.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.call.service.CallService;
import com.crm.cp.sales.call.vo.CallVO;
import com.crm.cp.sales.custcomp.vo.CustCompVO;
import com.crm.cp.sales.custcomp.vo.KeymanVO;
import com.crm.cp.sales.custpson.vo.CustPsonVO;
import com.crm.cp.sales.lead.vo.LeadVo;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.utils.PagerVO;

@Controller
public class CallController {
	
	@Resource
	MenuService menuService;
	
	@Resource
	CallService callService;
	
	//연락처 전체 리스트
	@RequestMapping(value="/call" , method=RequestMethod.GET)
	public ModelAndView callList(HttpSession session, @RequestParam(value = "callPageNum", defaultValue = "1") int callPageNum){
		ModelAndView mov = null;
		if (session.getAttribute("user") == null) {
			mov = new ModelAndView("standard/home/session_expire");
		}
		
		Map<String,Object> callMap = new HashMap<String,Object>();
		callMap.put("callPageNum", callPageNum);
		
		PagerVO page  = callService.CallListCount(callMap);
		callMap.put("page", page);
		
		List<CallVO> callList = callService.callAllList(callMap);
		List<MenuVO> menuList = menuService.selectAll(session);
		List<CustPsonVO> StatList = callService.compStatList();
		
		mov = new ModelAndView("call","menuList",menuList);
		mov.addObject("callList", callList);
		mov.addObject("callPageNum",callPageNum);
		mov.addObject("page",page);
		mov.addObject("StatList", StatList);
		
		return mov; 
	}
	
	//전체리스트 출력 페이징/검색 
	@RequestMapping(value="/callPaging" , method=RequestMethod.POST)
	public @ResponseBody Map<String,Object> ActListSearch(HttpSession session, @RequestParam(value = "callPageNum", defaultValue = "1") int callPageNum,
			String call_name, String call_email, String call_tel, String call_iuser_nm){
		
		Map<String,Object> callMap = new HashMap<String,Object>();
		
		/*if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			callMap.put("result", "standard/home/session_expire");
		} else {
			callMap.put("call_name",call_name);
			callMap.put("call_email",call_email);
			callMap.put("call_tel", call_tel);
			callMap.put("call_iuser_nm", call_iuser_nm);
			callMap.put("callPageNum", callPageNum);
			
			PagerVO page = callService.CallListCount(callMap);
			callMap.put("startRow", page.getStartRow());
			callMap.put("endRow", page.getEndRow());
			callMap.put("page", page);
			List<CallVO> callList = callService.callAllList(callMap);
			callMap.put("callList", callList);
			callMap.put("callListSize", callList.size());
		}*/
		
		callMap.put("call_name",call_name);
		callMap.put("call_email",call_email);
		callMap.put("call_tel", call_tel);
		callMap.put("call_iuser_nm", call_iuser_nm);
		callMap.put("callPageNum", callPageNum);
			
		PagerVO page = callService.CallListCount(callMap);
		callMap.put("page", page);
		
		List<CallVO> callList = callService.callAllList(callMap);
		callMap.put("callList", callList);
		callMap.put("callListSize", callList.size());
		
		return callMap;
	}
		
	// 연락처 리스트 초성검색 / 그냥검색 페이징		
	@RequestMapping(value="/searchKeyword" , method=RequestMethod.POST)
	public @ResponseBody Map<String,Object> searchKeyword(HttpSession session, int callPageNum,
			String keyword, String call_name, String call_email, String call_tel, String call_iuser_nm){

		Map<String,Object> kwMap = new HashMap<String, Object>();
		/*if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			kwMap.put("result", "standard/home/session_expire");
		} else {
		kwMap.put("call_name",call_name);
		kwMap.put("call_email",call_email);
		kwMap.put("call_tel", call_tel);
		kwMap.put("call_iuser_nm", call_iuser_nm);
		kwMap.put("keyword", keyword);
		kwMap.put("callPageNum", callPageNum);
		
		PagerVO page = callService.CallListCount(kwMap);
		kwMap.put("page", page);
		
		List<CallVO> callList = callService.callSearchAll(kwMap);
		kwMap.put("callList", callList);
		kwMap.put("callListSize", callList.size());
		}*/
		
		kwMap.put("call_name",call_name);
		kwMap.put("call_email",call_email);
		kwMap.put("call_tel", call_tel);
		kwMap.put("call_iuser_nm", call_iuser_nm);
		kwMap.put("keyword", keyword);
		kwMap.put("callPageNum", callPageNum);
		
		PagerVO page = callService.CallListCount(kwMap);
		kwMap.put("page", page);
		
		List<CallVO> callList = callService.callSearchAll(kwMap);
		kwMap.put("callList", callList);
		kwMap.put("callListSize", callList.size());
		
		return kwMap;
	}
	
	//회사명리스트 팝업창 
	@RequestMapping(value="/compList" , method=RequestMethod.GET)
	public ModelAndView ActOpptList(HttpSession session){

		List<Object> compList = callService.compList();
		ModelAndView mov = new ModelAndView("/sales/call/callPop/comp_list_pop");
			
		mov.addObject("compList", compList);
		
		return mov;
	}
		
	// 연락처 상세정보
	@RequestMapping(value = "callDetail", method = RequestMethod.POST)
	public @ResponseBody CallVO companyCutomerDetail(String call_id) {
		CallVO callVO = callService.callDetail(call_id);		
		return callVO;
	}
	
	// 키맨 추가
	@RequestMapping(value = "/callAddKeyman", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> callAddKeyman(HttpSession session, KeymanVO kVO) {
		
		Map<String, Object> callKeyMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			callKeyMap.put("callKey", "standard/home/session_expire");
		} else {
		kVO.setFst_reg_id_nm(session.getAttribute("user").toString());
		kVO.setFin_mdfy_id_nm(session.getAttribute("user").toString());
	
		String callKey = callService.callAddKeyman(kVO);
		
		callKeyMap.put("callKey", callKey);
		}
		return callKeyMap;
	}
	
	// 키맨 수정
	@RequestMapping(value = "/CallKeymanMdfy", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> CallKeymanMdfy(HttpSession session, KeymanVO kVO,CallVO cavo
		 , @RequestParam(value = "callPageNum", defaultValue = "1") int callPageNum) {

		Map<String, Object> callRstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			callRstMap.put("callKmMdfyRst", "standard/home/session_expire");
		} else {
		kVO.setFin_mdfy_id_nm(session.getAttribute("user").toString());	
		
		String callKmMdfyRst = callService.CallKeymanMdfy(kVO);
		
		cavo = callService.callDetail(cavo.getCall_id());
		
		callRstMap.put("callKmMdfyRst", callKmMdfyRst);
		callRstMap.put("callPageNum",callPageNum);
		callRstMap.put("cavo", cavo);
		}
		return callRstMap;
	}
	
	//개인고객 추가
	@RequestMapping(value = "/callAddCust" , method = RequestMethod.POST)
	public @ResponseBody Map<String, String> leadInsert(HttpSession session, LeadVo leadVo) {
		
		Map<String, String> callCustmap = new HashMap<String, String>();
		
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			callCustmap.put("callRs", "standard/home/session_expire");
		} else {
			leadVo.setFst_reg_id_nm(session.getAttribute("user").toString());
			leadVo.setFin_mdfy_id_nm(session.getAttribute("user").toString());
			if(leadVo.getCust_info_yn() == null) {
				leadVo.setCust_info_yn("N");
			}
			if(leadVo.getMkt_app_yn() == null) {
				leadVo.setMkt_app_yn("N");
			}
			String callRs = callService.callAddCust(leadVo);
			callCustmap.put("callRs", callRs);
		}
		/*
		leadVo.setFst_reg_id_nm(session.getAttribute("user").toString());
		leadVo.setFin_mdfy_id_nm(session.getAttribute("user").toString());
		
		String callRs = callService.callAddCust(leadVo);
			
		Map<String, String> callCustmap = new HashMap<String, String>();
		callCustmap.put("callRs", callRs);*/
		
		return callCustmap;  
	}
	
	// 개인고객 수정
	@RequestMapping(value = "/editCallCustPson", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> editCustPson(HttpSession session, CustPsonVO cpvo, CallVO cavo
		 , @RequestParam(value = "callPageNum", defaultValue = "1") int callPageNum) {

		Map<String, Object> callCustMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			callCustMap.put("callCustResult", "standard/home/session_expire");
		} else {
		cpvo.setFin_mdfy_id_nm(session.getAttribute("user").toString());
	
		String callCustResult = callService.editCallCustPson(cpvo);

		cavo = callService.callDetail(cavo.getCall_id());
		
		callCustMap.put("callCustResult", callCustResult);
		callCustMap.put("cpvo", cpvo);
		callCustMap.put("cavo", cavo);
		callCustMap.put("callPageNum",callPageNum);
		}
		return callCustMap;
	}
	
	// 연락처 삭제
	@RequestMapping(value = "callDelete", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> keymanDelete(HttpSession session, @RequestBody List<String> call_idList) {

		Map<String, Object> rstMap = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			rstMap.put("deleteResult", "standard/home/session_expire");
		} else {
		String deleteResult = callService.deleteCall(call_idList);
		rstMap.put("deleteResult", deleteResult);
		}
		return rstMap;
	}
}
