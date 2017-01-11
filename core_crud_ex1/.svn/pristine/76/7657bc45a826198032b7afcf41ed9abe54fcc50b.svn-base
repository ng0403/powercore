package com.crm.cp.standard.auth.dao;

import java.util.List;
import java.util.Map;

public interface AuthDao {

	public int insert(String root, Object obj);
	public List<Object> selectAll(String root);
	public List<Object> selectAll(String root, Object arg);
	public List<Object> searchList(String root, Map<String, Object> map) throws Exception;
	public Map<String, Object> selectOne(String root);
	public Object selectOne(String root, Object obj);
	public Map<String, Object> selectOnes(String root, Object obj);
	public int update(String root, Object obj);
	public int delete(String root, Object obj);
	public Object authUserDelete(String root, Object obj);
	public Object checkUpdate(String root, Object obj);
}
