package com.crm.cp.standard.addr.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.standard.addr.vo.AddressVo;

@Repository
public class AddrDaoImpl implements AddrDao{

	@Autowired
	private SqlSession sqlSession;
	
	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public int getAddrListNum(String dong_nm) {
		int addrListNum = 0;
		try {
			addrListNum = sqlSession.selectOne("addrListNum", dong_nm);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return addrListNum;
	}

	@Override
	public List<AddressVo> getAddrList(Map<String, Object> addrMap) {
		List<AddressVo> addrList = null;
		try {
			addrList = sqlSession.selectList("addrList", addrMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return addrList;
	}

}
