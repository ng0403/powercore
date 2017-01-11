package com.crm.cp.standard.notice.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crm.cp.standard.notice.dao.NoticeDAO;
import com.crm.cp.standard.notice.vo.NoticeVO;
import com.crm.cp.standard.org.vo.OrganizationVO;

@Service
public class NoticeServiceImpl implements NoticeService{
	
	@Autowired
	NoticeDAO noticeDao;

	// 공지사항 리스트 가져오기
	@Override
	public List<NoticeVO> searchRecentNoticeList(String userId) {
		
		List<NoticeVO> notice = noticeDao.searchRecentNoticeList("notice.searchOneRecentNotice", userId);
		return notice;
	}

	@Override
	public List<Object> searchListNotice(String userId) {
		
		List<Object> obj = noticeDao.searchListNotice("notice.searchListNotice", userId);
		return obj;
	}

	@Override
	public List<Object> searchRowNumListNotice(Map<?, ?> map) {
		
		List<Object> obj = noticeDao.searchRowNumListNotice("notice.searchRowNumListNotice", map);
		return obj;
	}

	@Override
	public int countNotice(Map<?, ?> map) {
		
		int totalCount = noticeDao.countNotice("notice.countNotice", map);
		return totalCount;
	}

	@Override
	public Object searchOneNotice(String notice_id) {
		
		Object obj = noticeDao.searchOneNotice("notice.searchOneNotice", notice_id);
		return obj;
	}

	@Override
	public void increasechknumNotice(String notice_id) {
		
		noticeDao.increasechknumNotice("notice.increasechknumNotice", notice_id);
		
	}

	@Override
	public void deleteOneNotice(String notice_id) {
		
		noticeDao.deleteOneNotice("notice.deleteOneNotice", notice_id);
		
	}

	@Override
	public void insertOneNotice(NoticeVO noticeVO) {
		
		noticeDao.insertOneNotice("notice.insertOneNotice", noticeVO);
		
	}

	@Override
	public List<Object> searchListOrg() {
		
		List<Object> obj= noticeDao.searchListOrg("notice.searchListOrg");
		return obj;
		
	}

	@Override
	public void modifyNotice(Map<?, ?> json) {
		
		noticeDao.modifyNotice("notice.modifyNotice", json);
		
	}

	@Override
	public List<OrganizationVO> getOrgList_notice() {
		// TODO Auto-generated method stub
		return noticeDao.getOrgList_notice();
	}

}
