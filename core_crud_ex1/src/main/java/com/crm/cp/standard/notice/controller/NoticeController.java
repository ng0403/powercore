package com.crm.cp.standard.notice.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

//import com.crm.cp.standard.iuser.vo.IuserVO;
//import com.crm.cp.standard.menu.service.MenuService;
//import com.crm.cp.standard.menu.vo.MenuVO;
import com.crm.cp.standard.notice.service.NoticeService;
import com.crm.cp.standard.notice.vo.NoticeVO;
//import com.crm.cp.standard.org.vo.OrganizationVO;
import com.crm.cp.utils.PagerVO;

@Controller
public class NoticeController {
	
	
	@Autowired
	NoticeService noticeService;
	
	/*@Resource
	MenuService menuService;*/
	
	@RequestMapping(value="/noticelistpop", method=RequestMethod.GET)
	public ModelAndView noticeListPopPage(HttpSession session, Locale locale){
		
		if(session.getAttribute("user") == null){
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov; 
		}
		
		String userId = session.getAttribute("user").toString();
		
		List<Object> noticelist= noticeService.searchListNotice(userId);
		
		for(int i =0; i<noticelist.size();i++){
			Map<String, Object> notice= (Map<String, Object>) noticelist.get(i);
			String nTitle = notice.get("TITLE").toString();
			if(nTitle.length() > 24){
				notice.replace("TITLE", nTitle.toString().substring(0, 24)+"....");
			}
		}
		
		ModelAndView mov = new ModelAndView("/standard/notice/noticePopup");
		mov.addObject("notice", noticelist);
		return mov;
		
	}
	
	//怨듭��궗�빆 由ъ뒪�듃
	@RequestMapping(value="/notice", method=RequestMethod.GET)
	public ModelAndView noticeListPage(HttpSession session, Locale locale,
			@RequestParam(value = "currentPageNum", defaultValue="1") int currentPageNum,
			@RequestParam(value = "searchnotice", defaultValue="") String searchnotice,
			@RequestParam(value = "code", defaultValue="empty") String selectcode,
			@RequestParam(value = "titlecont", defaultValue="title") String titlecont, //�젣紐�, �궡�슜 媛� 媛��졇�삤湲�
			@RequestParam(value = "search", defaultValue = "") String search,
			@RequestParam(value = "orgCode", defaultValue = "") String orgCode,
			@RequestParam(value = "iuser_id_nm", defaultValue = "") String iuser_id_nm,
			@RequestParam(value = "iuser_nm", defaultValue = "") String iuser_nm){
		
		if(session.getAttribute("user") == null){
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov;
		}
		
		String userId = session.getAttribute("user").toString();
		
		//담당부서 목록 
		//List<OrganizationVO> orgList = noticeService.getOrgList_notice();

		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("searchnotice", searchnotice);
		map.put("selectcode", selectcode);
		map.put("titlecont", titlecont); //제목, 내용으로 검색
		map.put("search", search); //제목, 내용 검색 창
		//map.put("orgList", orgList); //부서목록
		map.put("orgCode", orgCode); //부서코드 검색
		map.put("iuser_id_nm", iuser_id_nm);
		map.put("iuser_nm", iuser_nm);
		
		int totalCount = noticeService.countNotice(map);
		PagerVO pagerVO = new PagerVO(currentPageNum, totalCount, 15, 5);
		
		map.put("PagerVO", pagerVO);
		
		//由ъ뒪�듃 mapper�뿉 肉뚮젮二쇨린
		List<Object> noticelist= noticeService.searchRowNumListNotice(map);
		
		for(int i =0; i<noticelist.size();i++){
			Map<String, Object> notice= (Map<String, Object>) noticelist.get(i);
			String nTitle = notice.get("TITLE").toString();
			if(nTitle.length() > 30){
				notice.replace("TITLE", nTitle.toString().substring(0, 30)+"....");
			}
		}
		//List<MenuVO> menuList = menuService.selectAll(session);
		
		ModelAndView mov = new ModelAndView("notice");
		mov.addObject("notice", noticelist);
		mov.addObject("pagerVO", pagerVO);
		mov.addObject("selectcode", selectcode);
		mov.addObject("searchnotice", searchnotice);
		//mov.addObject("menuList", menuList);
		mov.addObject("titlecont", titlecont);
		mov.addObject("search", search);
		//mov.addObject("orgList", orgList);
		mov.addObject("orgCode", orgCode);
		mov.addObject("iuser_id_nm", iuser_id_nm);
		mov.addObject("iuser_nm", iuser_nm);
		return mov;
		
	}
	
	@RequestMapping(value="noticecode", method=RequestMethod.POST)
	public @ResponseBody List<Object> callOrgCode(){
		
		List<Object> code = noticeService.searchListOrg();
		return code;
		
	}
	
