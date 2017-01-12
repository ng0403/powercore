package com.crm.cp.standard.notice.dao;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.notice.vo.NoticeVO;
//import com.crm.cp.standard.org.vo.OrganizationVO;

public interface NoticeDAO {
//커밋 테스트
	public List<NoticeVO> searchRecentNoticeList(String string, String userId);
	public List<Object> searchListNotice(String root, String userId);
	public List<Object> searchRowNumListNotice(String root, Map<?, ?> map);
	public int countNotice(String root, Map<?, ?> map);
	public Object searchOneNotice(String root, String notice_id);
	public void increasechknumNotice(String root, String notice_id);
	public void deleteOneNotice(String root, String notice_id);
	public void insertOneNotice(String root, NoticeVO noticeVO);
	public List<Object> searchListOrg(String root);
	public void modifyNotice(String root, Map<?, ?> json);
	
	//public List<OrganizationVO> getOrgList_notice();

}
