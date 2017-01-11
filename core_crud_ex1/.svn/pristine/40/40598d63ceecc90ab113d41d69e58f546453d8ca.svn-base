package com.crm.cp.standard.addr.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.crm.cp.standard.addr.service.AddrService;
import com.crm.cp.standard.addr.vo.AddressVo;
import com.crm.cp.utils.PagerVO;

@Controller
public class AddrController {

	@Resource
	AddrService addrService;

	// 우편번호 검색 팝업
	@RequestMapping(value = "ccAddrListPop.do", method = RequestMethod.GET)
	public ModelAndView addrListPopup() {
		ModelAndView mov = new ModelAndView("/standard/addr/addr_pop");
		return mov;
	}
	
	//조직관리 우편번호 검색 팝업
	@RequestMapping(value = "orgTreeAddrListPop.do", method = RequestMethod.GET)
	public ModelAndView orgTreeAddrListPopup() {
		ModelAndView mov = new ModelAndView("/standard/org/orgTreeAddr_pop");
		return mov;
	}

	// 우편번호 검색
	@RequestMapping(value = "addrList.do", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> zipCodeSearch(String dong_nm,
			@RequestParam(value = "addrPageNum", defaultValue = "1") int addrPageNum) {
		Map<String, Object> addrMap = new HashMap<String, Object>();

		// 우편번호 페이지 정보 얻기
		PagerVO page = addrService.getAddrListNum(addrPageNum, dong_nm);
		addrMap.put("dong_nm", dong_nm);

		// 리스트 가져오기
		List<AddressVo> addrList = addrService.getAddrList(addrMap, page);

		addrMap.put("addrPageNum", addrPageNum);
		addrMap.put("page", page);
		addrMap.put("addrList", addrList);

		return addrMap;
	}
}
