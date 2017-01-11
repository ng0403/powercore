package com.crm.cp.standard.addr.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.standard.addr.dao.AddrDao;
import com.crm.cp.standard.addr.vo.AddressVo;
import com.crm.cp.utils.PagerVO;

@Service
public class AddrServiceImpl implements AddrService {

	@Resource
	AddrDao addrDao;
	
	@Override
	public PagerVO getAddrListNum(int addrPageNum, String dong_nm) {
		// 현재 페이지 얻어오기
		PagerVO page = new PagerVO(addrPageNum, 0, 15, 10);
		// 전체 글의 갯수 구하기
		int addrListNum = addrDao.getAddrListNum(dong_nm);

		page = new PagerVO(addrPageNum, addrListNum, 15, 10);
		page.setTotalCount(addrListNum);

		return page;
	}

	@Override
	public List<AddressVo> getAddrList(Map<String, Object> addrMap, PagerVO page) {
		addrMap.put("startRow", page.getStartRow());
		addrMap.put("endRow", page.getEndRow());
		List<AddressVo> ppVOList = addrDao.getAddrList(addrMap);

		return ppVOList;
	}

}