	//湲� �씫湲�
	@RequestMapping(value="noticedetail", method=RequestMethod.GET)
	public ModelAndView noticeDetailPage(HttpSession session
			, @RequestParam(value="noticeId") String notice_id){
		
		/*if(session.getAttribute("user") == null){
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov;
		}
		*/
		Object notice= noticeService.searchOneNotice(notice_id);
		
		//List<MenuVO> menuList = menuService.selectAll(session);
		
		//蹂몄씤湲�留� �닔�젙, �궘�젣�븯�뒗怨�
		HashMap<String, Object> vo = (HashMap<String, Object>)notice;
		String fstNm =  (String)vo.get("FST_REG_ID_NM");
		String user_id = (String)session.getAttribute("user");
		String auth="noAuth"; 
		
		if(fstNm.equals(user_id) || user_id.equals("admin")){ //湲��벑濡앹옄�� 濡쒓렇�씤�븳 �븘�씠�뵒媛� 媛숆굅�굹, 愿�由ъ옄�씪�븣
			auth ="yesAuth";
		}else{
			auth="noAuth";
		}
		
		ModelAndView mov = new ModelAndView("/standard/notice/noticeDetail");
		mov.addObject("notice", notice);
		//mov.addObject("menuList", menuList);
		mov.addObject("auth", auth);
		return mov;
		
	}
	
	@RequestMapping(value="noticeclickNum", method=RequestMethod.POST)
	public @ResponseBody boolean noticeClickNum(@RequestBody String notice_id){
		
		noticeService.increasechknumNotice(notice_id);
		
		return true;
		
	}
	
	
	@RequestMapping(value="noticewrite", method=RequestMethod.GET)
	public ModelAndView noticeInsertPage(HttpSession session){
		
		if(session.getAttribute("user") == null){
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov;
		}
		
		List<Object> org= noticeService.searchListOrg();
		//List<MenuVO> menuList = menuService.selectAll(session);
		
		ModelAndView mov = new ModelAndView("noticeWrite");
		mov.addObject("org", org);
		//mov.addObject("menuList", menuList);
		return mov;
	}
	
	@RequestMapping(value="noticewriteconfirm", method=RequestMethod.POST)
	public ModelAndView noticeInsertConfirm(@ModelAttribute NoticeVO noticeVO, HttpSession session){
		
		if(session.getAttribute("user") == null){
			ModelAndView mov = new ModelAndView("redirect:/");
			return mov;
		}
		
		noticeVO.setFst_reg_id_nm(session.getAttribute("user").toString());
		noticeVO.setFin_mdfy_id_nm(session.getAttribute("user").toString());
		
		SimpleDateFormat format = new SimpleDateFormat();
		format.applyLocalizedPattern("yyyy-MM-dd");
		
		/*if(noticeVO.getStart_date()!=null||noticeVO.getStart_date()!=""){
			try {
				java.util.Date sdate = format.parse(noticeVO.getStart_date());
				noticeVO.setStrd_d(sdate);
				
			} catch (ParseException e) {
			}
			
		}
		
		if(noticeVO.getEnd_date()!=""||noticeVO.getEnd_date()!=null){
			
			try {
				java.util.Date edate = format.parse(noticeVO.getEnd_date());
				noticeVO.setEnd_d(edate);
				
			} catch (ParseException e) {
			}
			
		}*/
		
		noticeService.insertOneNotice(noticeVO);
		ModelAndView mov = new ModelAndView("redirect:/notice");
		return mov;
		
	}
	
	@RequestMapping(value="noticedelete", method=RequestMethod.GET)
	public ModelAndView noticeDeletePage(HttpSession session, @RequestParam(value="noticeId") String notice_id){
		
		noticeService.deleteOneNotice(notice_id);
		
		ModelAndView mov = new ModelAndView("redirect:/notice");
		return mov;
		
	}
	
	@RequestMapping(value="noticeModify", method=RequestMethod.POST)
	public @ResponseBody Object noticeModify(@RequestBody Map json){
		
		SimpleDateFormat format = new SimpleDateFormat();
		format.applyLocalizedPattern("yyyy-MM-dd");
		
		if((json.get("strd"))!=null){
			try {
				java.util.Date strd_d = format.parse(json.get("strd").toString());
				json.put("strd_d", strd_d);
			} catch (ParseException e) {
				json.put("strd_d", null);
			}
			
		}
		if((json.get("end"))!=null){
			try {
				java.util.Date end_d = format.parse(json.get("end").toString());
				json.put("end_d", end_d);
			} catch (ParseException e) {
				json.put("end_d", null);
			}
			
		}
		noticeService.modifyNotice(json);
		
		Object notice = noticeService.searchOneNotice(json.get("notice_id").toString());
		return notice;
		
	}

}
