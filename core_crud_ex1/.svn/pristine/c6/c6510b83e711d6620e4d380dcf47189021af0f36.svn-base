package com.crm.cp.standard.category.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.standard.category.dao.CategoryDao;
import com.crm.cp.standard.category.vo.CategoryVO;

@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	CategoryDao dao;

	@Override
	public List<CategoryVO> selectAll() {
		List<Object> tree = dao.selectAll("category.selectCateParentTree");
		List<Object> subtree = dao.selectAll("category.selectCateChildTree");
		List<CategoryVO> list = new ArrayList<CategoryVO>();
		
		//상위메뉴에 속하는 하위메뉴 리스트 넣기
		for(Object treevo : tree) {
			ArrayList<CategoryVO> subList = new ArrayList<CategoryVO>();
			CategoryVO ca = (CategoryVO) treevo;
			
			for(Object subcate : subtree){
				CategoryVO subca = (CategoryVO) subcate;
			
				if(ca.getCate_id().equals(subca.getUp_cate_id())){
					subList.add(subca);
				}
			}
			list.add(new CategoryVO(ca.getCate_id(), ca.getCate_nm(), ca.getUp_cate_id(), ca.getCate_dtl_cont(), 
					ca.getFst_reg_id_nm(), ca.getFst_reg_dt(), ca.getFin_mdfy_id_nm(), ca.getFin_mdfy_dt(), ca.getAct_yn(), subList));
		}		
		return list;
	}
	
	@Override
	public List<Object> selectPopList() {
		List<Object> list = dao.selectAll("category.selectPopList");
		return list;
	}
	
	@Override
	public List<Object> selectPopList(Map<String, Object> map) {
		List<Object> list = dao.selectAll("category.selectPopList", map);
		return list;
	}
	
	@Override
	public Object selectOne(Object obj) {
		Object result = dao.selectOne("category.searchCateDetail", obj);
		return result;
	}
	
	@Override
	public Object cateNameCount(Map<String, Object> map) {
		Object obj = dao.selectOne("category.cateNameCount", map);
		return obj;
	}

	@Override
	public Map<String, Object> insert(Object obj) {
		Map<String, Object> map = new HashMap<String, Object>();
		int result = dao.insert("category.cateInsert", obj);
		Object cateId = dao.selectOne("category.searchCateId", obj);
		
		map.put("insertCateOk", result);
		map.put("cate_id", cateId);
		return map;
	}

	@Override
	public int update(Object obj) {
		int result = dao.update("category.cateUpdate", obj);
		return result;
	}

	@Override
	public int delete(Map<String,Object> data) {
		int result=1;
		
		try{
			@SuppressWarnings("unchecked")
			List<String> masterList = (List<String>) data.get("master");
			for (String master : masterList) {
				dao.update("category.cateDelete", master);
			}			
			
			@SuppressWarnings("unchecked")
			List<String> subList = (List<String>) data.get("sub");
			for (String sub : subList) {
				dao.update("category.cateDelete", sub);
			}
		}catch (Exception e){
			return 0;
		}	
		return result;
	}
}
