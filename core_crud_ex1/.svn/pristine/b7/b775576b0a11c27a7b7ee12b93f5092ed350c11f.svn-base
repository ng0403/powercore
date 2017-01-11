package com.crm.cp.sales.act.controller;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.sales.act.service.ActService;
import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.utils.Encoder;
import com.crm.cp.utils.PagerVO;

@Controller
public class ActController {
	
	@Autowired
	MenuService menuService;
	
	@Autowired
	ActService actService;
	
	//전체리스트 출력
	@RequestMapping(value="/act" , method=RequestMethod.GET)
	public ModelAndView ActList(HttpSession session, @RequestParam(value = "actPageNum", defaultValue = "1") int actPageNum){

		Map<String,Object> actMap = new HashMap<String,Object>();
		actMap.put("actPageNum", actPageNum);
		
		PagerVO page = actService.getActListCount(actMap);
		actMap.put("page", page);
		
		List<ActVO> actList = actService.actAllList(actMap);
		List<MenuVO> menuList = menuService.selectAll(session);
		List<ActVO> actTypeCd = actService.actTypeCdList();
		List<ActVO> actStatCd = actService.actStatCdList();
		List<ActVO> actDivCd = actService.actDivCdList();

		ModelAndView mov = new ModelAndView("act");
		mov.addObject("menuList", menuList);
		mov.addObject("actPageNum", actPageNum);
		mov.addObject("page", page);
		mov.addObject("actList", actList);
		mov.addObject("actTypeCd", actTypeCd);
		mov.addObject("actStatCd", actStatCd);
		mov.addObject("actDivCd", actDivCd);
		return mov;
	}
	
	//전체리스트 출력 페이징/검색 
		@RequestMapping(value="/actPaging" , method=RequestMethod.POST)
		public @ResponseBody Map<String,Object> ActListSearch(HttpSession session, @RequestParam(value = "actPageNum", defaultValue = "1") int actPageNum,
				String ssales_actvy_nm, String ssales_actvy_div_cd, String sact_oppt_nm, String sstart_day, String ssales_actvy_stat_cd) throws ParseException{
			
			/*SimpleDateFormat simpledate = new SimpleDateFormat();
			simpledate.applyLocalizedPattern("yyyy-MM-dd");
			java.util.Date date = simpledate.parse(sstart_day);*/

			Map<String,Object> actMap = new HashMap<String,Object>();
			actMap.put("ssales_actvy_nm",ssales_actvy_nm);
			actMap.put("ssales_actvy_div_cd",ssales_actvy_div_cd);
			actMap.put("sact_oppt_nm", sact_oppt_nm);
			actMap.put("sstart_day", sstart_day);
			actMap.put("ssales_actvy_stat_cd", ssales_actvy_stat_cd);
			actMap.put("actPageNum", actPageNum);
				
			PagerVO page = actService.getActListCount(actMap);
			actMap.put("page", page);
			
			List<ActVO> actList = actService.actAllList(actMap);
			actMap.put("actList", actList);
			actMap.put("actListSize", actList.size());
			
			return actMap;
		}
	
	//영업기회리스트 팝업창 
	@RequestMapping(value="/actOpptList" , method=RequestMethod.GET)
	public ModelAndView ActOpptList(HttpSession session){

		List<Object> actOpptList = actService.actOpptList();
		ModelAndView mov = new ModelAndView("/sales/act/actPop/act_oppt_list_pop");
		
		mov.addObject("actOpptList", actOpptList);
	
		return mov;
	}
	
	// 영업기회 리스트 검색부분 POST
	@RequestMapping(value="/actOpptList" , method=RequestMethod.POST)
	public ModelAndView ActOpptListSearch(HttpSession session,
			@RequestParam(value="keyfield", defaultValue="oppt_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword){
		
		System.out.println("검색" + keyfield + keyword);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		
		List<Object> actOpptList = actService.actOpptList(map);
		ModelAndView mov = new ModelAndView("/sales/act/actPop/act_oppt_list_pop");
		
		mov.addObject("actOpptList", actOpptList);
	
		return mov;
	}
	
	//고객사 리스트 팝업창
	@RequestMapping(value="/custcompList" , method=RequestMethod.GET)
	public ModelAndView CustcompList(HttpSession session){
		
		List<Object> custcompList = actService.custcompList();
		ModelAndView mov = new ModelAndView("/sales/act/actPop/custcomp_list_pop");
		
		mov.addObject("custcompList", custcompList);
	
		return mov;
	}
	
	//고객사 리스트 팝업창
	@RequestMapping(value="/custcompList" , method=RequestMethod.POST)
	public ModelAndView CustcompListSearch(HttpSession session,
			@RequestParam(value="keyfield", defaultValue="ct_id") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword){
			
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("keyfield", keyfield);
			map.put("keyword", keyword);
		
			List<Object> custcompList = actService.custcompList(map);
			ModelAndView mov = new ModelAndView("/sales/act/actPop/custcomp_list_pop");
			
			mov.addObject("custcompList", custcompList);
		
			return mov;
		}

	// 영업활동 상세정보
	@RequestMapping(value = "actDetail", method = RequestMethod.POST)
	public @ResponseBody ActVO companyCutomerDetail(String sales_actvy_id) {
		
		ActVO actVO = actService.actDetail(sales_actvy_id);
		
		return actVO;
	}
		
	//영업활동등록
	@RequestMapping(value = "/actInsert", method = RequestMethod.POST)
	public @ResponseBody Object actInsert(@RequestBody ActVO actvo, HttpSession session) {
	
		actvo.setFst_reg_id_nm(session.getAttribute("user").toString());
/*		actvo.setStrt_d(new java.sql.Date(actvo.getStrt_d().getTime()));
		actvo.setEnd_d(new java.sql.Date(actvo.getEnd_d().getTime()));*/
		System.out.println(actvo.toString());
		actService.actInsert(actvo);

		return actvo;
			
}
	//영업활동 수정	
	@RequestMapping(value="/actEdit", method= RequestMethod.POST)
	public @ResponseBody Object actEdit(@RequestBody ActVO actvo, HttpSession session
		 , @RequestParam(value = "actPageNum", defaultValue = "1") int actPageNum){
		
		actvo.setFin_mdfy_id_nm(session.getAttribute("user").toString());
		
        actService.actEdit(actvo);
		
		actvo = actService.actDetail(actvo.getSales_actvy_id());
		
		Map<String,Object> actEditMap = new HashMap<String, Object>();
		actEditMap.put("actvo", actvo);
		actEditMap.put("actPageNum",actPageNum);
		
		return actvo;
	}
	
	//영업활동 삭제	
	@RequestMapping(value = "/actDelete", method = RequestMethod.POST)
	public String actDelete(String[] act_del) throws IOException {
		for (String sales_actvy_id : act_del) {
			actService.actDelete(sales_actvy_id);
		}
		return "redirect:/act";
	}

}
