package com.crm.cp.standard.notice.service;

import java.util.List;
import java.util.Map;

import com.crm.cp.standard.notice.vo.NoticeVO;
import com.crm.cp.standard.org.vo.OrganizationVO;

public interface NoticeService {

	public List<NoticeVO> searchRecentNoticeList(String userId);
	public List<Object> searchListNotice(String userId);
	public List<Object> searchRowNumListNotice(Map<?, ?> map);
	public int countNotice(Map<?, ?> map);
	public Object searchOneNotice(String notice_id);
	public void increasechknumNotice(String notice_id);
	public void deleteOneNotice(String notice_id);
	public void insertOneNotice(NoticeVO noticeVO);
	public List<Object> searchListOrg();
	public void modifyNotice(Map<?, ?> json);
	
	public List<OrganizationVO> getOrgList_notice();
}
