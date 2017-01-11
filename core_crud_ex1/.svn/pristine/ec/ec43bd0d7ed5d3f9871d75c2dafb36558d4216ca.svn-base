package com.crm.cp.sales.lead.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.lead.service.LeadService;
import com.crm.cp.sales.lead.vo.LeadVo;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;

@Controller
public class LeadController {

	@Resource
	LeadService leadInter;
	
	@Autowired
	MenuService menuService;
	
	//전체 리스트가져오기
	@RequestMapping(value = "/lead")
	public ModelAndView leadList(HttpSession session,
				   @RequestParam Map<String, Object> map,
			       @RequestParam(value = "leadListPageNum", defaultValue = "1") int leadListPageNum) {

		map.put("leadListPageNum", leadListPageNum);
		//페이지 정보를 얻어옴
		LeadPageUtil page = leadInter.getLeadListCount(map);
		
		map.put("page", page);
		map.put("startRow", page.getStartRow());
		map.put("endRow", page.getEndRow());
		
		List<LeadVo> leadList = leadInter.getList(map);
		List<LeadVo> LRCCodeList = leadInter.selectLRC(); // 리드소스 코드 가져오기
		List<LeadVo> LSCCodeList = leadInter.selectLSC(); // 리드상태 코드 가져오기
		
		List<MenuVO> menuList = menuService.selectAll(session);

		ModelAndView mov = new ModelAndView("lead"); 
		mov.addObject("leadList", leadList);  //"" 안은 for each의 items 이름
		
		mov.addObject("LRCCodeList", LRCCodeList); //리드소스
		mov.addObject("LSCCodeList", LSCCodeList); //리드상태
		
		mov.addObject("menuList", menuList);
		
		mov.addObject("page", page);
		mov.addObject("leadListPageNum", leadListPageNum);
		
		return mov;
	}
	
