package com.crm.cp.standard.category.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.category.service.CategoryService;
import com.crm.cp.standard.category.vo.CategoryVO;
import com.crm.cp.standard.menu.service.MenuService;
import com.crm.cp.standard.menu.vo.MenuVO;

@Controller
public class CategoryController {
	
	@Resource
	CategoryService cateService;
	
	@Resource
	MenuService menuService;
	
	@RequestMapping(value="/category", method=RequestMethod.GET)
	public ModelAndView category(HttpSession session){
		if (session.getAttribute("user") == null) {
			return new ModelAndView("redirect:/");
		}
   	    
   	    List<MenuVO> menuList = menuService.selectAll(session);
   	    List<CategoryVO> cateTree = cateService.selectAll();
   	    ModelAndView mav = new ModelAndView("category", "cateTree", cateTree);
		mav.addObject("menuList", menuList);
		
		return mav;
	}
	
	//카테고리 중복검사
	@RequestMapping(value = "/cateNameValidate", method = RequestMethod.POST)
	public @ResponseBody Object cateNameValidate(@RequestBody Map<String, Object> data){
		Object obj = cateService.cateNameCount(data);
		return obj;
	}
	
	//카테고리 등록
	@RequestMapping(value = "/cateInsert", method = RequestMethod.POST)
	public @ResponseBody Map<String,Object> cateInsert(HttpSession session, @RequestBody CategoryVO vo){
		vo.setFst_reg_id_nm(session.getAttribute("user").toString());
		vo.setFin_mdfy_id_nm(session.getAttribute("user").toString());
		Map<String,Object> map = cateService.insert(vo);
		return map;
	}
	
	//카테고리 수정
	@RequestMapping(value = "/cateUpdate", method = RequestMethod.POST)
	public @ResponseBody Object cateUpdate(HttpSession session, @RequestBody CategoryVO vo){
		vo.setFin_mdfy_id_nm(session.getAttribute("user").toString());
		int result = cateService.update(vo);
		return result;
	}
	
	//카테고리 상세정보
	@RequestMapping(value = "/cateDetail", method = RequestMethod.POST)
	public @ResponseBody Object cateDetail(@RequestBody Object obj){
		Object result = cateService.selectOne(obj);
		return result;
	}
	
	@RequestMapping(value = "/upCateSearch", method = RequestMethod.GET)
	public ModelAndView upCateSearchGet(){
		List<Object> cateList = cateService.selectPopList();
		return new ModelAndView("standard/category/categoryPopup", "cateList", cateList);
	}
	
	@RequestMapping(value = "/upCateSearch", method = RequestMethod.POST)
	public ModelAndView upCateSearchPost(
			@RequestParam(value="keyfield", defaultValue="up_cate_nm") String keyfield,
			@RequestParam(value="keyword", defaultValue="") String keyword){
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("keyfield", keyfield);
		map.put("keyword", keyword);
		List<Object> cateList = cateService.selectPopList(map);
		return new ModelAndView("standard/category/categoryPopup", "cateList", cateList);
	}
	
	@RequestMapping(value = "/cateDelete", method = RequestMethod.POST)
	public @ResponseBody int cateDelete(@RequestBody Map<String,Object> data){
		System.out.println(data.toString());
		int result = cateService.delete(data);
		return result;
	}
}
