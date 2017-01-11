package com.crm.cp.standard.auth.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.crm.cp.standard.auth.dao.AuthDao;
import com.crm.cp.standard.auth.vo.AuthVO;


@Service
public class AuthServiceImpl implements AuthService{
	
	@Resource
	AuthDao dao;

	@Override
	public List<Object> authList() {
		List<Object> list = dao.selectAll("auth.authSelect");
		return list;
	}
	
	@Override
	public List<Object> authList(Map<String, Object> map) {
		
		try {
			List<Object> list= dao.searchList("auth.authSelect", map);
			return list;
		} catch (Exception e) {
			return null;
		}
		
	}
	
	@Override
	public Object authDetail(String temp) {
		Object auth = (Object)dao.selectOne("auth.authDetail",temp);
		return auth;
	}
	
	@Override
	public void authEdit(AuthVO auth) {
		dao.update("auth.authEdit", auth);
	}
	
	@Override
	public void authInsert(AuthVO auth) {
		dao.insert("auth.authInsert", auth);
		
	}
	
	@Override
	public void authDelete(AuthVO auth) {
		dao.checkUpdate("auth.authDelete", auth);
	}
}