	//전체 리스트가져오기 ajax
	@RequestMapping(value = "/leadajax", method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> leadajax(HttpSession session,
			@RequestParam Map<String, Object> map) {
		//페이지 정보를 얻어옴
		LeadPageUtil page = leadInter.getLeadListCount(map);
		
		map.put("page", page);
		map.put("startRow", page.getStartRow());
		map.put("endRow", page.getEndRow());
		
		List<LeadVo> leadList = leadInter.getList(map);
	
		map.put("leadList", leadList); //리드 리스트
		map.put("leadListSize", leadList.size());
		
		int leadListPageNum = Integer.parseInt(map.get("leadListPageNum").toString()); //integer를 사용하여 숫자로 변환
		map.put("leadListPageNum", leadListPageNum);
		
		return map;
	}
	
	//고객명 눌렀을 때 상세정보
	@RequestMapping(value = "/leadDetail", method = RequestMethod.POST)
	public @ResponseBody LeadVo leadDetail(String cust_id){
		
		LeadVo leadVo = leadInter.getLeadDetail(cust_id);
		
		return leadVo;
	}
	
	//리드 추가하기 (개인)
	@RequestMapping(value = "/leadInsert" , method = RequestMethod.POST)
	public @ResponseBody Map<String, String> leadInsert(HttpSession session, LeadVo leadVo) {
		
		leadVo.setFst_reg_id_nm(session.getAttribute("user").toString());
		leadVo.setFin_mdfy_id_nm(session.getAttribute("user").toString());
		leadVo.setIuser_id_nm(session.getAttribute("user").toString());
		
		String result = leadInter.getInsert(leadVo);
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("result", result);
	
		return map;  
	}
	
	//리드 추가하기 (기업)
	@RequestMapping(value = "/leadInsert1" , method = RequestMethod.POST)
	public @ResponseBody Map<String, String> leadInsert1(HttpSession session, LeadVo leadVo) {
		
		leadVo.setFst_reg_id_nm(session.getAttribute("user").toString());
		leadVo.setFin_mdfy_id_nm(session.getAttribute("user").toString());
		leadVo.setIuser_id_nm(session.getAttribute("user").toString());
		
		String result1 = leadInter.getInsert1(leadVo);	
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("result1", result1);
		
		return map;  
	}
	
	//리드 수정하기 (개인)
	@RequestMapping(value = "/leadUpdate" , method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> leadUpdate(LeadVo leadVo, HttpSession session){
		leadVo.setFst_reg_id_nm(session.getAttribute("user").toString());
		
		String result = leadInter.getLeadUpdate(leadVo);
		leadVo = leadInter.getLeadDetail(leadVo.getCust_id());
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("result", result);
		map.put("leadVo", leadVo);
		return map;
	}
	
	//리드 수정하기 (기업)
	@RequestMapping(value = "/leadUpdate1" , method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> leadUpdate1(LeadVo leadVo, HttpSession session){
		leadVo.setFst_reg_id_nm(session.getAttribute("user").toString());
		
		String result1 = leadInter.getLeadUpdate1(leadVo);
		leadVo = leadInter.getLeadDetail(leadVo.getCust_id());
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("result1", result1);
		map.put("leadVo", leadVo);
		return map;
	}
	
	//리드삭제
	@RequestMapping(value = "/leadDelete")
	public @ResponseBody Map<String, Object> leadDelete(HttpSession session, @RequestBody List<String> leadIDList){
		Map<String, Object> map = new HashMap<String, Object>();
		if (session.getAttribute("user") == null) {		//로그인 페이지 이동
			map.put("result", "standard/home/session_expire");
		} else {
			String result = leadInter.getLeadDelete(leadIDList);
			map.put("result", result);
		}
		return map;
	}
	
	
	//리드변환 팝업창
	@RequestMapping(value = "/leadChange")
	public ModelAndView leadChange(HttpSession session, String cust_id){
		
		ModelAndView mov = new ModelAndView("/sales/lead/leadChange");
		mov.addObject("cust_id", cust_id);
		return mov;
	}
	
	//리드변환 하기
	@RequestMapping(value = "/leadChange_confirm")
	public @ResponseBody Map<String, Object> leadChange_confirm
								(LeadVo leadVo, @RequestBody String leadList) {
		String result = leadInter.getLeadChange_confirm(leadList);
				
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("result", result);
		map.put("leadVo", leadVo);
		return map;
	}
	
	//심사적합 팝업창
	@RequestMapping(value = "/leadSuit", method = RequestMethod.GET)
	public ModelAndView leadSuit(HttpSession session, String cust_id) {
		
		ModelAndView mov = new ModelAndView("/sales/lead/leadSuit");
		mov.addObject("cust_id", cust_id);
		return mov;
	}
	
	//심사적합으로 변환하는 곳(lead_stat_cd 수정)
	@RequestMapping(value = "/leadSuitState")
	public @ResponseBody Map<String, Object> leadSuitState(LeadVo leadVo, @RequestBody String leadList) {
		
		String result = leadInter.getLeadSuitState(leadList);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("result", result);
		map.put("leadVo", leadVo);
		return map;
	}
		
	//심사부적합 팝업창
	@RequestMapping(value = "/leadUnsuit", method = RequestMethod.GET)
	public ModelAndView leadUnsuit(HttpSession session, String cust_id) {
		
		ModelAndView mov = new ModelAndView("/sales/lead/leadUnsuit");
		mov.addObject("cust_id", cust_id);
		return mov;
	}
	
	//심사 부적합으로 변환하는 곳(lead_stat_cd 수정)
	@RequestMapping(value = "/leadUnSuitState", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> leadUnSuitState(LeadVo leadVo, @RequestBody String leadList){
		
		String result = leadInter.getLeadUnSuitState(leadList);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("result", result);
		map.put("leadVo", leadVo);
		return map;
	}
	
	//리드등록
	@RequestMapping(value = "/lead_CandP", method = RequestMethod.GET)
	public ModelAndView lead_CandP(HttpSession session) throws Exception {
		
		ModelAndView mov = new ModelAndView("/sales/lead/lead_CandP");
		return mov;
	}
	
	//우편번호
	@RequestMapping(value = "/addr", method = RequestMethod.GET)
	public ModelAndView addr(HttpSession session) throws Exception {
		
		ModelAndView mov = new ModelAndView("/sales/lead/addr");
		return mov;
	}
}
