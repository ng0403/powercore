package com.crm.cp.sales.est.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.prod.vo.ProdVO;


public interface EstDao {

		List<EstVO> getList(Map<String,String> map);

		List<EstVO> getProdList(Map<String,String> map);
	
		List<EstVO> elcList();
	
	//영업기회 상세정보 조회
		List<EstVO> estDetail(String estim_id);
	//영업기회 수정
		int estModify(EstVO detail);

		//영업기회 추가
		int estAdd(List<EstVO> add);

		//영업기회 상세정보 고객 리스트
		List<Object> estCustComp(Map<String, Object> map);

		//영업기회 검색창 고객 리스트
		List<Object> estSearchCustComp(Map<String, Object> map);
		//상품 리스트 조회
		List<ProdVO> prodList(Map<String, Object> map);
	
	
		// 전체 리스트 개수 가져오기
		int getCCListCount(Map<String, String> map);

		List<EstVO> eduList();

		List<Object> estActOpptList(Map<String, Object> map);

		int estUpdate(Map<String, Object> map);

		int estDelete(String estim_id);

}
