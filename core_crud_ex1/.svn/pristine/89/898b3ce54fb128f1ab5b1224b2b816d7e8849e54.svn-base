package com.crm.cp.standard.menu.service;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpSession;
import com.crm.cp.standard.menu.vo.MenuVO;

public interface MenuService {
	
	public List<MenuVO> selectAll(HttpSession session);
	public List<MenuVO> selectMenuTree();
	public List<Object> selectAll(Map<String, Object> map);
	public List<Object> selectPmenu();
	public Object menuNameCount(Map<String,Object> obj);
	public Object selectDetail(Object obj);
	public Map<String,Object> insertMenu(HttpSession session, MenuVO data);
	public int insertMenuAuth(HttpSession session, MenuVO data);
	public int updateMenu(HttpSession session, MenuVO data);
	public int deleteMenu(List<Object> data);
}
