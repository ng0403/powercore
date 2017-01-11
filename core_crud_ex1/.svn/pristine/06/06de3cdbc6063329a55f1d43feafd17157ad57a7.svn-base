package com.crm.cp.sales.est.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.crm.cp.sales.act.vo.ActVO;
import com.crm.cp.sales.est.service.EstServiceImpl;
import com.crm.cp.sales.est.vo.EstVO;
import com.crm.cp.sales.oppt.vo.OpptVO;
import com.crm.cp.standard.prod.vo.ProdVO;


@Repository
public class EstDaoImpl implements EstDao{

	@Autowired
	private SqlSession sqlSession;

	public void setSqlSessionTemplate(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	//기업의 전체 리스트가져오기
	@Override
	public List<EstVO> getList(Map<String,String> map) {
		List<EstVO> list = null;
		try {
			list = sqlSession.selectList("estimate.list", map); //select id
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	
	@Override
	public List<EstVO> getProdList(Map<String,String> map) {
		List<EstVO> prodlist = null;
		try {
			prodlist = sqlSession.selectOne("estimate.detail", map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return prodlist;
	}

	@Override
	public int getCCListCount(Map<String, String> map) {
		int totalCount = 0;
		try {
			totalCount = sqlSession.selectOne("estimate.pagecount",map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return totalCount;
	}
	
	@Override
	public List<EstVO> elcList() {
		// TODO Auto-generated method stub
		return sqlSession.selectList("estimate.elclist"); 
	}
	
	

	@Override
	public List<EstVO> estDetail(String estimId) {
		// TODO Auto-generated method stub
		 EstVO detail = sqlSession.selectOne("estimate.estDetail",estimId);
		 List<EstVO> prod = sqlSession.selectList("estimate.estProdList", estimId);
		 prod.add(detail);
		 
		 return prod;
	}

	@Override
	public int estModify(EstVO detail) {
		// TODO Auto-generated method stub
		return sqlSession.update("estimate.modify",detail);
	}

	@Override
	public int estAdd(List<EstVO> estList) {
		// TODO Auto-generated method stub
		
	int result = 0 ;

		result += sqlSession.insert("estimate.estimateAdd", estList.get(0));
		System.out.println("result 1: " + result);
		
		if( result == 1 ){
			
			for(int i=1; i< estList.size() ; i++){
				System.out.println("opptEstimdd : " + estList.get(i).toString());	
			estList.get(i).setEstim_seq(estList.get(0).getEstim_seq());
			result += sqlSession.insert("estimate.estimateListAdd", estList.get(i));
			System.out.println("result 2: " + result);	
			
			}
		}
		if( result > 1){
			result += sqlSession.insert("estimate.soeAdd", estList.get(0));
			System.out.println("result 3: " + result);			
		}
		
		String sales_oppt_id = estList.get(0).getSales_oppt_id();
		sqlSession.update("estimate.opptLevMdfy",sales_oppt_id);
		
		System.out.println("result sum: " + result);		
		return result; 

	}

	@Override
	public List<Object> estCustComp(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("estimate.customerList",map);
	}

	@Override
	public List<Object> estSearchCustComp(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("estimate.estSearchCustComp", map);
	}

	
	@Override
	public List<ProdVO> prodList(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("estimate.prodList", map);
	}

	@Override
	public List<EstVO> eduList() {
		// TODO Auto-generated method stub
		return sqlSession.selectList("estimate.eduList");
	}

	@Override
	public List<Object> estActOpptList(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("estimate.estActOpptList",map);
	}

	@Override
	public int estUpdate(Map<String, Object> map) {
		// TODO Auto-generated method stub
		List<EstVO> estList = (List<EstVO>)map.get("estList");
		List<String> prodAddId = (List<String>)map.get("prodAddId");
		List<String> prodDeleteProdId = (List<String>)map.get("prodDeleteProdId");
		List<String> prodDeleteEstimId = (List<String>)map.get("prodDeleteEstimId");
		
		int result = 0 ;
		int insertResult = 0; 
		int updateResult = 0;
		System.out.println("update : " + estList.get(0).toString());
		result += sqlSession.update("estimate.estimateUpdate", estList.get(0));
		if( result == 1 ){

			for(int i=1; i< estList.size() ; i++){
			estList.get(i).setEstim_id(estList.get(0).getEstim_id());
			int sw=0;   
			if(prodAddId != null && !prodAddId.isEmpty()) {
			 for(int j=0 ; j<prodAddId.size() ;j++){
				 String id = prodAddId.get(j);
				 if(estList.get(i).getProd_id().equals(id)){
					insertResult += sqlSession.insert("estimate.estimateListMdfyAdd", estList.get(i));
					sw=1; 
				 }
			   }
			 }
			 if(sw != 1){
				 result += sqlSession.update("estimate.estimateListUpdate", estList.get(i));
			 }
			}
			
			if(prodDeleteProdId != null && !prodDeleteProdId.isEmpty()) {
				String estim_id = prodDeleteEstimId.get(0);
			for(String prod_id : prodDeleteProdId){
					 System.out.println("delete prod_id : " + prod_id);
					 System.out.println("delete estim_id : " + estim_id);
					 Map<String,Object> idMap = new HashMap<String,Object>(0);
					 idMap.put("prod_id", prod_id);
					 idMap.put("estim_id", estim_id);
					 updateResult +=sqlSession.update("estimate.estimateListDelete", idMap);

			 }
			}
		}

		System.out.println("result sum: " + result);		
		System.out.println("insert result sum: " + insertResult);		
		System.out.println("update result sum: " + updateResult);		
		return result; 

	}

	@Override
	public int estDelete(String estim_id) {
		// TODO Auto-generated method stub
		
		int result = 0; 
		
		result += sqlSession.update("estimate.estimateDelete", estim_id);
		sqlSession.update("estimate.estListDelete", estim_id);
		System.out.println("delete result : " + result);

		return result;
	
	}

	
}
